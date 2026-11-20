// @ts-check
/**
 * After the build, write a Markdown copy of every docs page next to its HTML
 * (docs/watch/work-an-incident.mdx -> build/docs/watch/work-an-incident.md), in the build's
 * language (the German build reads i18n/de), plus at the locale's root:
 *   llms.txt       an index of every page, ordered like the sidebars;
 *   llms-full.txt  every page in that order, in one file, for handing the whole manual to an assistant.
 *
 * Tools and AI assistants read these instead of scraping HTML. The page actions link to the copy
 * ("View as Markdown") and hand it to an assistant ("Open in Claude").
 */
const fs = require("fs");
const path = require("path");

/** Folders in sidebar order, with the heading they get in llms.txt. */
const GROUPS = [
  ["get-started", "Get started"],
  ["", "Docs"],
  ["connect", "Connect devices"],
  ["gateways", "Gateways and edge"],
  ["model", "Model your data"],
  ["visualize", "Visualize"],
  ["watch", "Watch and respond"],
  ["automate", "Automate"],
  ["knowledge", "Knowledge and AI"],
  ["administer", "Administer"],
  ["troubleshooting", "Troubleshooting"],
  ["api", "API"],
  ["changelog", "Changelog"],
];

/** Generated API reference pages hold only a component; skip them. */
const SKIP = [/^api\/reference\//];

/** @param {string} source */
function splitFrontMatter(source) {
  const m = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: source };
  /** @type {Record<string, string>} */
  const data = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, "").trim();
  }
  return { data, body: source.slice(m[0].length) };
}

/** Keep the text readable as plain Markdown: drop imports and MDX comments. */
function toMarkdown(body) {
  return body
    .replace(/^import .*$\n?/gm, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** @param {string} dir */
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function llmsPlugin(context) {
  return {
    name: "llms-txt",
    async postBuild({ outDir, siteConfig }) {
      const { currentLocale, defaultLocale } = context.i18n;
      const docsDir =
        currentLocale === defaultLocale
          ? path.join(context.siteDir, "docs")
          : path.join(context.siteDir, "i18n", currentLocale, "docusaurus-plugin-content-docs", "current");
      const base = `${siteConfig.url}${siteConfig.baseUrl}docs/`;
      /** @type {{ rel: string, title: string, description: string, position: number, md: string }[]} */
      const pages = [];

      for (const file of walk(docsDir)) {
        const rel = path.relative(docsDir, file).replace(/\\/g, "/").replace(/\.mdx?$/, "");
        if (SKIP.some((re) => re.test(rel))) continue;
        const { data, body } = splitFrontMatter(fs.readFileSync(file, "utf8"));
        const title = data.title || path.basename(rel);
        const md = `# ${title}\n\n${data.description ? `> ${data.description}\n\n` : ""}${toMarkdown(body)}\n`;
        const target = path.join(outDir, "docs", `${rel}.md`);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, md);
        pages.push({ rel, title, description: data.description || "", position: Number(data.sidebar_position) || 999, md });
      }

      const lines = [
        `# ${siteConfig.title}`,
        "",
        "> Documentation for IoT Breeze, the NimBit IoT platform: connect devices over MQTT or HTTP, model them as thing types and things, build dashboards, handle events and incidents, automate with rules, and query a knowledge graph with Ask Nimble.",
        "",
        "Every page below is plain Markdown.",
      ];
      if (currentLocale !== defaultLocale) lines.push(`The pages are in the "${currentLocale}" translation.`);
      const full = [lines[0], "", lines[2], ""];
      for (const [folder, heading] of GROUPS) {
        const inGroup = pages
          .filter((p) => (folder === "" ? !p.rel.includes("/") : p.rel.startsWith(`${folder}/`)))
          .sort((a, b) => (a.rel.endsWith("index") ? -1 : b.rel.endsWith("index") ? 1 : a.position - b.position || a.rel.localeCompare(b.rel)));
        if (!inGroup.length) continue;
        lines.push("", `## ${heading}`, "");
        for (const p of inGroup) {
          lines.push(`- [${p.title}](${base}${p.rel}.md)${p.description ? `: ${p.description}` : ""}`);
          // Each page keeps its own "# Title"; a rule and its URL mark where it starts.
          full.push("---", "", `Source: ${base}${p.rel}.md`, "", p.md);
        }
      }
      fs.writeFileSync(path.join(outDir, "llms.txt"), `${lines.join("\n")}\n`);
      fs.writeFileSync(path.join(outDir, "llms-full.txt"), `${full.join("\n")}\n`);
    },
  };
};
