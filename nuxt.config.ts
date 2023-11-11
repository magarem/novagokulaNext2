// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", '@nuxt/content'],
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ]
  // css: ['~/assets/style.css']
})