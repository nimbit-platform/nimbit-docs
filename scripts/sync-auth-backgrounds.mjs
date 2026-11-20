#!/usr/bin/env node
/**
 * Copies the identity directory's sign-in backgrounds (network, telemetry, devices, geofences) into
 * the docs, so the homepage hero looks like the IoT Breeze sign-in page.
 *
 * The SVG is drawn by the directory's Go templates, so it is taken from a running directory
 * (`?bg=<kind>&detail=calm` on its login page). The CSS is copied from its source.
 *
 *   node scripts/sync-auth-backgrounds.mjs [--url http://localhost:8000] [--repo ../nimbit]
 *
 * Writes src/components/AuthBackground/backgrounds.json and bg-*.css. Re-run after the directory's
 * backgrounds change.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const args = process.argv.slice(2);
const arg = (n, d) => (args.includes(n) ? args[args.indexOf(n) + 1] : d);
const url = arg("--url", "http://localhost:8000").replace(/\/$/, "");
const repo = path.resolve(arg("--repo", path.join(ROOT, "../nimbit")));
const css = path.join(repo, "apps/identity-directory/assets/css");
const out = path.join(ROOT, "src/components/AuthBackground");
const KINDS = ["network", "telemetry", "devices", "geofences"];

/** The <svg> inside <div class="auth-bg" …>, found by matching nested divs. */
function extractSvg(html) {
  const start = html.indexOf('<div class="auth-bg"');
  if (start < 0) throw new Error("no .auth-bg in the page");
  const open = html.indexOf(">", start) + 1;
  const close = html.indexOf("</svg>", open);
  return html.slice(html.indexOf("<svg", open), close + "</svg>".length);
}

const backgrounds = {};
for (const kind of KINDS) {
  const res = await fetch(`${url}/auth/login?bg=${kind}&detail=calm`);
  if (!res.ok) throw new Error(`${kind}: HTTP ${res.status}`);
  backgrounds[kind] = extractSvg(await res.text());
}
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, "backgrounds.json"), `${JSON.stringify(backgrounds)}\n`);

const header = (file) =>
  `/* Copied from apps/identity-directory/assets/css/${file} by scripts/sync-auth-backgrounds.mjs. Don't edit here. */\n`;
for (const kind of KINDS) {
  const file = `bg-${kind}.css`;
  fs.writeFileSync(path.join(out, file), header(file) + fs.readFileSync(path.join(css, file), "utf8"));
}
console.log(`Synced ${KINDS.length} backgrounds from ${url} and ${css}`);
