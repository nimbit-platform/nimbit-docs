#!/usr/bin/env node
/**
 * Looks up how IoT Breeze labels a UI string in German, so translated docs use the app's words.
 *
 *   node scripts/i18n/ui-label.mjs "Add measure" ["Devices › Thing Types"] [--repo ../nimbit]
 *
 * Prints every German translation of the English string with its namespace and key, most used
 * first. Breadcrumbs ("A › B") are looked up part by part. When the same English string has several
 * German translations, pick the one whose namespace matches the screen (e.g. `rule:` on the rule
 * canvas); grep the app source for the key when unsure. Matching ignores case.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const args = process.argv.slice(2);
const repoAt = args.indexOf("--repo");
const repo = path.resolve(repoAt >= 0 ? args.splice(repoAt, 2)[1] : path.join(ROOT, "../nimbit"));
const dir = path.join(repo, "apps/iot-breeze/public/locales");

const flat = (o, p = "", out = {}) => {
  for (const [k, v] of Object.entries(o)) typeof v === "object" && v ? flat(v, `${p}${k}.`, out) : (out[p + k] = v);
  return out;
};
const load = (lang) =>
  Object.fromEntries(
    fs.readdirSync(path.join(dir, lang)).filter((f) => f.endsWith(".json")).flatMap((f) => {
      const ns = f.slice(0, -5);
      return Object.entries(flat(JSON.parse(fs.readFileSync(path.join(dir, lang, f), "utf8")))).map(([k, v]) => [`${ns}:${k}`, v]);
    }),
  );
const en = load("en");
const de = load("de");

const lookup = (text) => {
  const hits = new Map();
  for (const [key, value] of Object.entries(en)) {
    if (typeof value !== "string" || value.trim().toLowerCase() !== text.trim().toLowerCase()) continue;
    const german = de[key];
    if (typeof german !== "string") continue;
    hits.set(german, [...(hits.get(german) ?? []), key]);
  }
  return [...hits.entries()].sort((a, b) => b[1].length - a[1].length);
};

for (const query of args) {
  for (const part of query.split("›").map((s) => s.trim())) {
    const hits = lookup(part);
    if (!hits.length) {
      console.log(`${part}\n  (not in the app's translations: keep the English label, or grep the app for it)`);
      continue;
    }
    console.log(part);
    for (const [german, keys] of hits) console.log(`  ${german}    ${keys.slice(0, 4).join(", ")}${keys.length > 4 ? ` +${keys.length - 4}` : ""}`);
  }
}
