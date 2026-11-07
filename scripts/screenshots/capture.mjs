#!/usr/bin/env node
// @ts-check
/**
 * Captures the IoT Breeze screenshots that the docs ask for.
 *
 * Every <Screenshot page id route state alt /> in docs/ is one shot. For each one this script
 * opens the route in IoT Breeze at 1440×900 (scale 2), in light and dark, and writes
 * static/img/screens/<page>/<id>.<lang>.<theme>.png. Captured keys go into
 * src/data/screenshots.json, which switches the placeholder to the picture.
 *
 * What it cannot know from the MDX lives in scripts/screenshots/shots.json:
 *   - "params": values for route parameters, global (":id" is too vague to be global, so
 *     prefer per-shot) or per shot key ("automate/threshold-alert/01-rule-canvas").
 *   - "steps": per shot key, actions that bring the screen into the described `state`:
 *       { "click": "Button text" } | { "clickSelector": "css" } | { "fill": ["css", "text"] }
 *       | { "press": "Escape" } | { "wait": 500 } | { "waitFor": "text" } | { "hover": "css" }
 *
 * Usage:
 *   IOTBREEZE_URL=https://iotbreeze.example IOTBREEZE_EMAIL=… IOTBREEZE_PASSWORD=… \
 *     node scripts/screenshots/capture.mjs [--only <prefix>] [--lang en] [--list]
 *
 * --list prints every shot with what is missing (params or steps) and captures nothing.
 * Use a demo tenant with realistic, non-customer data: the pictures are published.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const DOCS = path.join(ROOT, "docs");
const OUT = path.join(ROOT, "static/img/screens");
const AVAILABLE = path.join(ROOT, "src/data/screenshots.json");
const CONFIG = path.join(ROOT, "scripts/screenshots/shots.json");

const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const only = arg("--only");
const lang = arg("--lang") ?? "en";
const listOnly = args.includes("--list");

/** @param {string} dir @returns {string[]} */
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.mdx$/.test(e.name) ? [p] : [];
  });

/** All <Screenshot … /> elements with string props. */
function findShots() {
  const shots = [];
  for (const file of walk(DOCS)) {
    const src = fs.readFileSync(file, "utf8");
    for (const m of src.matchAll(/<Screenshot\b([\s\S]*?)\/>/g)) {
      /** @type {Record<string, string>} */
      const props = {};
      for (const p of m[1].matchAll(/(\w+)=(?:"([^"]*)"|\{"([^"]*)"\}|'([^']*)')/g)) {
        props[p[1]] = p[2] ?? p[3] ?? p[4];
      }
      if (!props.page || !props.id || !props.route) continue;
      shots.push({ key: `${props.page}/${props.id}`, file: path.relative(ROOT, file), ...props });
    }
  }
  return shots;
}

const config = fs.existsSync(CONFIG) ? JSON.parse(fs.readFileSync(CONFIG, "utf8")) : {};
const params = config.params ?? {};
const steps = config.steps ?? {};

/** Fills :params in a route from the shot's own params, then the global ones. */
function resolveRoute(shot) {
  const own = params[shot.key] ?? {};
  const global = Object.fromEntries(Object.entries(params).filter(([, v]) => typeof v === "string"));
  const route = shot.route.replace(/:(\w+)/g, (all, name) => own[name] ?? global[`:${name}`] ?? all);
  return { route, missing: [...route.matchAll(/:(\w+)/g)].map((m) => m[1]) };
}

const shots = findShots().filter((s) => !only || s.key.startsWith(only));

if (listOnly) {
  for (const s of shots) {
    const { route, missing } = resolveRoute(s);
    const notes = [missing.length ? `needs params ${missing.join(", ")}` : "", s.state && !steps[s.key] ? "state without steps" : ""]
      .filter(Boolean)
      .join("; ");
    console.log(`${s.key}\t${route}${notes ? `\t(${notes})` : ""}`);
  }
  console.log(`\n${shots.length} shots`);
  process.exit(0);
}

const base = process.env.IOTBREEZE_URL?.replace(/\/$/, "");
const email = process.env.IOTBREEZE_EMAIL;
const password = process.env.IOTBREEZE_PASSWORD;
if (!base || !email || !password) {
  console.error("Set IOTBREEZE_URL, IOTBREEZE_EMAIL and IOTBREEZE_PASSWORD.");
  process.exit(1);
}

/** Hides anything that only shows in development or would date the picture. */
const HIDE_CSS = `
  nextjs-portal, [data-nextjs-toast], [data-nextjs-dev-tools-button], #__next-build-watcher { display: none !important; }
  *, *::before, *::after { caret-color: transparent !important; transition: none !important; animation-duration: 0s !important; }
`;

async function runStep(page, step) {
  if (step.click) await page.getByText(step.click, { exact: true }).first().click();
  else if (step.clickSelector) await page.locator(step.clickSelector).first().click();
  else if (step.fill) await page.locator(step.fill[0]).first().fill(step.fill[1]);
  else if (step.press) await page.keyboard.press(step.press);
  else if (step.hover) await page.locator(step.hover).first().hover();
  else if (step.waitFor) await page.getByText(step.waitFor).first().waitFor();
  else if (step.wait) await page.waitForTimeout(step.wait);
}

const browser = await chromium.launch();
const available = new Set(JSON.parse(fs.readFileSync(AVAILABLE, "utf8")));
const skipped = [];
const failed = [];

for (const theme of /** @type {const} */ (["light", "dark"])) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, colorScheme: theme, locale: lang });
  const page = await context.newPage();

  // Sign in on the identity directory's two-step form.
  await page.goto(`${base}/auth/login`);
  await page.locator("#email").fill(email);
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.locator("#password").fill(password);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForURL((url) => !/\/auth\/(login|code|password)/.test(url.pathname), { timeout: 60_000 });

  for (const shot of shots) {
    const { route, missing } = resolveRoute(shot);
    if (missing.length) {
      if (theme === "light") skipped.push(`${shot.key}: needs ${missing.join(", ")}`);
      continue;
    }
    try {
      await page.goto(`${base}/${lang}${route}`, { waitUntil: "networkidle", timeout: 60_000 });
      await page.addStyleTag({ content: HIDE_CSS });
      await page.evaluate((t) => document.documentElement.classList.toggle("dark", t === "dark"), theme);
      for (const step of steps[shot.key] ?? []) await runStep(page, step);
      await page.waitForTimeout(600);
      const file = path.join(OUT, shot.page, `${shot.id}.${lang}.${theme}.png`);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      await page.screenshot({ path: file });
      if (theme === "dark") available.add(shot.key);
      console.log(`✓ ${shot.key} (${theme})`);
    } catch (error) {
      failed.push(`${shot.key} (${theme}): ${error instanceof Error ? error.message.split("\n")[0] : error}`);
    }
  }
  await context.close();
}
await browser.close();

fs.writeFileSync(AVAILABLE, `${JSON.stringify([...available].sort(), null, 2)}\n`);
if (skipped.length) console.log(`\nSkipped (add params to shots.json):\n  ${skipped.join("\n  ")}`);
if (failed.length) console.log(`\nFailed:\n  ${failed.join("\n  ")}`);
console.log(`\n${available.size} screenshots available.`);
