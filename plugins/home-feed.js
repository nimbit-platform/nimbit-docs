// @ts-check
/**
 * Gives the home page the newest blog posts and changelog entries, per locale,
 * as global data (usePluginData("home-feed")). Reads the source files, so home
 * never lists a post or release by hand.
 */
const fs = require("fs");
const path = require("path");

/** Minimal front matter reader: `key: value` lines, quotes stripped. */
function frontMatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    out[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
  }
  return out;
}

/** Bullet text without Markdown: links, bold, code. */
function plain(s) {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function posts(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((d) => /^\d{4}-\d{2}-\d{2}-/.test(d) && fs.existsSync(path.join(dir, d, "index.md")))
    .map((d) => {
      const fm = frontMatter(fs.readFileSync(path.join(dir, d, "index.md"), "utf8"));
      return {
        date: d.slice(0, 10),
        slug: fm.slug || d.slice(11),
        title: fm.title || "",
        description: fm.description || "",
        category: fm.category || "announcement",
        visual: fm.visual || "chart",
        question: fm.visual_question || "",
        answer: fm.visual_answer || "",
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Newest release, set by changes(). */
let latest = null;

/** One row per bullet under New / Improved / Fixed, newest release first. */
function changes(dir) {
  if (!fs.existsSync(dir)) return [];
  const releases = fs
    .readdirSync(dir)
    .filter((f) => /^v\d+-\d+-\d+\.mdx?$/.test(f))
    .map((f) => {
      const src = fs.readFileSync(path.join(dir, f), "utf8");
      const fm = frontMatter(src);
      return { file: f, version: fm.title || f, date: fm.date || "", src };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
  const rows = [];
  latest = releases[0] ? { version: releases[0].version, date: releases[0].date, file: releases[0].file.replace(/\.mdx?$/, "") } : null;
  for (const r of releases) {
    let kind = null;
    for (const line of r.src.split("\n")) {
      const h = line.match(/^##\s+(.+?)(?:\s*\{#([a-z-]+)\})?\s*$/);
      if (h) {
        const id = (h[2] || h[1]).toLowerCase();
        kind = id === "new" ? "feat" : id === "improved" ? "impr" : id === "fixed" ? "fix" : null;
        continue;
      }
      const b = line.match(/^-\s+(.+)$/);
      if (kind && b) rows.push({ version: r.version, file: r.file.replace(/\.mdx?$/, ""), kind, text: plain(b[1]) });
    }
  }
  return rows;
}

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function homeFeed(context) {
  const { siteDir, i18n } = context;
  const locale = i18n.currentLocale;
  const blogDir =
    locale === i18n.defaultLocale
      ? path.join(siteDir, "blog")
      : path.join(siteDir, "i18n", locale, "docusaurus-plugin-content-blog");
  const changelogDir =
    locale === i18n.defaultLocale
      ? path.join(siteDir, "docs", "changelog")
      : path.join(siteDir, "i18n", locale, "docusaurus-plugin-content-docs", "current", "changelog");
  return {
    name: "home-feed",
    async loadContent() {
      const rows = changes(changelogDir);
      return { posts: posts(blogDir).slice(0, 3), changes: rows.slice(0, 6), latest };
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
    getPathsToWatch() {
      return [path.join(blogDir, "**/*.md"), path.join(changelogDir, "*.mdx")];
    },
  };
};
