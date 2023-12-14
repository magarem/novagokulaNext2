import { readdir } from 'node:fs/promises';
var fileList
export default defineEventHandler((event) => {
  
async function go(){
  try {
    const files =  await readdir('/home/magaweb/Desenv/novagokulaNuxt2/content', { recursive: true });
    console.log(files);
    return files
  } catch (err) {
    console.error(err);
  }
}
  

  return go()
})
