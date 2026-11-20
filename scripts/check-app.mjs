#!/usr/bin/env node
/**
 * Checks the docs' promises to IoT Breeze against the app source, so a renamed screen or tour fails
 * here instead of sending the help panel to the wrong page:
 *   - every `app.routes` entry (en and de) is a screen IoT Breeze has (a page under apps/iot-breeze/app);
 *   - every `app.tour` is a tour or guide id in src/data/tours.json, and tours.json matches the app's
 *     tour ids (re-run scripts/sync-tours.mjs when it doesn't).
 *
 *   node scripts/check-app.mjs [--repo ../nimbit] [--ref origin/development]
 *
 * --ref reads the app at that commit (git ls-tree / git show) instead of the working tree.
 * Exits 1 and lists every problem when something doesn't match.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import yaml from "js-yaml";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const args = process.argv.slice(2);
const opt = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
const repo = path.resolve(opt("--repo", path.join(ROOT, "../nimbit")));
const ref = opt("--ref", undefined);
/** A page's front matter. */
const frontMatter = (text) => (yaml.load(/^---\n([\s\S]*?)\n---/.exec(text)?.[1] ?? "") ?? {});

const git = (...a) => execFileSync("git", ["-C", repo, ...a], { maxBuffer: 64 << 20 }).toString();
const APP = "apps/iot-breeze";

/** Files under a directory of the app, at --ref or in the working tree. */
function list(dir) {
  if (ref) return git("ls-tree", "-r", "--name-only", ref, "--", `${APP}/${dir}`).split("\n").filter(Boolean);
  const out = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(path.join(repo, d), { withFileTypes: true })) {
      const p = `${d}/${e.name}`;
      e.isDirectory() ? walk(p) : out.push(p);
    }
  };
  walk(`${APP}/${dir}`);
  return out;
}
const read = (file) => (ref ? git("show", `${ref}:${file}`) : fs.readFileSync(path.join(repo, file), "utf8"));

// Screens: app/[lang]/…/page.tsx, without route groups; [x] is one segment, [...x] / [[...x]] the rest.
const screens = list("app")
  .filter((f) => /\/page\.(tsx|ts|jsx|js|mdx)$/.test(f) && f.startsWith(`${APP}/app/[lang]`))
  .map((f) =>
    f
      .slice(`${APP}/app/[lang]`.length)
      .replace(/\/page\.\w+$/, "")
      .replace(/\/\([^)]*\)/g, "")
      .split("/")
      .filter(Boolean)
      .map((s) => (/^\[\[?\.\.\./.test(s) ? "*" : /^\[.*\]$/.test(s) ? ":" : s)),
  )
  // The root catch-all is the app's not-found page; it would match every route.
  .filter((screen) => screen.join("/") !== "*");

/** A docs route matches a screen when each segment is equal or the screen takes any value there. */
const exists = (route) => {
  const segs = route.split("/").filter(Boolean).map((s) => (s.startsWith(":") ? ":" : s));
  return screens.some((screen) => {
    for (let i = 0; i < screen.length; i++) {
      if (screen[i] === "*") return true;
      if (i >= segs.length) return false;
      if (screen[i] !== ":" && screen[i] !== segs[i]) return false;
    }
    return screen.length === segs.length;
  });
};

// Tours in the app: every `id: '…'` in the tours folder.
const appTours = new Set(
  list("components/GuidedTours/tours")
    .filter((f) => /\.tsx?$/.test(f) && !/\.test\./.test(f))
    .flatMap((f) => [...read(f).matchAll(/^\s*id: ?['"]([\w-]+)['"]/gm)].map((m) => m[1])),
);
const tours = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/tours.json"), "utf8"));
const known = new Set([...tours.map((t) => t.id), ...tours.map((t) => t.guide).filter(Boolean)]);

const problems = [];
for (const t of tours) if (!appTours.has(t.id)) problems.push(`src/data/tours.json: tour "${t.id}" is gone from the app (run scripts/sync-tours.mjs)`);
const synced = new Set(tours.map((t) => t.id));
for (const id of appTours) if (!synced.has(id) && !known.has(id)) problems.push(`src/data/tours.json: the app has tour "${id}" (run scripts/sync-tours.mjs)`);

const pages = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { recursive: true }).filter((f) => /\.mdx?$/.test(f)).map((f) => path.join(dir, f))
    : [];
for (const file of [...pages(path.join(ROOT, "docs")), ...pages(path.join(ROOT, "i18n/de/docusaurus-plugin-content-docs/current"))]) {
  const app = frontMatter(fs.readFileSync(file, "utf8")).app;
  if (!app) continue;
  const rel = path.relative(ROOT, file);
  for (const route of app.routes ?? []) if (!exists(route)) problems.push(`${rel}: app.routes "${route}" is no screen in IoT Breeze`);
  for (const route of Array.isArray(app.primary) ? app.primary : [])
    if (!(app.routes ?? []).includes(route)) problems.push(`${rel}: app.primary "${route}" is not in app.routes`);
  if (app.tour && !known.has(app.tour)) problems.push(`${rel}: app.tour "${app.tour}" is no tour or guide in src/data/tours.json`);
}

const where = ref ? `${path.basename(repo)}@${ref}` : repo;
if (problems.length) {
  console.error(`${problems.length} problem(s) against ${where}:\n` + problems.map((p) => `  ${p}`).join("\n"));
  process.exit(1);
}
console.log(`Docs match IoT Breeze (${where}): ${screens.length} screens, ${appTours.size} tours.`);
