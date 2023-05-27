import xlsx from 'xlsx'
import fs from 'fs'
import { filmsArray } from '../../src/REDUX/filmsArray.ts'

type dataT = Array<{
  day: 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6'
  time: 'string'
  filmTitle: 'string'
  cost: number
}>

// retrieve data from excel file
const workBook = xlsx.readFile('ExternalScripts/Excel/macros.xlsm')
const ws = workBook.Sheets['Лист2']
const data = xlsx.utils.sheet_to_json(ws) as dataT

const schedule = dataToObj(data)
const finalSchedule = finalizeScedule(schedule)

// Write final data to schedule.ts file
const finalData = `let schedule = ${JSON.stringify(finalSchedule)}
export default schedule;`
fs.writeFileSync('src/Content/Seance/schedule.ts', finalData)

//------------------------------------------------------------------------------------
function dataToObj(data: dataT) {
  const schedule = {} as {
    [index: string]: Array<[string, string, number]>
  }

  for (let i = 0; i < 7; i++) {
    const currentKey = `day${i}` as `day${0 | 1 | 2 | 3 | 4 | 5 | 6}`
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
function finalizeScedule(schedule: ReturnType<typeof dataToObj>) {
  const actualTitleAndAge = findTitleAndAge()

  const finalSchedule = {} as {
    [index: string]: Array<[string, string, string, number | string]>
  }
  // loop through all days
  Object.keys(schedule).forEach(key => {
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
    //@ts-ignore
    finalSchedule[key] = updatedDay
  })

  return finalSchedule
}

// retrieve title and age of all items in filmsArray
function findTitleAndAge() {
  const actualTitleAndAge = {} as { [index: string]: [string, string] }

  filmsArray.forEach(filmItem => {
    const key = findFirstWordInTitle(filmItem.title)
    actualTitleAndAge[key] = [filmItem.title + ' 2D', filmItem.age]
  })

  return actualTitleAndAge
}

function findFirstWordInTitle(title: string) {
  const match = title.match(/^\S+/gi) || ['']
  return match[0].replace(/[\.:!,]/gi, '').toLowerCase()
}
