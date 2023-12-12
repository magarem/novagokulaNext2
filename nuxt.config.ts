// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/bootstrap.scss'],
  modules: ["vue3-carousel-nuxt", "@nuxt/image", "@nuxtjs/google-fonts", '@nuxt/content', '@vueuse/nuxt'],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client'},
  ],
  server: {
    host: '0' // default: localhost
  }
})