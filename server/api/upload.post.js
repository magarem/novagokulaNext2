import { readFiles } from 'h3-formidable';
import fs from "fs";
import path from "path";
import sharp from 'sharp'
export default defineEventHandler(async (event) => {
    const { files: { photo: [ { filepath, mimetype } ] } } = await readFiles(event, {
         includeFields: true
    });

    let imageName = String(Date.now()) + String(Math.round(Math.random() * 10000000));
    let newPath = `${path.join("public", "upload", imageName)}.${ mimetype.split('/')[1] }`;
    
    
    fs.copyFileSync(filepath, newPath);

    let image_id = Date.now() + Math.random()

    const image = await sharp(newPath)
    .resize(1350) // width=300 & height=150
    .toFormat('jpg') // convert to JPEG
    .jpeg({ quality: 85 }) // compress it with a quality level of 80 out of 100
    .toFile( "public/upload/"+image_id+'.jpg')

    fs.unlinkSync(newPath);
    console.log(image, filepath, newPath);
    // fs.writeFile('image.png', funnction);
    // fs.writeFile(newPath, image, (err) => { 
    //     if (err) 
    //       console.log(err); 
    //     else { 
    //       console.log("File written successfully\n"); 
    //     } 
    //   });
    return ""+image_id+'.jpg'
});