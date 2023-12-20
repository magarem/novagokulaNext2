// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    watch: false,
  },
  css: ['~/assets/css/bootstrap.scss'],
  modules: ["formidable", "@nuxt/image", "@nuxtjs/google-fonts", '@nuxt/content', '@vueuse/nuxt'],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client'},
  ],
  server: {
    host: '0' // default: localhost
  },
  buildModules: [
    '@nuxtjs/ngrok',
  ]
})
