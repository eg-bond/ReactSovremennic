import scedule from '../../Excel/scedule.mjs'
import { filmsArray } from '../../REDUX/filmsArray.js'
import fs from 'fs'

const prepareSceduleForPS = (sceduleKeysArray) => {
  let preparedPSscedule = {} // тут будет храниться итоговое расписание для PhotoShop

  sceduleKeysArray.forEach((sceduleKey) => {
    // Добавляем индексы-ключи внутрь массивов с фильмами (для навигации фотошоп-скрипта)
    let indexedSceduleItem = scedule[sceduleKey].map((item, i) => [...item, i])

    console.log(indexedSceduleItem)

    // Формируем объект фильмов
    let filmsObject = {}
    indexedSceduleItem.forEach((item) => {
      let filmTitle = item[1].replace('  ', ' ') // убираем лишние пробелы из ключа-названия
      if (filmsObject[filmTitle]) {
        filmsObject[filmTitle] = [...filmsObject[filmTitle], item]
      } else {
        filmsObject[filmTitle] = [item]
      }
    })

    // Формируем массив фильмов, отсортированный в порядке возрастания возраста
    const findFilmAge = (title, filmsObj) => {
      let result = []
      filmsObj.forEach((item) => {
        if (title.includes(item.title)) {
          result.push(title, item.age)
        }
      })
      return result
    }

    const agesToNumber = (arr) => {
      let deletePlus = arr.map((item) => {
        return [item[0], item[1].substring(0, item[1].length - 1)]
      })
      let result = deletePlus.map((item) => [item[0], +item[1]])

      return result
    }

    // Формируем двумерный массив, каждый элемент которого содержит название фильма и возрастное ограничение в числовом формате
    let filmTitlesArr = Object.keys(filmsObject)
    let filmTitlesAndAgesArr = filmTitlesArr.map((item) =>
      findFilmAge(item, filmsArray)
    )
    let numerizedArr = agesToNumber(filmTitlesAndAgesArr)

    // сортируем названия фильмов по возрастанию возраста
    let sortedArr = numerizedArr.sort(function (a, b) {
      return a[1] - b[1]
    })
    // удаляем возраст, оставляем только названия фильмов
    let filmTitlesFinal = sortedArr.map((item) => item[0])

    preparedPSscedule[sceduleKey] = {
      titles: filmTitlesFinal,
      seansScedule: filmsObject,
    }
  })

  // Выносим расписание в отдельный JSON файл для дальнейшего использование фотошопом
  fs.writeFileSync(
    './src/externalScripts/PhotoShopScedule/psScedule.json',
    JSON.stringify(preparedPSscedule)
  )
}

prepareSceduleForPS(Object.keys(scedule))
