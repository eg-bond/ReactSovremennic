import scedule from '../../src/Content/Seance/schedule'
import { filmsArray } from '../../src/REDUX/filmsArray'
import fs from 'fs'
import { findFirstWordInTitle } from '../Excel/insertScheduleFromXLSX'

// Функция, которая ищет в массиве filmArray фильмы из входящего массива с названиями
// и возвращающая двумерный массив Array<["title", "age"]>
const findFilmAge = (titlesArr: any, filmsArr: typeof filmsArray) => {
  let result = []

  // убираем 2D из названий фильмов для корректного поиска
  const modifiedTitles = titlesArr.map(title => {
    return findFirstWordInTitle(title)
  })

  filmsArr.forEach(film => {
    if (modifiedTitles.includes(findFirstWordInTitle(film.title))) {
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
      // убираем двойные пробелы перед 2D и пробелы по бокам
      let filmTitle = item[1].replace(/\s+2D/gi, ' 2D').trim()
      if (dailySeansObject[filmTitle]) {
        dailySeansObject[filmTitle] = [...dailySeansObject[filmTitle], item]
      } else {
        dailySeansObject[filmTitle] = [item]
      }
    })

    // Формируем двумерный массив, каждый элемент которого содержит название фильма и возрастное ограничение в числовом формате
    const titlesArr = Object.keys(dailySeansObject)

    let seansTitlesAndAgesArr = agesToNumber(findFilmAge(titlesArr, filmsArray))

    console.log(seansTitlesAndAgesArr)

    // сортируем названия фильмов по возрастанию возрасных ограничений
    let sortedSeansTitles = sortTitles(seansTitlesAndAgesArr)

    console.log(sortedSeansTitles)
    // Добавляем день в объект preparedPSscedule
    preparedPSscedule[sceduleDayKey] = {
      titles: sortedSeansTitles,
      seansScedule: dailySeansObject,
    }
  })

  // Выносим расписание в отдельный JSON файл для дальнейшего использование фотошопом
  fs.writeFileSync(
    'ExternalScripts/PhotoShopScedule/psSchedule.json',
    JSON.stringify(preparedPSscedule)
  )
}

prepareSceduleForPS(Object.keys(scedule))
