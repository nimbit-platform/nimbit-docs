import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "NimBit Documentation",
  tagline: "Learn how NimBit builds its IoT solution.",
  favicon: "img/favicon-cpars.ico",

  url: "https://cparsinnovationlab.bitbucket.io",
  baseUrl: "/nimbit",

  organizationName: "Nimbit GmbH",
  projectName: "nimbit-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en","de"],
    localeConfigs: {
      en: {label: "English" },
      de: {label: "Deutsch" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://cparsinnovationlab.bitbucket.io/nimbit",
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://cparsinnovationlab.bitbucket.io/nimbit",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
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
          }satisfies OpenApiPlugin.Options,
          // ocb: {
          //   specPath: "https://nightly.nimbit.de/ocb/api-yaml",
          //   outputDir: "docs/ocb-api",
          //   sidebarOptions: {
          //     groupPathsBy: "tag",
          //   },
          // },
        }
      },
    ],
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
          postcssOptions.plugins = [
            require("@tailwindcss/postcss"),
            require("autoprefixer"),
          ];
          return postcssOptions;
        },
      };
    },
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    metadata: [
      {
        name: "Content-Security-Policy",
        content:
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; object-src 'none'; base-uri 'none';",
      },
    ],

    algolia: {
      appId: "YW66QXP0SL",
      apiKey: "5adc7bceb43e099eaffc1bacb8b62f2d",
      indexName: "nimbit",
      contextualSearch: true,
      externalUrlRegex: "external\.com|domain\.com",
      replaceSearchResultPathname: {
        from: "/docs/",
        to: "/",
      },
      searchParameters: {},
      searchPagePath: "search",
      insights: false,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "NimBit Logo",
        src: "img/nimbit.svg",
      },
      items: [
        { label: "Home", to: "/", position: "left" },
        { label: "User Manual", to: "/docs/user/overview",className: "navbar-icon-user-manual", position: "left" },
        { label: "Developers", to: "/docs/developer/dev-overview",className: "navbar-icon-developers", position: "left" },
        { label: "Changelog", to: "/docs/changelog/index",className: "navbar-icon-changelog", position: "left" },
        { href: "https://github.com/NimBit", label: "GitHub", position: "right" },
        { href: "https://outlook.office365.com/book/NimBitGmbHErstgesprchIhreDigitaleTransformation@cpars.de/", label: "Book a Demo", position: "right" },
        { type: "search", position: "right" },
        { type: "localeDropdown", position: "right" },
      ],
    },

    footer: {
      style: "dark",
      links: [
        { title: "Docs", items: [{ label: "Tutorial", to: "/docs/intro" }] },
        {
          title: "Community",
          items: [
            {
              label: "C.PARS Portal",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "C.PARS Innovation Lab",
              href: "https://bitbucket.org/cparsinnovationlab/nimbit-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NimBit GmbH.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
