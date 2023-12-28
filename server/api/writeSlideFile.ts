import fs from 'fs'
// import * as fs from 'node:fs'

let files = []
export default defineEventHandler((event) => {
    
    async function getFilesNames(dir: fs.PathLike){
        try {
            files = fs.readdirSync(dir);
            files = files.map( x=>'upload/slideshow/' + x )
            return files
          } catch (err) {
            console.error(err);
        }
    }

    getFilesNames('public/upload/slideshow/').then(data=>{
        fs.writeFile('public/homeSlide.json', JSON.stringify(data, null, 2), 'utf-8', (err) => {
            if (err) return console.log('An error happened', err)
            console.log('File fetched from {JSON} Placeholder and written locally!')
        })
    })

    return "ok"
})
   
    
