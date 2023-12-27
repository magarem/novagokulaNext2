import { unlinkSync } from 'node:fs';
// import { Buffer } from 'node:buffer';
// import * as path from 'node:path'
import * as fs from 'node:fs-'
import fs2 from 'fs-extra'
export default defineEventHandler( (event) => {
    const query = getQuery(event)
    const dirname = query.dirname
    console.log(111, dirname);
    
    // const filePath = path.join(process.cwd(), 'public', 'test.txt')
    // unlinkSync('public' + dirname);
    fs2.removeSync('public' + dirname); 

})