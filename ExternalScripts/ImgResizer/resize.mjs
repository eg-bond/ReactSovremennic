import sharp from 'sharp'
import fs from 'fs'
const imgToResize = 'ExternalScripts/ImgResizer/input/'
const resizedImg = 'ExternalScripts/ImgResizer/output/'

const resize = (width, height, postfix) => {
  fs.readdirSync(imgToResize).forEach(file => {
    sharp(`${imgToResize}/${file}`)
      .resize(width, height) // width, height
      .toFile(`${resizedImg}/${file.replace('.jpg', '')}${postfix}.webp`)
  })
}

resize(700, 359, '')

// resize(1536, 864, '_lg')
// resize(670, 376, '_md')
// resize(460, 259, '_sm')
