export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'movieapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/defaults.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  pwa: {
    meta: {
      /* meta options */
      name: 'Vaishnava PWA App',
      author: 'Srila Prabhupada',
    },
    manifest: {
      name: 'Vaishnava PWA App',
      short_name: 'Vaishnava PWA App',
      description: 'Vaishnnava Progressive Web App',
      lang: 'en',
    },
    icon: {
      /* icon options */
      fileName: 'Gopinath-wallpaper.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    }
  }
}
