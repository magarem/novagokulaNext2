import shell from "shelljs"
export default defineEventHandler((event) => {
    shell.exec('./gogit.sh')
    return "copilação [ok]"
})