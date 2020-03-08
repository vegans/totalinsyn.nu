export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '#totalinsyn',
    titleTemplate: '%s | Total Insyn',
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
        content: 'https://totalinsyn.nu/02/meta.jpg'
      },
      {
        name: 'twitter:image:src',
        content: 'https://totalinsyn.nu/02/meta.jpg'
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/mapbox', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/markdownit',
    // Doc: https://github.com/reallifedigital/nuxt-image-loader-module
    [
      '@reallifedigital/nuxt-image-loader-module',
      {
        imagesBaseDir: 'content',
        imageStyles: {
          thumbnail: {
            actions: [
              'gravity|Center',
              'resize|400|276^',
              'extent|400|276|+0|+90'
            ]
          },
          large: { macros: ['scaleAndCrop|1200|800'] }
        }
      }
    ]
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
  }
}
