import fs from 'fs';
var fileList
export default defineEventHandler((event) => {
  fileList = fs.readdirSync('./public/img')
  console.log('file list: ', fileList)
  let out = []
  fileList.map((item, index)=>{
    out.push('<img src="/img/'+item+'">')
    console.log(index, item);
    
  })
  return out
  
})
