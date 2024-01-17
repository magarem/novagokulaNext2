import { readFileAsync } from 'node:fs';
import { Buffer } from 'node:buffer';
import * as path from 'node:path'
import * as fs from 'node:fs'

export default defineEventHandler( (event) => {
    const query = getQuery(event)
    console.log(111, query);
    const filename = query.filename
    const read = (filename) => {
        const data =  fs.readFileSync( filename, 'utf-8')
        return data
    }
    return read(filename);
})