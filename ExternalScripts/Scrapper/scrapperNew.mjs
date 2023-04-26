import fs from 'fs'
import { getPageContent } from './puppeteer.mjs'
import { JSDOM } from 'jsdom'

const URL = 'https://www.kinopoisk.ru/film/'
const cinemaIds = ['1387135', '1267348']

//------------------------------------------------------------------------------++
function getTitle(filmItem, dom) {
  const titleString = dom.window.document.querySelector('h1').textContent
  const datePartIndex = titleString.indexOf('(')

  datePartIndex !== -1
    ? (filmItem.title = titleString.slice(0, datePartIndex - 1))
    : (filmItem.title = titleString)
}

//------------------------------------------------------------------------------+-
// function getField(fieldName, divsArr, filmItem) {
//   const fieldParams = {
//     kind: { searchWord: 'Жанр', filterWord: 'слова' },
//     director: { searchWord: 'Режиссер', filterWord: '...' },
//   }

//   const fieldParentNode = [...divsArr].find(
//     item => item.textContent === fieldParams[fieldName].searchWord
//   ).parentElement

//   const fieldLinkNodes = fieldParentNode.querySelectorAll('a')
//   const fieldLinksFiltered = [...fieldLinkNodes].filter(
//     el => el.textContent !== fieldParams[fieldName].filterWord
//   )
//   const fieldString = fieldLinksFiltered
//     .map(item => item.textContent)
//     .join(', ')

//   filmItem[fieldName] = capitalizeFirstLetter(fieldString)
// }

//------------------------------------------------------------------------------+-
function getFieldNew(fieldName, divsArr, filmItem) {
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
// function getKind(divsArr, filmItem) {
//   const kindParentNode = [...divsArr].find(
//     item => item.textContent === 'Жанр'
//   ).parentElement

//   const kindLinksNodes = kindParentNode.querySelectorAll('a')
//   const kindLinksFiltered = [...kindLinksNodes].filter(
//     el => el.textContent !== 'слова'
//   )
//   const kindString = kindLinksFiltered.map(item => item.textContent).join(', ')

//   filmItem.kind = capitalizeFirstLetter(kindString)
// }

//------------------------------------------------------------------------------
// function getDirector(divsArr, filmItem) {
//   const directorParentNode = [...divsArr].find(
//     item => item.textContent === 'Режиссер'
//   ).parentElement

//   const kindLinksNodes = directorParentNode.querySelectorAll('a')
//   const kindLinksFiltered = [...kindLinksNodes].filter(
//     el => el.textContent !== '...'
//   )
//   const kindString = kindLinksFiltered.map(item => item.textContent).join(', ')

//   filmItem.director = capitalizeFirstLetter(kindString)
// }

//------------------------------------------------------------------------------++
function getDuration(divsArr, filmItem) {
  const durationNameNode = [...divsArr].find(
    item => item.textContent === 'Время'
  )

  !durationNameNode
    ? (filmItem.duration = '-')
    : (filmItem.duration = durationNameNode.nextSibling.textContent)
}

//------------------------------------------------------------------------------++
function getAge(divsArr, filmItem) {
  const ageNameNode = [...divsArr].find(item => item.textContent === 'Возраст')

  !ageNameNode
    ? (filmItem.age = '-')
    : (filmItem.age = ageNameNode.nextSibling.textContent)
}

//------------------------------------------------------------------------------++
function getActors(filmItem, dom) {
  let actorNodesArr = dom.window.document.querySelectorAll('[itemprop="actor"]')

  // get rid of dubbing actors and form a single string
  let filteredActorsString = [...actorNodesArr]
    .filter(item => item.closest('div').textContent.includes('В главных ролях'))
    .map(item => item.textContent)
    .join(', ')

  filmItem.actors = filteredActorsString
}

//------------------------------------------------------------------------------++
function getDescription(filmItem, dom) {
  let pNodesArr = dom.window.document.querySelectorAll('p')

  // find description paragraph
  const descriptionP = [...pNodesArr].find(item =>
    item.className.includes('styles_paragraph')
  )

  filmItem.description = descriptionP.textContent
}

//----------------------------------------------------

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
  // getField('kind', divsArr, filmItem)
  // getField('director', divsArr, filmItem)
  getFieldNew('kind', divsArr, filmItem)
  getFieldNew('director', divsArr, filmItem)
  getFieldNew('age', divsArr, filmItem)
  getFieldNew('duration', divsArr, filmItem)

  // getAge(divsArr, filmItem)
  getActors(filmItem, dom)
  getDescription(filmItem, dom)
  // getDuration(divsArr, filmItem)

  console.log(filmItem)
}

//--------------------------------------

async function getHTML(ids) {
  let promises = []
  ids.forEach(id => {
    promises.push(getPageContent(`${URL}${id}`).then(htmlString => htmlString))
  })
  await Promise.all(promises)
  return promises
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
