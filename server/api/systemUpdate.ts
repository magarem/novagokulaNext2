import shell from "shelljs"

export default defineEventHandler((event) => {
    shell.exec('./gitpull.sh')
    return "system update [ok]"
})