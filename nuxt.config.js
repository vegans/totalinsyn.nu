export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '#totalinsyn',
    titleTemplate: '%s | Total Insyn',
    htmlAttrs: {
      lang: 'sv-se'
    },
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png'
      },
      {
        href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css',
        rel: 'stylesheet'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Vi kräver total insyn in i djurindustrin'
      },
      {
        property: 'og:image',
        content: 'https://totalinsyn.nu/meta.jpg'
      },
      {
        name: 'twitter:image:src',
        content: 'https://totalinsyn.nu/meta.jpg'
      },
      {
        name: 'apple-mobile-web-app-title',
        contennt: 'Total Insyn'
      },
      {
        name: 'application-name',
        contennt: 'Total Insyn'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/mapbox', mode: 'client' },
    { src: '~/plugins/lazyload', mode: 'client' },
    '~/plugins/globals'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    // Doc: https://github.com/aceforth/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },
  googleAnalytics: {
    id: 'UA-138880673-2'
  },
  sitemap: {
    hostname: 'https://totalinsyn.nu'
  },
  optimizedImages: {
    optimizeImages: true
  }
}
