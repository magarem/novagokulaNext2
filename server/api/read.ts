import { readFileAsync } from 'node:fs';
import { Buffer } from 'node:buffer';
import * as path from 'node:path'
import * as fs from 'node:fs'

export default defineEventHandler( (event) => {
    const query = getQuery(event)
    console.log(111, query);
    
    // const body = await readBody(event)
    // console.log('>>>', body.filename);
    const filename = query.filename
    console.log(111, filename);
    // bodyObj = JSON.parse(body)
    // console.log('>>>', bodyObj);
   
    
    const read =  (filename) => {
        // const filePath = path.join(process.cwd(), 'public', 'test.txt')
        const data =  fs.readFileSync('content/'+filename, 'utf-8')
        // readFileAsync('content/'+filename, 'utf8', function(err, data) {
        //     if (err) throw err;
        console.log('tt', data);
        
        return data
        //     return data
        // });
        
    }


    return read(filename);

})