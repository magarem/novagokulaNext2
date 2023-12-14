import formidable from "formidable";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
 
        let oldPath = files.profilePic.filepath;
        let newPath = path.join(__dirname, 'uploads')
            + '/' + files.profilePic.name
        let rawData = fs.readFileSync(oldPath)
 
        fs.writeFile(newPath, rawData, function (err) {
            if (err) console.log(err)
            return res.send("Successfully uploaded")
        })
    })
});