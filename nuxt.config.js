export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nextmasjid',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/i18n.js'},
    {src: '~/plugins/swiper.js', mode: 'client'},
    {src: '~/plugins/google-maps.js', mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['nuxt-i18n', {
      detectBrowserLanguage: false,
      strategy: 'prefix',
      defaultLocale: 'en',
      locales: [
        {
          code: 'ar',
          file: 'ar-AR.js',
        },
        {
          code: 'en',
          file: 'en-EN.js'
        },
      ],
      lazy: true,
      langDir: 'locales/'
    }],
  ],

  proxy: {
    '/api': {
      target: 'http://45.35.14.206',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
