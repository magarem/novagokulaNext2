import shell from "shelljs"

export default defineEventHandler((event) => {
    const query = getQuery(event)
    console.log('file do undo:', query.file);
    shell.exec('./gitundo.sh ' + query.file)
    return "reversion file [ok]"
})