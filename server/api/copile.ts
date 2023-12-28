import shell from "shelljs"

export default defineEventHandler((event) => {
    $fetch("/api/writeSlideFile")
    shell.exec('./gogit.sh')
    return "copilação [ok]"
})