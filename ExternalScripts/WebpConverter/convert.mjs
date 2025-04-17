import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
const imgToConvert = 'ExternalScripts/WebpConverter/input/';
const convertedImg = 'ExternalScripts/WebpConverter/output/';

const convert = () => {
  fs.readdirSync(imgToConvert).forEach((file) => {
    const inputPath = path.join(imgToConvert, file);
    const outputPath = path.join(
      convertedImg,
      `${path.parse(file).name}.webp`,
    );

    sharp(inputPath)
      .webp({
        quality: 100, // Adjust quality (0-100)
        lossless: false, // Use lossy compression
        effort: 0, // Compression effort (0-6)
      })
      .toFile(outputPath);
  });
};

convert();
