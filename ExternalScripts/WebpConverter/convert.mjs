import fs from 'fs';
import sharp from 'sharp';
const imgToConvert = 'ExternalScripts/WebpConverter/input/';
const convertedImg = 'ExternalScripts/WebpConverter/output/';

const convert = () => {
  fs.readdirSync(imgToConvert).forEach((file) => {
    sharp(`${imgToConvert}/${file}`).toFile(
      `${convertedImg}/${file.replace('.jpg', '')}.webp`,
    );
  });
};

convert();
