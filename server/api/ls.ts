import { exec } from 'child_process'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    exec('git add ' + body.filename, (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    //    console.log(`stderr: ${stderr}`);
    }
    })
})