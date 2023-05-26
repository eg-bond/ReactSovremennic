import xlsx from 'xlsx'
// import fs from 'fs'
import { filmsArray } from '../../src/REDUX/filmsArray.ts'

//Вытаскиваем JS объект с расписанием из екселя
const workBook = xlsx.readFile('ExternalScripts/Excel/macros.xlsm')
const ws = workBook.Sheets['Лист2']
const data = xlsx.utils.sheet_to_json(ws) as dataT

type dataSingleObj = {
  day: 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6'
  time: 'string'
  filmTitle: 'string'
  cost: number
}
type dataT = Array<dataSingleObj>

//Преобразуем извлеченный из екселя объект в удобный для дальнейшего использования
const scedule = dataToObj(data)

// type sceduleT = {
//   [`day1`]: {
//     time: 'string'
//     filmTitle: 'string'
//     cost: number
//   }
// }

function dataToObj(data: dataT) {
  // const scedule = {}
  const scedule = {} as {
    [index: string]: Array<[string, string, number]>
  }

  for (let i = 0; i < 7; i++) {
    const dayArr = data.filter(item => item.day === `day${i}`)
    scedule[`day${i}`] = dayArr.map(item => [
      item.time,
      item.filmTitle,
      item.cost,
    ])
  }

  return scedule
}

const finalScedule = finalizeScedule(scedule)

console.log(finalScedule)

//Формируем данные для записи в файл расписания в строковом формате
// const finalData = `let scedule = ${JSON.stringify(finalScedule)}
// export default scedule;`

// //Записываем получившиеся данные в файл
// fs.writeFileSync('src/Content/Seance/scedule.ts', finalData)

// Актуализирует названия фильмов в расписании в соответствии с названиями из 'filmsArray'
// и добавляет возрастное ограничение
function finalizeScedule(scedule: ReturnType<typeof dataToObj>) {
  const sceduleCopy: typeof scedule = JSON.parse(JSON.stringify(scedule))
  const actualTitleAndAge = {}

  filmsArray.forEach(filmItem => {
    const key = findFirstWordInTitle(filmItem.title)
    actualTitleAndAge[key] = [filmItem.title + ' 2D', filmItem.age]
  })

  Object.keys(scedule).forEach(key => {
    const updatedDay = scedule[key].map(seance => {
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
    sceduleCopy[key] = updatedDay
  })

  return sceduleCopy
}

// function normalizeNames(scedule: ReturnType<typeof dataToObj>) {}

function findFirstWordInTitle(title: string) {
  const match = title.match(/^\S+/gi) || ['']
  return match[0].replace(/[\.:!,]/gi, '').toLowerCase()
}
