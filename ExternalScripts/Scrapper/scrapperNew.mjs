import fs from 'fs'
import cherio from 'cherio'
import { getPageContent } from './puppeteer.mjs'
import { JSDOM } from 'jsdom'
import { example } from './example.mjs'

const URL = 'https://www.kinopoisk.ru/film/'
const cinemaIds = ['1387135', '1267348']

//------------------------------------------------------------------------------
function getTitle(divsArr, filmItem, dom) {
  let titleString = dom.window.document.querySelector('h1').textContent
  const datePart = titleString.indexOf('(')
  return datePart !== -1
    ? (filmItem.title = titleString.slice(0, datePart - 1))
    : (filmItem.title = titleString)
}

//------------------------------------------------------------------------------
function getKind(divsArr, filmItem) {
  const kindParentNode = [...divsArr].find(
    item => item.textContent === 'Жанр'
  ).parentElement

  const kindLinksNodes = kindParentNode.querySelectorAll('a')
  const kindLinksFiltered = [...kindLinksNodes].filter(
    el => el.textContent !== 'слова'
  )
  const kindString = kindLinksFiltered.map(item => item.textContent).join(', ')

  filmItem.kind = capitalizeFirstLetter(kindString)
}

//------------------------------------------------------------------------------
function getDirector(divsArr, filmItem) {
  const directorParentNode = [...divsArr].find(
    item => item.textContent === 'Режиссер'
  ).parentElement

  const kindLinksNodes = directorParentNode.querySelectorAll('a')
  const kindLinksFiltered = [...kindLinksNodes].filter(
    el => el.textContent !== 'слова'
  )
  const kindString = kindLinksFiltered.map(item => item.textContent).join(', ')

  filmItem.director = capitalizeFirstLetter(kindString)
}

//------------------------------------------------------------------------------
function getDuration(divsArr, filmItem) {
  const directorParentNode = [...divsArr].find(
    item => item.textContent === 'Время'
  ).parentElement

  const kindLinksNodes = directorParentNode.querySelectorAll('div ~ div')
  const kindLinksFiltered = [...kindLinksNodes].filter(
    el => el.textContent !== 'слова'
  )
  const kindString = kindLinksFiltered.map(item => item.textContent).join(', ')

  filmItem.duration = kindString
}

//---------------------------------------------------------------------
function getAge(divsArr, filmItem) {
  const ageNode = [...divsArr].find(item => item.textContent === 'Возраст')

  !ageNode
    ? (filmItem.age = '-')
    : (filmItem.age = ageNode.parentElement.querySelector('span').textContent)
}

//------------------------------------------------------------------------------
function getActors(filmItem, dom) {
  let actorsArr = dom.window.document.querySelectorAll('[itemprop="actor"]')

  let filteredActors = [...actorsArr]
    .filter(item => item.closest('div').textContent.includes('В главных ролях'))
    .map(item => item.textContent)
    .join(', ')

  filmItem.actors = filteredActors
}
//------------------------------------------------------------------------------
function getDescription(filmItem, dom) {
  let pArr = dom.window.document.querySelectorAll('p')

  const descriptionP = [...pArr].find(item =>
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

  getTitle(divsArr, filmItem, dom)
  getKind(divsArr, filmItem)
  getDirector(divsArr, filmItem)
  getAge(divsArr, filmItem)
  getActors(filmItem, dom)
  getDescription(filmItem, dom)
  getDuration(divsArr, filmItem)

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
