export default {
  telemetry: false,
  serverMiddleware: [{path: '/api', handler: '~/api/server.js'}], 
  head: {
    title: 'Summitagro',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }]
  },
  styleResources: {
    scss: ['~/assets/scss/variables.scss']
  },
  publicRuntimeConfig: {
    ImagePathUlr:  'http://localhost:1337',  // Only for backend purposes
    strapiAPI: 'http://localhost:1337/api/', // Only for backend purposes
    localAPI: 'http://localhost:3000/api/'
  },
  css: [
    '~/assets/css/normalize.css',
    '~/assets/scss/global.scss',
    'boxicons/css/boxicons.min.css'
  ],

  plugins: [
    { src: '~/plugins/image'}, // Only for backend purposes
    { src: '~/plugins/errorHandle'},
  ],

  components: [
    {
      path: '~/components', 
      pathPrefix: false,
    },
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  modules: [
    '@nuxtjs/axios', 
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm',
    [
      'nuxt-lazy-load',
      {
        defaultImage: 'loading.gif'
      }
    ]
  ],
 
  gtm: {
    id: 'YOUR-GTM-ID',
    enabled: process.env.NODE_ENV == 'production' ? true : false
  },


  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    preload: true,
    families: {
      Poppins: [100, 300, 400, 700],
    }
  }
}
