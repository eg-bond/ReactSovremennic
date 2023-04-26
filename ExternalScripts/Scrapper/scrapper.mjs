import fs from 'fs'
import cherio from 'cherio'
import { getPageContent } from './puppeteer.mjs'

const SITE = 'https://www.kinopoisk.ru/film/'
const cinemaIds = ['1267348']

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

async function scrapCinema(id) {
  try {
    let filmItem = {
      title: '',
      beginDate: 'с ',
      endDate: '',
      kind: '',
      director: '',
      duration: '',
      age: '',
      actors: '',
      description: '',
      playerCode: '',
      link: '',
    }
    // Download HTML of desired page as string
    const pageContent = await getPageContent(`${SITE}${id}`)

    // Insert HTML string to cherio
    const $ = cherio.load(pageContent)

    const $divs = $('div')
    const divsArr = Object.values($divs)

    // Title--------------------------------------------------------------------------------------------
    let titleString = $('h1').text()
    const datePart = titleString.indexOf('(')
    datePart !== -1
      ? (filmItem.title = titleString.slice(0, datePart - 1))
      : (filmItem.title = titleString)

    // Kind---------------------------------------------------------------------------------------------
    // Find parent div of "kind" field
    const kindDiv = divsArr.find(item => $(item).text() === 'Жанр')
    const $kindParent = $(kindDiv).parent()
    // Находим все ссылки внутри, фильтруем и получаем обрезанный с конца массив жанров
    const $kindLinks = $('a', $kindParent)
    const kindLinksFiltered = Object.values($kindLinks).filter(
      item => $(item).text() !== 'слова'
    )

    const kindLinksArrSliced = Object.values(kindLinksFiltered).slice(0, -4)
    // retrieve innerText from every link and form string of movie kind
    const kindLinksText = kindLinksArrSliced.map(item => $(item).text())
    const kindString = kindLinksText.join(', ')
    filmItem.kind = capitalizeFirstLetter(kindString)

    // Director------------------------------------------------------------------------------------------
    //Находим родительский div строки "Режиссер"
    const directorDiv = divsArr.find(item => $(item).text() === 'Режиссер')
    const $directorParent = $(directorDiv).parent()
    // Находим все ссылки внутри, фильтруем и получаем обрезанный с конца массив жанров
    const $directorLinks = $('a', $directorParent)
    const directorLinksFiltered = Object.values($directorLinks).filter(
      item => $(item).text() !== 'слова'
    )
    const directorLinksArrSliced = Object.values(directorLinksFiltered).slice(
      0,
      -4
    )
    // вытаскиваем innerText из каждой ссылки и формируем строку из жанров, разделенных запятыми
    const directorLinksText = directorLinksArrSliced.map(item => $(item).text())
    const directorString = directorLinksText.join(', ')
    filmItem.director = directorString

    // Duration-----------------------------------------------------------------------------------------
    // Find parent div of "diration" field
    const durationDiv = divsArr.find(item => $(item).text() === 'Время')
    const $durationParent = $(durationDiv).parent()
    // retrieve duration
    const $durationLinks = $('div', $durationParent)
    const durationLinksArrSliced = Object.values($durationLinks).slice(0, -4)
    const durationLinksText = durationLinksArrSliced.map(item => $(item).text())
    const durationString = durationLinksText[durationLinksText.length - 1]
    filmItem.duration = durationString

    // Age-----------------------------------------------------------------------------------------------
    // Find parent div of "age" field
    const ageDiv = divsArr.find(item => $(item).text() === 'Возраст')
    const $ageParent = $(ageDiv).parent()
    // retrieve age
    const ageSpan = $('span', $ageParent)
    const ageString = ageSpan.text()
    filmItem.age = ageString

    // Actors--------------------------------------------------------------------------------------------
    const $actorsNode = $('[itemprop="actor"]')
    const actorsArr = Object.values($actorsNode).map(item => $(item).text())
    const actorsString = actorsArr.slice(0, -4).join(', ')
    filmItem.actors = actorsString

    // Description---------------------------------------------------------------------------------------
    const $p = $('p')
    const pArr = Object.values($p)

    const descriptionP = pArr.find(item =>
      $(item).attr('class').includes('styles_paragraph')
    )
    filmItem.description = $(descriptionP).text()

    // --------------------------------------------------------------------------------------------------
    return filmItem
  } catch (err) {
    console.log('An error has occured \n')
    console.log(err)
  }
}

// Формируем массив фильмов и записываем в файл
let filmsArr = cinemaIds.map(id => scrapCinema(id))
Promise.all(filmsArr).then(data => {
  console.log(data)
  //Формируем данные для записи в файл расписания в строковом формате
  const finalData = `let filmsArray = ${JSON.stringify(data)}`
  //Записываем получившиеся данные в файл
  fs.writeFileSync('ExternalScripts/Scrapper/filmsArray.js', finalData)
})
