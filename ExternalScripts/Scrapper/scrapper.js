import fs from 'fs'
import { getPageContent } from './puppeteer.js'
import { JSDOM } from 'jsdom'

const URL = 'https://www.kinopoisk.ru/film/'
const cinemaIds = ['927898', '5264991']

parseCinemaData(cinemaIds)

//------------------------------------------------------------------------------
async function parseCinemaData(id) {
  const htmlStringArray = await getHTML(id)
  const result = []

  htmlStringArray.forEach(htmlStr => {
    const dom = new JSDOM(htmlStr, { contentType: 'text/html' })
    const divsArr = dom.window.document.querySelectorAll('div')

    const { getTitle, getField, getActors, getDescription, filmItem } =
      parseFunctions(dom, divsArr)

    getTitle()
    getField('kind')
    getField('director')
    getField('age')
    getField('duration')
    getActors()
    getDescription()

    result.push(filmItem)
  })

  // Save result to "scrapperResult" file
  const finalData = `let filmsArray = ${JSON.stringify(result)}`
  fs.writeFileSync('ExternalScripts/Scrapper/scrapperResult.js', finalData)

  console.log(result)
}

//------------------------------------------------------------------------------
async function getHTML(ids) {
  let promises = []
  ids.forEach(id => {
    promises.push(getPageContent(`${URL}${id}`))
  })
  const htmlStringsArr = await Promise.all(promises)

  return htmlStringsArr
}

//------------------------------------------------------------------------------
function parseFunctions(dom, divsArr) {
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

  function getTitle() {
    const titleString = dom.window.document.querySelector('h1').textContent
    const datePartIndex = titleString.indexOf('(')

    datePartIndex !== -1
      ? (filmItem.title = titleString.slice(0, datePartIndex - 1))
      : (filmItem.title = titleString)
  }

  function getField(fieldName) {
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

  function getActors() {
    let actorNodesArr =
      dom.window.document.querySelectorAll('[itemprop="actor"]')

    // get rid of dubbing actors and form a single string
    let filteredActorsString = [...actorNodesArr]
      .filter(item =>
        item.closest('div').textContent.includes('В главных ролях')
      )
      .map(item => item.textContent)
      .join(', ')

    filmItem.actors = filteredActorsString
  }

  function getDescription() {
    let pNodesArr = dom.window.document.querySelectorAll('p')

    // find description paragraph
    const descriptionP = [...pNodesArr].find(item =>
      item.className.includes('styles_paragraph')
    )

    filmItem.description = descriptionP.textContent
  }

  return { getTitle, getField, getActors, getDescription, filmItem }
}

//------------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
