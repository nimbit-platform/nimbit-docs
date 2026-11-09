import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import { EMBED_HEAD_SCRIPT } from "./src/lib/embed";

const config: Config = {
  title: "NimBit Documentation",
  tagline: "Learn how NimBit builds its IoT solution.",
  favicon: "img/favicon.ico",

  url: process.env.DOCUSAURUS_URL ?? "https://cparsinnovationlab.bitbucket.io",
  baseUrl: process.env.DOCUSAURUS_BASE_URL ?? "/nimbit/",

  organizationName: "Nimbit GmbH",
  projectName: "nimbit-docs",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localeConfigs: {
      en: { label: "English" },
      de: { label: "Deutsch" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          showLastUpdateTime: true,
          // Section folders have an index.mdx that is the category's own page
          // (linked from the label); don't list it again as a child item.
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const items = await defaultSidebarItemsGenerator(args);
            if (args.item.dirName === "get-started" || args.item.dirName === "api") return items;
            return items.filter((i) => !(i.type === "doc" && /(^|\/)index$/.test(i.id)));
          },
        },
        blog: {
          showReadingTime: true,
          // The index filters on the client (src/theme/BlogListPage), so it needs every post.
          postsPerPage: "ALL",
          blogTitle: "NimBit Blog",
          blogDescription: "Updates, guides, and insights from the NimBit IoT platform team.",
          blogSidebarTitle: "Recent Posts",
          blogSidebarCount: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [require.resolve("./src/clientModules/appUrl.ts"), require.resolve("./src/clientModules/embed.ts"), require.resolve("./src/clientModules/d3Transition.ts")],
  // Embed mode (IoT Breeze's help panel) is decided before the page paints; see src/lib/embed.ts.
  headTags: [{ tagName: "script", attributes: {}, innerHTML: EMBED_HEAD_SCRIPT }],

  plugins: [
    "docusaurus-plugin-image-zoom",
    require.resolve("./plugins/llms.js"),
    require.resolve("./plugins/home-feed.js"),
    require.resolve("./plugins/app-routes.js"),
    function customWebpackPlugin() {
      return {
        name: "custom-webpack-plugin",
        configureWebpack() {
          return {
            devtool: false,
          };
        },
      };
    },
    function tailwindPlugin() {
      return {
        name: "tailwind-plugin",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins = [require("@tailwindcss/postcss"), require("autoprefixer")];
          return postcssOptions;
        },
      };
    },
  ],

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig: {
    // Diagrams in the docs palette instead of Mermaid's default purple.
    mermaid: {
      theme: { light: "base", dark: "dark" },
      options: {
        fontFamily: "Inter Variable, Inter, system-ui, sans-serif",
        themeVariables: {
          primaryColor: "#e6f4f6",
          primaryBorderColor: "#197a87",
          primaryTextColor: "#0d0f12",
          lineColor: "#5d646d",
          secondaryColor: "#eef0f2",
          tertiaryColor: "#ffffff",
          edgeLabelBackground: "#ffffff",
        },
      },
    },
    zoom: {
      selector: ".markdown img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(22, 22, 22)",
      },
      config: {
        margin: 24,
        scrollOffset: 0,
      },
    },
    metadata: [
      {
        name: "Content-Security-Policy",
        content: "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; object-src 'none'; base-uri 'none';",
      },
    ],

    algolia: {
      appId: "PQ4HIT202I",
      apiKey: "425c313b3d611544d4e416ba7bee0a7c",
      indexName: "nimbit",
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: "search",
      insights: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
        hideable: false,
      },
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "NimBit Logo",
        src: "img/nimbit.svg",
        srcDark: "img/nimbit-dark.svg",
      },
      items: [
        { label: "Get started", type: "docSidebar", sidebarId: "getStartedSidebar", position: "left" },
        { label: "Docs", type: "docSidebar", sidebarId: "docsSidebar", position: "left" },
        { label: "API", type: "docSidebar", sidebarId: "apiSidebar", position: "left" },
        { label: "Changelog", type: "docSidebar", sidebarId: "changelogSidebar", position: "left" },
        { label: "Blog", to: "/blog", position: "left" },
        { type: "search", position: "right" },
        // "Open IoT Breeze", on the reader's own address (src/lib/appUrl.ts).
        { type: "custom-openApp", position: "right" },
        { type: "localeDropdown", position: "right" },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Get started", to: "/docs/get-started" },
            { label: "Docs", to: "/docs" },
            { label: "API", to: "/docs/api" },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "Changelog", to: "/docs/changelog" },
            { label: "Downloads", to: "/docs/downloads" },
          ],
        },
        {
          title: "Company",
          items: [
            { label: "NimBit GmbH", href: "https://nimbit.de" },
            {
              label: "Book a Demo",
              href: "https://outlook.office365.com/book/NimBitGmbHErstgesprchIhreDigitaleTransformation@cpars.de/",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} NimBit GmbH`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
