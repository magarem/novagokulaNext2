// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", '@nuxt/content', '@vueuse/nuxt'],
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],
  server: {
    host: '0' // default: localhost
  }
})