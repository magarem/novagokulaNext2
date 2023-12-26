import fs from 'fs';
import path from 'path';

const folderPath = './public/upload';
// const relativeFolderPath = path.relative(process.cwd(), folderPath);

export default function () {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.match(/.*\.(jpg|png?)/gi));

  const filesPaths = files.map(
    (fileName) => `/_nuxt/${relativeFolderPath}/${fileName}`
  );

  return filesPaths;
}