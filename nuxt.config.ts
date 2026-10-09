export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: false
  },

  modules: [
    'vuetify-nuxt-module'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  vuetify: {
    moduleOptions: {
      prefixComposables: ['useLayout']
    },
     vuetifyOptions: './vuetify.options.ts'
  },
  app: {
    head: {
      title: 'Jomari | Web Developer',
      meta: [
        {
          name: 'description',
          content: 'Web developer specializing in Vue.js, Nuxt.js, and Node.js.'
        }
      ]
    }
  }
})