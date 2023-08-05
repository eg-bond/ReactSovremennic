import fs from 'fs'
import { getPageContent } from './puppeteer.ts'
import { JSDOM } from 'jsdom'

const URL = 'https://www.kinopoisk.ru/film/'
const cinemaIds = ['1395369', '4533251', '1378852']

parseCinemaData(cinemaIds)
//------------------------------------------------------------------------------

const emptyFilmItem = {
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

async function parseCinemaData(ids: typeof cinemaIds) {
  const htmlStringArray = await getHTML(ids)

  const result: Array<typeof emptyFilmItem> = []

  htmlStringArray.forEach(htmlStr => {
    const dom = new JSDOM(htmlStr, { contentType: 'text/html' })
    const divsArr = dom.window.document.querySelectorAll('div')

    const { getTitle, getField, getActors, getDescription } = parseFunctions(
      dom,
      divsArr
    )

    const filmItem = { ...emptyFilmItem }

    filmItem.title = getTitle()
    filmItem.kind = getField('kind')
    filmItem.director = getField('director')
    filmItem.age = getField('age')
    filmItem.duration = getField('duration')
    filmItem.actors = getActors()
    filmItem.description = getDescription()

    result.push(filmItem)
  })

  // Save result to "scrapperResult" file
  const finalData = `const filmsArray = ${JSON.stringify(result)}`
  fs.writeFileSync('ExternalScripts/Scrapper/scrapperResult.ts', finalData)

  console.log(result)
}

//------------------------------------------------------------------------------
async function getHTML(ids: typeof cinemaIds) {
  const promises: Array<Promise<string>> = []
  ids.forEach(id => {
    promises.push(getPageContent(`${URL}${id}`))
  })

  const htmlStringsArr = await Promise.all(promises)

  return htmlStringsArr
}

//------------------------------------------------------------------------------
function parseFunctions(dom: JSDOM, divsArr: NodeListOf<HTMLDivElement>) {
  function getTitle() {
    const titleString = dom.window.document.querySelector('h1')?.textContent

    if (!titleString) {
      return '-'
    }

    const datePartIndex = titleString?.indexOf('(')

    return datePartIndex !== -1
      ? titleString.slice(0, datePartIndex - 1)
      : titleString
  }

  const fieldParams = {
    age: { searchWord: 'Возраст' },
    duration: { searchWord: 'Время' },
    director: { searchWord: 'Режиссер' },
    kind: { searchWord: 'Жанр' },
  } as const

  function getField(fieldName: keyof typeof fieldParams) {
    const fieldNameNode = [...divsArr].find(
      item => item.textContent === fieldParams[fieldName].searchWord
    )

    if (!fieldNameNode) {
      return '-'
    }

    if (fieldName === 'age' || fieldName === 'duration') {
      return fieldNameNode.nextSibling?.textContent || '-'
    } else {
      return capitalizeFirstLetter(
        fieldNameNode.nextSibling?.firstChild?.textContent
      )
    }
  }

  function getActors() {
    const actorNodesArr =
      dom.window.document.querySelectorAll('[itemprop="actor"]')

    // get rid of dubbing actors and form a single string
    const filteredActorsString = [...actorNodesArr]
      .filter(item =>
        item?.closest('div')?.textContent?.includes('В главных ролях')
      )
      .map(item => item.textContent)
      .join(', ')

    return filteredActorsString
  }

  function getDescription() {
    const pNodesArr = dom.window.document.querySelectorAll('p')

    // find description paragraph
    const descriptionP = [...pNodesArr].find(item =>
      item.className.includes('styles_paragraph')
    )

    return descriptionP?.textContent || '-'
  }

  return { getTitle, getField, getActors, getDescription }
}

//------------------------------------------------------------------------------
function capitalizeFirstLetter(string: string | undefined | null) {
  if (!string) return '-'
  return string.charAt(0).toUpperCase() + string.slice(1)
}
