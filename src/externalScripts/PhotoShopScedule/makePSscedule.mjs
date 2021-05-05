import scedule from '../../Excel/scedule.mjs'
import { filmsArray } from '../../REDUX/filmsArray.js'
import fs from 'fs'

// Функция, которая ищет в массиве filmArray фильмы из входящего массива с названиями
// и возвращающая двумерный массив Array<["title", "age"]>
const findFilmAge = (titlesArr, filmsArr) => {
  let result = []
  // убираем 2D из названий фильмов для корректного поиска
  const modifiedTitles = titlesArr.map(title => {
    return title.substr(0, title.length - 3)
  })
  filmsArr.forEach(film => {
    let titleReg = new RegExp(film.title.slice(0, 8), 'i')

    if (titleReg.test(modifiedTitles)) {
      result.push([film.title + ' 2D', film.age])
    }
  })

  return result
}
// Функция, приводящая к строке возрастные ограничения в массиве
const agesToNumber = arr => {
  let deletePlus = arr.map(item => {
    return [item[0], item[1].substring(0, item[1].length - 1)]
  })
  let result = deletePlus.map(item => [item[0], +item[1]])

  return result
}
// Функция, сортирующая двумерный массив названий и возрастов в порядке возрастания возрастного ограничения
// и возвращающая отсортированный массив названий
const sortTitles = titlesAgesArr => {
  let sortedArray = titlesAgesArr.sort(function (a, b) {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    } else {
      return a[0].charCodeAt() - b[0].charCodeAt()
    }
  })
  return sortedArray.map(item => item[0])
}
//--------------------------------------------------------------------------

const prepareSceduleForPS = sceduleKeysArray => {
  let preparedPSscedule = {} // тут будет храниться итоговое расписание для PhotoShop

  // Формируем поочередно каждый день
  sceduleKeysArray.forEach(sceduleDayKey => {
    // Добавляем индексы-ключи внутрь массивов с фильмами (для навигации фотошоп-скрипта)
    let indexedSceduleItem = scedule[sceduleDayKey].map((item, i) => [
      ...item,
      i,
    ])
    // Формируем объект вида "Название фильма": [Массив сеансов]
    let dailySeansObject = {}
    indexedSceduleItem.forEach(item => {
      let filmTitle = item[1].replace('  ', ' ') // убираем двойные пробелы из названий фильмов
      if (dailySeansObject[filmTitle]) {
        dailySeansObject[filmTitle] = [...dailySeansObject[filmTitle], item]
      } else {
        dailySeansObject[filmTitle] = [item]
      }
    })

    // Формируем двумерный массив, каждый элемент которого содержит название фильма и возрастное ограничение в числовом формате
    const titlesArr = Object.keys(dailySeansObject)

    let seansTitlesAndAgesArr = agesToNumber(findFilmAge(titlesArr, filmsArray))

    // сортируем названия фильмов по возрастанию возрасных ограничений
    let sortedSeansTitles = sortTitles(seansTitlesAndAgesArr)

    // Добавляем день в объект preparedPSscedule
    preparedPSscedule[sceduleDayKey] = {
      titles: sortedSeansTitles,
      seansScedule: dailySeansObject,
    }
  })

  // Выносим расписание в отдельный JSON файл для дальнейшего использование фотошопом
  fs.writeFileSync(
    './src/externalScripts/PhotoShopScedule/psScedule.json',
    JSON.stringify(preparedPSscedule)
  )
}

prepareSceduleForPS(Object.keys(scedule))
