import fs from 'fs'
// import * as fs from 'node:fs'

let files = []
export default defineEventHandler( async (event) => {
    
    const body = await readBody(event)
  
    fs.writeFile(body.fileName, body.data, 'utf-8', (err) => {
        if (err) return console.log('An error happened', err)
        console.log('File saved ok!')
    })
    
    return "ok"
})
   
    
