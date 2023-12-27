import { readFileAsync } from 'node:fs';
import { Buffer } from 'node:buffer';
import * as path from 'node:path'
import * as fs from 'node:fs'

export default defineEventHandler( (event) => {
    const query = getQuery(event)
    const dirname = query.dirname
    console.log(111, dirname);
    
    // const filePath = path.join(process.cwd(), 'public', 'test.txt')
    fs.mkdir(path.join('public/upload/', dirname), (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log('Directory created successfully!'); 
        return 'ok'
    }); 

})