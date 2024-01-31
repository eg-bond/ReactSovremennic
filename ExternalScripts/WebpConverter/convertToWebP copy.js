import webp from 'webp-converter'
import fs from 'fs'
import { log } from 'console'

// this will grant 755 permission to webp executables
// webp.grant_permission()

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
    input: 'ExternalScripts/WebpConverter/main/',
    output: 'src/images/',
  },
  input: {
    input: 'ExternalScripts/WebpConverter/input/',
    output: 'ExternalScripts/WebpConverter/output/',
  },
}

//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)

//cwebp(input,output,option)

const convertToWebP = name => {
  const inputFolderPath = options[name].input
  fs.readdirSync(inputFolderPath).forEach(file => {
    console.log(file)
    // webp.cwebp(
    //   options[name].input + file,
    //   options[name].output + file.replace('.jpg', '.webp'),
    //   '-q 95'
    // )
  })
}

// convertToWebP('input')
convertToWebP('description')
convertToWebP('top_menu')
// convertToWebP('main')
