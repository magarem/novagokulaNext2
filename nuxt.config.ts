// https://nuxt.com/docs/api/configuration/nuxt-config
// import Vue from 'vue';
// import VueCoreImageUpload from 'vue-core-image-upload/dist/ssr';

// Vue.use( VueCoreImageUpload );

export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: false },
  content: {
    watch: false,
  },
  css: ['~/assets/styles/main.scss', '~/assets/css/bootstrap.scss', 'vue-final-modal/style.css'],
  modules: ['nuxt-bootstrap-icons','@formkit/nuxt',[
    '@pinia/nuxt',
    {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore',
      ],
    },
  ],  "@vueuse/nuxt", "formidable", "@nuxt/image", "@nuxtjs/google-fonts", '@nuxt/content'],
  plugins: [
    { src: '~/plugins/useBootstrap.client.ts', mode: 'client'},
    { src: '~/plugins/vue-final-modal.ts', ssr: false }
  ],formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  server: {
    host: '0' // default: localhost
  },
  buildModules: [
    '@nuxtjs/ngrok','@nuxtjs/vuetify',
  ]
})
