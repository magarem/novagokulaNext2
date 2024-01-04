import * as fs from 'node:fs'

export default defineEventHandler( (event) => {
    const query = getQuery(event)
    console.log(111, query);
    
    // const body = await readBody(event)
    // console.log('>>>', body.filename);
    const oldName = '' + query.oldname
    const newName = '' + query.newname
   
    console.log('rename:', oldName, newName);
    
    // console.log(111, filename);
    // bodyObj = JSON.parse(body)
    async function renameDirectory(oldName, newName) {
        try {
            fs.renameSync(oldName, newName);
        } catch (err) {
            console.log(err);
        }
    }
    renameDirectory(oldName, newName).then(() => {
        console.log('directory renamed successfully');
    });


})