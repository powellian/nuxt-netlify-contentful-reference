export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    bodyAttrs: {},
    title: 'TODO: add the <title> per page/route',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sh-favicon.svg' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,600&display=swap',
        rel: 'stylesheet'
      }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main'],
  // Global SCSS - e.g. variables etc.
  styleResources: {
    scss: [
      './assets/css/global/_variables.scss',
      './assets/css/util/_mixins.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/style-resources#scss-example
    '@nuxtjs/style-resources',
    // https://buefy.org/documentation/start#nuxtjs
    [
      'nuxt-buefy',
      {
        materialDesignIcons: false,
      }
    ],
    // https://cloudinary.nuxtjs.org/setup
    '@nuxtjs/cloudinary'
  ],

  // Runtime configuration
  /**
   * https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
   * https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/#migrating-to-the-nuxtjs-runtime-config-from-the-env-property
   */
  publicRuntimeConfig: {
    baseURL:
      process.env.NETLIFY_BASE_URL_DEV || 'https://gertchahost:12345/'
  },
  privateRuntimeConfig: {},

  //https://cloudinary.nuxtjs.org/setup#configure
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    useComponent: true
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    // https://stackoverflow.com/questions/52706863/dynamically-fetch-and-compile-a-template-with-nuxt
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
