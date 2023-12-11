// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vue-final-modal/style.css'],
  modules: ["@nuxtjs/google-fonts", '@nuxt/content', '@vueuse/nuxt',  'vue3-carousel-nuxt'],
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],
  server: {
    host: '0' // default: localhost
  }
})