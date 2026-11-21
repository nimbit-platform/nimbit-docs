// @ts-check
/**
 * Writes app-routes.json at each locale's root (build/app-routes.json, build/de/app-routes.json):
 * which docs page covers which IoT Breeze route, from every page's `app.routes` front matter.
 * IoT Breeze's help panel reads it to open the page for the screen the user is on.
 *
 *   { "version": 1, "locale": "en", "pages": [
 *     { "route": "/onboarding/gateways/:id", "permalink": "/nimbit/docs/gateways/add-a-gateway",
 *       "title": "Add a gateway", "description": "…", "type": "how-to", "tour": "…", "primary": true } ] }
 *
 * One entry per page and route. `route` has no locale prefix; `permalink` is absolute on the docs host.
 * Entries are sorted by route, then the route's preferred page first, then permalink. A page is preferred
 * on a route when its front matter says `app.primary: true` (all its routes) or lists the route
 * (`app.primary: ["/onboarding/gateways/:id"]`). Such an entry also carries `"primary": true` (other entries have no
 * `primary` key), so the app can open it whatever its page type. Set `primary` on the page the app should
 * open when several pages cover the same screen.
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
          const app = /** @type {{routes?: unknown, tour?: unknown, primary?: unknown} | undefined} */ (doc.frontMatter.app);
          const routes = Array.isArray(app?.routes) ? app.routes.filter((r) => typeof r === "string") : [];
          for (const route of routes) {
            const primary = app?.primary === true || (Array.isArray(app?.primary) && app.primary.includes(route));
            pages.push({
              primary,
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
      pages.sort(
        (a, b) =>
          a.route.localeCompare(b.route) || Number(b.primary) - Number(a.primary) || a.permalink.localeCompare(b.permalink),
      );
      // `primary` is written only where it is true, so existing entries are unchanged.
      pages = pages.map(({ primary, ...page }) => (primary ? { ...page, primary } : page));
    },
    async postBuild({ outDir }) {
      const file = { version: 1, locale: context.i18n.currentLocale, pages };
      fs.writeFileSync(path.join(outDir, "app-routes.json"), JSON.stringify(file, null, 2) + "\n");
    },
  };
};
