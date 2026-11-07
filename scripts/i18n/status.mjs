#!/usr/bin/env node
/**
 * Keeps the German docs complete and shows what needs translating.
 *
 *   node scripts/i18n/status.mjs          report: missing, untranslated, outdated, current
 *   node scripts/i18n/status.mjs --fill   also copy every page missing from i18n/de into it,
 *                                         marked `untranslated: true` (runs before each build)
 *
 * Docusaurus can't resolve links between a translated page and an untranslated one, so a German
 * build needs every page in i18n/de. A copied page shows the English text under a banner until
 * someone translates it.
 *
 * A translated page records the commit of the English page it was translated from:
 *   translated_from: <commit>
 * The page is outdated when the English page changed after that commit. Translate the change, then
 * set translated_from to the commit you translated from (`git log -1 --format=%h -- docs/<page>`).
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const SRC = path.join(ROOT, "docs");
const LOCALE = "de";
const DST = path.join(ROOT, `i18n/${LOCALE}/docusaurus-plugin-content-docs/current`);
const fill = process.argv.includes("--fill");

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.mdx?$/.test(e.name) ? [p] : [];
  });

const frontMatter = (text) => {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : "";
};
const field = (fm, name) => fm.match(new RegExp(`^${name}:\\s*(.+)$`, "m"))?.[1].trim();

const git = (...args) => {
  try {
    return execFileSync("git", args, { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
};

const rows = { missing: [], untranslated: [], outdated: [], current: [] };
for (const src of walk(SRC)) {
  const rel = path.relative(SRC, src);
  const dst = path.join(DST, rel);
  if (!fs.existsSync(dst)) {
    rows.missing.push(rel);
    if (fill) {
      const text = fs.readFileSync(src, "utf8");
      const marked = text.startsWith("---\n")
        ? text.replace(/^---\n/, "---\nuntranslated: true\n")
        : `---\nuntranslated: true\n---\n\n${text}`;
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.writeFileSync(dst, marked);
    }
    continue;
  }
  const fm = frontMatter(fs.readFileSync(dst, "utf8"));
  if (field(fm, "untranslated") === "true") {
    rows.untranslated.push(rel);
    continue;
  }
  const from = field(fm, "translated_from");
  const changed = from ? git("log", "--format=%h %s", `${from}..HEAD`, "--", path.relative(ROOT, src)) : "no translated_from";
  (changed ? rows.outdated : rows.current).push(changed ? `${rel}  (${changed.split("\n").length > 1 ? `${changed.split("\n").length} commits` : changed})` : rel);
}

// Translated pages whose English page is gone.
const orphans = fs.existsSync(DST)
  ? walk(DST).map((p) => path.relative(DST, p)).filter((rel) => !fs.existsSync(path.join(SRC, rel)))
  : [];

const total = walk(SRC).length;
console.log(`German docs: ${rows.current.length} of ${total} pages translated and current.`);
for (const [name, list] of Object.entries(rows)) {
  if (name === "current" || !list.length) continue;
  console.log(`\n${name} (${list.length})${name === "missing" && fill ? ", copied in as untranslated" : ""}:`);
  for (const r of list) console.log(`  ${r}`);
}
if (orphans.length) {
  console.log(`\nno English page any more (${orphans.length}), delete or move:`);
  for (const r of orphans) console.log(`  ${r}`);
}
