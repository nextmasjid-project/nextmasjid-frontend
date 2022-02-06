export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // server: {
  //   port: process.env.PORT, // default: 3000
  //   host: "0.0.0.0" // default: localhost
  // },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nextmasjid",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/styles/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/i18n.js" },
    { src: "~/plugins/swiper.js", mode: "client" },
    { src: "~/plugins/google-maps.js", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "nuxt-i18n",
      {
        detectBrowserLanguage: false,
        strategy: "prefix",
        defaultLocale: "ar",
        locales: [
          {
            code: "ar",
            file: "ar-AR.js"
          },
          {
            code: "en",
            file: "en-EN.js"
          }
        ],
        lazy: true,
        langDir: "locales/"
      }
    ],
    "vue-social-sharing/nuxt"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
