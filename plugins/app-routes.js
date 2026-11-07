// @ts-check
/**
 * Writes app-routes.json at each locale's root (build/app-routes.json, build/de/app-routes.json):
 * which docs page covers which IoT Breeze route, from every page's `app.routes` front matter.
 * IoT Breeze's help panel reads it to open the page for the screen the user is on.
 *
 *   { "version": 1, "locale": "en", "pages": [
 *     { "route": "/onboarding/gateways/:id", "permalink": "/nimbit/docs/gateways/add-a-gateway",
 *       "title": "Add a gateway", "description": "…", "type": "how-to", "tour": "…" } ] }
 *
 * One entry per page and route. `route` has no locale prefix; `permalink` is absolute on the docs host.
 */
const fs = require("fs");
const path = require("path");

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function appRoutesPlugin(context) {
  /** @type {object[]} */
  let pages = [];
  return {
    name: "app-routes",
    async allContentLoaded({ allContent }) {
      const docs = /** @type {any} */ (allContent["docusaurus-plugin-content-docs"]?.default);
      pages = [];
      for (const version of docs?.loadedVersions ?? []) {
        for (const doc of version.docs) {
          const app = /** @type {{routes?: unknown, tour?: unknown} | undefined} */ (doc.frontMatter.app);
          const routes = Array.isArray(app?.routes) ? app.routes.filter((r) => typeof r === "string") : [];
          for (const route of routes) {
            pages.push({
              route,
              permalink: doc.permalink,
              title: doc.title,
              description: doc.description,
              type: typeof doc.frontMatter.type === "string" ? doc.frontMatter.type : undefined,
              tour: typeof app?.tour === "string" ? app.tour : undefined,
            });
          }
        }
      }
      pages.sort((a, b) => a.route.localeCompare(b.route) || a.permalink.localeCompare(b.permalink));
    },
    async postBuild({ outDir }) {
      const file = { version: 1, locale: context.i18n.currentLocale, pages };
      fs.writeFileSync(path.join(outDir, "app-routes.json"), JSON.stringify(file, null, 2) + "\n");
    },
  };
};
