import fs from 'fs'
import { getPageContent } from './puppeteer.mjs'
import { JSDOM } from 'jsdom'

const URL = 'https://www.kinopoisk.ru/film/'
const cinemaIds = ['1387135', '1267348']

scrapCinema('1267348')

async function scrapCinema(id) {
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

  const pageContent = await getPageContent(`${URL}${id}`)
  const dom = new JSDOM(pageContent, { contentType: 'text/html' })
  const divsArr = dom.window.document.querySelectorAll('div')

  getTitle(filmItem, dom)
  getField('kind', divsArr, filmItem)
  getField('director', divsArr, filmItem)
  getField('age', divsArr, filmItem)
  getField('duration', divsArr, filmItem)
  getActors(filmItem, dom)
  getDescription(filmItem, dom)

  console.log(filmItem)
}

//------------------------------------------------------------------------------
async function getHTML(ids) {
  let promises = []
  ids.forEach(id => {
    promises.push(getPageContent(`${URL}${id}`).then(htmlString => htmlString))
  })
  await Promise.all(promises)
  return promises
}

//------------------------------------------------------------------------------
function getTitle(filmItem, dom) {
  const titleString = dom.window.document.querySelector('h1').textContent
  const datePartIndex = titleString.indexOf('(')

  datePartIndex !== -1
    ? (filmItem.title = titleString.slice(0, datePartIndex - 1))
    : (filmItem.title = titleString)
}

//------------------------------------------------------------------------------
function getField(fieldName, divsArr, filmItem) {
  const fieldParams = {
    age: { searchWord: 'Возраст' },
    duration: { searchWord: 'Время' },
    director: { searchWord: 'Режиссер' },
    kind: { searchWord: 'Жанр' },
  }

  const fieldNameNode = [...divsArr].find(
    item => item.textContent === fieldParams[fieldName].searchWord
  )

  if (!fieldNameNode) {
    filmItem[fieldName] = '-'
    return
  }

  if (fieldName === 'age' || fieldName === 'duration') {
    filmItem[fieldName] = fieldNameNode.nextSibling.textContent
  } else {
    filmItem[fieldName] = capitalizeFirstLetter(
      fieldNameNode.nextSibling.firstChild.textContent
    )
  }
}

//------------------------------------------------------------------------------
function getActors(filmItem, dom) {
  let actorNodesArr = dom.window.document.querySelectorAll('[itemprop="actor"]')

  // get rid of dubbing actors and form a single string
  let filteredActorsString = [...actorNodesArr]
    .filter(item => item.closest('div').textContent.includes('В главных ролях'))
    .map(item => item.textContent)
    .join(', ')

  filmItem.actors = filteredActorsString
}

//------------------------------------------------------------------------------
function getDescription(filmItem, dom) {
  let pNodesArr = dom.window.document.querySelectorAll('p')

  // find description paragraph
  const descriptionP = [...pNodesArr].find(item =>
    item.className.includes('styles_paragraph')
  )

  filmItem.description = descriptionP.textContent
}

//------------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
