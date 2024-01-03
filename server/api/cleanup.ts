import shell from "shelljs"

export default defineEventHandler((event) => {
    shell.exec('./cleanup.sh ')
    return "Nuxt clean up[ok]"
})