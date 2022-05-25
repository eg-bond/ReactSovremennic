import xlsx from 'xlsx'
import fs from 'fs'
import { filmsArray } from '../../src/REDUX/filmsArray.mjs'

//Вытаскиваем JS объект с расписанием из екселя
let workBook = xlsx.readFile('ExternalScripts/Excel/macros.xlsm')
let ws = workBook.Sheets['Лист2']
let data = xlsx.utils.sheet_to_json(ws)
//Преобразуем извлеченный из екселя объект в удобный для дальнейшего использования
let scedule = {}
for (let i = 0; i < 7; i++) {
  let dayArr = data.filter(item => item.day === `day${i}`)
  scedule[`day${i}`] = dayArr.map(item => [
    item.time,
    item.filmTitle,
    item.cost,
  ])
}

const finalScedule = finalizeScedule(scedule)

//Формируем данные для записи в файл расписания в строковом формате
const finalData = `let scedule = ${JSON.stringify(finalScedule)}
export default scedule;`

//Записываем получившиеся данные в файл
fs.writeFileSync('src/Content/Seans/scedule.mjs', finalData)

// Актуализирует названия фильмов в расписании в соответствии с названиями из 'filmsArray'
// и добавляет возрастное ограничение
function finalizeScedule(scedule) {
  const sceduleCopy = JSON.parse(JSON.stringify(scedule))
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

    sceduleCopy[key] = updatedDay
  })

  return sceduleCopy
}

function findFirstWordInTitle(title) {
  const match = title.match(/^\S+/gi)
  return match[0].replace(/[\.:!,]/gi, '').toLowerCase()
}
