import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
// import { exec } from 'child_process'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const save = (body) => {
        if (body.txt=="" || !body.txt) return ""
        console.log(body)
        const bodyTxt = new Uint8Array(Buffer.from(body.txt));
        writeFile( body.filename, bodyTxt, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
        return ""
    }


    const terminalRun = (command: string) => {
        exec(command, (err, stdout, stderr) => {
        if (err) {
            //some err occurred
            console.error(err)
        } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        //    console.log(`stderr: ${stderr}`);
        }
        })
    }
    
    save(body)
    // terminalRun('git add ' + body.filename)
})