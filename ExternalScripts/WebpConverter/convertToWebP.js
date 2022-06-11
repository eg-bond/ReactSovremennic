const webp = require('webp-converter')
const fs = require('fs')

const options = {
  description: {
    input: './description_img/',
    output: '../../public/Images/description/',
  },
  top_menu: {
    input: './top_menu_img/',
    output: '../../public/Images/top_menu/',
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
