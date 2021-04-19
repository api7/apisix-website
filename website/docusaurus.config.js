module.exports = {
  title: "Apache APISIX™",
  tagline:
    "Apache APISIX is a dynamic, real-time, high-performance Cloud-Native API gateway, based on the Nginx library and etcd.",
  url: "https://apisix.apache.org/",
  baseUrl: "/docs-html/",
  organizationName: "Apache",
  projectName: "apisix-website",
  favicon: "img/favicon.png",
  customFields: {
    tagline2:
      "Apache APISIX software provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more.",
    showcases: require("./static/data/showcases.json"),
    events: require("./static/data/events.json"),
    repoUrl: "https://github.com/apache/apisix",
    docsUrl: "",
    downloads: [],

    team: require("./static/data/team.json"),
    allRepos: [
      "apache/apisix"
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  noIndex: true,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "docs-apisix",
          path: "docs/apisix",
          routeBasePath: "/",
          sidebarPath: require.resolve("./docs/apisix/sidebars.json"),
        },
        blog: {
          path: "blog",
        },
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "Apache APISIX™",
      logo: {
        src: "img/logo2.svg",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadatas: [],
  }
};
