import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const save = (body) => {
        if (body.txt=="" || !body.txt) return ""
        console.log(body)
        const bodyTxt = new Uint8Array(Buffer.from(body.txt));
        writeFile('content/' + body.filename, bodyTxt, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        return ""
    }
    save(body)
})