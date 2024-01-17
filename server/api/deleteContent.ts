import { unlinkSync } from 'node:fs';
// import { Buffer } from 'node:buffer';
// import * as path from 'node:path'
import * as fs from 'node:fs-'
import fs2 from 'fs-extra'
export default defineEventHandler( (event) => {
    const query = getQuery(event)
    const id = query.id
    console.log('delete file:', id);
    // const filePath = path.join(process.cwd(), 'public', 'test.txt')
    // unlinkSync('public' + dirname);
    fs2.removeSync(id); 
    console.log(id + ' deleted');
    return true
})