import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "AETHERMARK",
  tagline: "Beyond Markdown, Into Possibility.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://mukulwaval.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/aethermark-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MukulWaval", // Usually your GitHub org/user name.
  projectName: "aethermark-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MukulWaval/aethermark-docs/tree/main/"
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MukulWaval/aethermark-docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    plugins: [
      [
        "@docusaurus/plugin-sitemap",
        {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          }
        }
      ]
    ],
    metadata: [
      {
        name: "google-site-verification",
        content: "9iXwiOoXjd1GGReVzS--yOGPR6_KBQ5M8-KfFBzcbqw"
      }
    ],
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "AETHERMARK",
      logo: {
        alt: "Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs"
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/MukulWaval/aethermark",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} MukulWaval. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["ebnf"]
    }
  } satisfies Preset.ThemeConfig
};

export default config;
