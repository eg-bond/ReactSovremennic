import xlsx from 'xlsx'
import fs from 'fs'
import { filmsArray } from '../../src/REDUX/filmsArray.js'

// retrieve data from excel file
const workBook = xlsx.readFile('ExternalScripts/Excel/macros.xlsm')
const ws = workBook.Sheets['Лист2']
const data = xlsx.utils.sheet_to_json(ws)

const schedule = dataToObj(data)
const finalSchedule = finalizeScedule(schedule)

// Write final data to schedule.ts file
const finalData = `const schedule = ${JSON.stringify(finalSchedule)}
export default schedule;`
fs.writeFileSync('src/Content/Seance/schedule.ts', finalData)

//------------------------------------------------------------------------
function dataToObj(data) {
  const schedule = {}

  for (let i = 0; i < 7; i++) {
    const currentKey = `day${i}`
    const dayArr = data.filter(item => item.day === currentKey)
    schedule[currentKey] = dayArr.map(item => [
      item.time,
      item.filmTitle,
      item.cost,
    ])
  }

  return schedule
}

// Replace titles with ones from filmsArray and add age to final schedule
function finalizeScedule(schedule) {
  const actualTitleAndAge = findTitleAndAge()

  const finalSchedule = {}
  // loop through all days
  Object.keys(schedule).forEach(
    //@ts-ignore
    key => {
      // map through all seance in a day an add actual title and age
      const updatedDay = schedule[key].map(seance => {
        const shortTitle = findFirstWordInTitle(seance[1])

        if (actualTitleAndAge[shortTitle]) {
          return [
            seance[0],
            actualTitleAndAge[shortTitle][0],
            actualTitleAndAge[shortTitle][1],
            seance[2],
          ]
        } else {
          return ['There', 'is', 'no', 'movie']
        }
      })

      finalSchedule[key] = updatedDay
    }
  )

  return finalSchedule
}

// retrieve title and age of all items in filmsArray
function findTitleAndAge() {
  const actualTitleAndAge = {}

  filmsArray.forEach(filmItem => {
    const key = findFirstWordInTitle(filmItem.title)
    actualTitleAndAge[key] = [filmItem.title + ' 2D', filmItem.age]
  })

  return actualTitleAndAge
}

export function findFirstWordInTitle(title) {
  const match = title.match(/^\S+/gi) || ['']
  return match[0].replace(/[\.:!,]/gi, '').toLowerCase()
}
