#!/usr/bin/env node
/**
 * Reads IoT Breeze's guided tours and guides from the app source and writes src/data/tours.json:
 * [{ id, title, titleDe, route, guide?, guideTitle?, guideTitleDe? }]. TourLink and the guided tours
 * page use it. German titles come from the app's locales/de; a missing one falls back to English.
 *
 *   node scripts/sync-tours.mjs [--repo ../nimbit]
 *
 * Bundles apps/iot-breeze/components/GuidedTours/{tours,guides} with the app's esbuild, so it needs
 * `pnpm install` in the nimbit repo. Re-run when tours are added or renamed.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const args = process.argv.slice(2);
const repo = path.resolve(args.includes("--repo") ? args[args.indexOf("--repo") + 1] : path.join(ROOT, "../nimbit"));
const app = path.join(repo, "apps/iot-breeze");
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "tours-"));
const entry = path.join(dir, "entry.ts");

// Titles are i18n helpers; their English fallback is the defaultValue.
fs.writeFileSync(
  entry,
  `import { TOURS } from '${app}/components/GuidedTours/tours';
import { GUIDES } from '${app}/components/GuidedTours/guides';
const title = (t: any): string => typeof t === 'string' ? t : t?.defaultValue ?? t?.fallback ?? '';
const ref = (t: any) => (typeof t === 'object' && t?.ns && t?.key ? { ns: t.ns, key: t.key } : undefined);
const guides = new Map(GUIDES.map((g: any) => [g.id, g.title]));
const out = TOURS.map((t: any) => {
  const g = t.chapter?.guide ? guides.get(t.chapter.guide) : undefined;
  return {
    id: t.id,
    title: title(t.title),
    titleRef: ref(t.title),
    route: t.steps?.[0]?.route ?? '/',
    ...(g ? { guide: t.chapter.guide, guideTitle: title(g), guideTitleRef: ref(g) } : {}),
  };
});
process.stdout.write(JSON.stringify(out, null, 2) + '\\n');
`,
);

const esbuild = createRequire(path.join(repo, "package.json")).resolve("esbuild/bin/esbuild");
const bundle = path.join(dir, "out.cjs");
execFileSync(
  esbuild,
  [entry, "--bundle", "--platform=node", "--format=cjs", `--tsconfig=${path.join(app, "tsconfig.json")}`,
    "--loader:.svg=text", "--loader:.png=empty", "--loader:.css=empty", "--log-level=error", `--outfile=${bundle}`],
  { cwd: app, stdio: "inherit" },
);
const raw = JSON.parse(execFileSync(process.execPath, [bundle], { cwd: app }).toString());

// German titles from the app's translation files (nested JSON, keys may contain dots).
const locales = new Map();
const german = (r, fallback) => {
  if (!r) return fallback;
  if (!locales.has(r.ns)) {
    const file = path.join(app, "public/locales/de", `${r.ns}.json`);
    locales.set(r.ns, fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {});
  }
  const dict = locales.get(r.ns);
  const value = dict[r.key] ?? r.key.split(".").reduce((o, k) => (o == null ? o : o[k]), dict);
  return typeof value === "string" ? value : fallback;
};
const tours = raw.map(({ titleRef, guideTitleRef, ...t }) => ({
  ...t,
  titleDe: german(titleRef, t.title),
  ...(t.guide ? { guideTitleDe: german(guideTitleRef, t.guideTitle) } : {}),
}));
const json = `${JSON.stringify(tours, null, 2)}\n`;
const target = path.join(ROOT, "src/data/tours.json");
fs.writeFileSync(target, json);
fs.rmSync(dir, { recursive: true, force: true });
console.log(`Wrote ${tours.length} tours to ${path.relative(ROOT, target)}`);
