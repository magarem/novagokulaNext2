// https://nuxt.com/docs/api/configuration/nuxt-config
// import Vue from 'vue';
// import VueCoreImageUpload from 'vue-core-image-upload/dist/ssr';

// Vue.use( VueCoreImageUpload );

export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  content: {
    watch: false,
  },
  css: ['~/assets/css/bootstrap.scss', 'vue-final-modal/style.css'],
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore',
      ],
    },
  ],"@vueuse/nuxt", "formidable", "@nuxt/image", "@nuxtjs/google-fonts", '@nuxt/content', '@vueuse/nuxt'],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client'},
    { src: '~/plugins/vue-final-modal.ts', ssr: false }
  ],
  server: {
    host: '0' // default: localhost
  },
  buildModules: [
    '@nuxtjs/ngrok','@nuxtjs/vuetify',
  ]
})
