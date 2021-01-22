import colors from "vuetify/es5/util/colors";

const HOST = "https://baklai.github.io";

export default {
  ssr: false,
  target: "static",

  router: {
    base: `/${process.env.npm_package_name}/`,
  },

  head: {
    titleTemplate: `%s • ${process.env.npm_package_author_name}`,
    title: "Win CLI Helper",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: `/${process.env.npm_package_name}/favicon.ico`,
      },
    ],
  },

  loading: { color: "#000" },

  css: [],

  plugins: [{ src: "~/plugins/toasted.js", mode: "client" }],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/pwa", "@nuxtjs/meta", "@nuxt/content"],

  content: {
    markdown: {
      prism: {
        //theme: false,
        theme: "prism-themes/themes/prism-ghcolors.css",
      },
    },
  },

  pwa: {
    meta: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "black",
      favicon: true,
      name: "Windows сommand line interpreter helper",
      author: process.env.npm_package_author_name,
      description: process.env.npm_package_description,
      theme_color: "#fff",
      lang: "ru",
      ogType: "website",
      ogHost: HOST,
      ogImage: {
        path: `/${process.env.npm_package_name}/icon.png`,
        width: "50",
        height: "50",
        type: "image/png",
      },
    },
    manifest: {
      name: "Windows сommand line interpreter helper",
      short_name: "Win CLI Helper",
      description: process.env.npm_package_description,
      lang: "ru",
      display: "standalone",
      background_color: "#fff",
      start_url: `/${process.env.npm_package_name}/`,
      useWebmanifestExtension: false,
    },
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    icons: {
      iconfont: "mdi",
    },
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {},
      },
    },
  },

  build: {},
};
