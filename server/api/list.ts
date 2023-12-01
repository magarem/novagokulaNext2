import fs from 'fs';
var fileList
export default defineEventHandler((event) => {
  fileList = fs.readdirSync('./content')
        console.log('file list: ', fileList)
  return {
    hello: fileList
  }
})
