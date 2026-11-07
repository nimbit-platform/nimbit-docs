import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const redocSpecUrls = {
  dip: process.env.DIP_OPENAPI_URL ?? "https://demo.cloud.iotbreeze.com/dip/api/v1/api-json",
  ocb: process.env.OCB_OPENAPI_URL ?? "https://demo.cloud.iotbreeze.com/ocb/api-json",
  nbq: process.env.NBQ_OPENAPI_URL ?? "https://demo.cloud.iotbreeze.com/ocb/api-json",
};

// Remove this entire redocSpecs variable definition
// const redocSpecs = [
//   "redocusaurus",
//   {
//     theme: {
//       // Change with your site colors
//       primaryColor: "#1890ff",
//       primaryColorDark: "#1890ff",
//     },
//     specs: [
//       // Optionally provide individual files/urls to load
//       {
//         // Pass it a path to a local OpenAPI YAML file
//         id: "dip",
//         spec: redocSpecUrls.dip,
//         route: "/docs/developer/api/redoc/dip",
//       },
//       // You can also pass it an OpenAPI spec URL
//     ],
//     // Theme Options for modifying how redoc renders them
//   },
// ] satisfies Redocusaurus.PresetEntry;

// Remove this commented code block as well
// const redocSpecs = [
//   {
//     id: "dip",
//     spec: redocSpecUrls.dip,
//     route: "/docs/developer/api/redoc/dip",
//   },
//   // {
//   //   id: "ocb",
//   //   spec: redocSpecUrls.ocb,
//   //   route: "/docs/developer/api/redoc/ocb",
//   // },
//   {
//     id: "nbq",
//     spec: redocSpecUrls.nbq,
//     route: "/docs/developer/api/redoc/nbq",
//   },
// ];

const config: Config = {
  title: "NimBit Documentation",
  tagline: "Learn how NimBit builds its IoT solution.",
  favicon: "img/favicon.ico",

  url: "https://cparsinnovationlab.bitbucket.io",
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
    locales: ["en"],
    localeConfigs: {
      en: { label: "English" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          showLastUpdateTime: true,
          docItemComponent: "@theme/ApiItem",
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
    [
      "redocusaurus",
      {
        specs: [
          {
            id: "dip",
            spec: "openapi/dip/.openapi.yaml",
            // route: "/docs/developer/api/dip",
          },
          {
            id: "ocb",
            spec: "openapi/ocb/.openapi.yaml",
          },
          {
            id: "nbq",
            spec: "openapi/nbq/.openapi.yaml",
          },
        ],
        theme: {
          primaryColor: "#4fbbc9",
        },
      },
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          dip: {
            specPath: "https://nightly.nimbit.de/dip/api-yaml",
            outputDir: "docs/developer/api/references/dip-api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          // ocb: {
          //   specPath: "https://nightly.nimbit.de/ocb/api-yaml",
          //   outputDir: "docs/ocb-api",
          //   sidebarOptions: {
          //     groupPathsBy: "tag",
          //   },
          // },
        },
      },
    ],
    "docusaurus-plugin-image-zoom",
    require.resolve("./plugins/llms.js"),
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

  themes: ["docusaurus-theme-openapi-docs", "@docusaurus/theme-mermaid"],

  themeConfig: {
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
        {
          href: "https://id.iotbreeze.de",
          label: "Open IoT Breeze",
          position: "right",
          className: "navbar-book-demo",
        },
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
            { label: "Changelog", to: "/docs/changelog/index" },
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
      copyright: `Copyright © ${new Date().getFullYear()} NimBit GmbH. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
