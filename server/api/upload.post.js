import { readFiles } from 'h3-formidable';
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
    const { files: { photo: [ { filepath, mimetype } ] } } = await readFiles(event, {
         includeFields: true
    });

    let imageName = String(Date.now()) + String(Math.round(Math.random() * 10000000));
    let newPath = `${path.join("public", "upload", imageName)}.${ mimetype.split('/')[1] }`;
    fs.copyFileSync(filepath, newPath);

    return { success: true }
});