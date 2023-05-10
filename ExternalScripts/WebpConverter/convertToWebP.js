import webp from 'webp-converter'
import fs from 'fs'

const options = {
  description: {
    input: 'ExternalScripts/WebpConverter/description_img/',
    output: 'public/Images/description/',
  },
  top_menu: {
    input: 'ExternalScripts/WebpConverter/top_menu_img/',
    output: 'public/Images/top_menu/',
  },
  main: {
    input: 'ExternalScripts/WebpConverter/main_img/',
    output: 'src/images/',
  },
}

const convertToWebP = name => {
  const inputFolderPath = options[name].input

  fs.readdirSync(inputFolderPath).forEach(file => {
    webp.cwebp(
      options[name].input + file,
      options[name].output + file.replace('.jpg', '.webp'),
      '-q 80'
    )
  })
}

convertToWebP('description')
convertToWebP('top_menu')
convertToWebP('main')
