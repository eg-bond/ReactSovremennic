import sharp from 'sharp'
import fs from 'fs'
const imgToResize = 'ExternalScripts/ImgResizer/input/'
const resizedImg = 'ExternalScripts/ImgResizer/output/'

const resize = (width, height, postfix) => {
  fs.readdirSync(imgToResize).forEach(file => {
    sharp(`${imgToResize}/${file}`)
      .resize(width, height) // width, height
      .toFile(`${resizedImg}/${file.replace('.webp', '')}${postfix}.webp`)
  })
}

resize(223, 223, '_md')
resize(170, 170, '_sm')
