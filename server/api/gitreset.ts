import shell from "shelljs"

export default defineEventHandler((event) => {
    shell.exec('./gitreset.sh')
    return "site reset [ok]"
})