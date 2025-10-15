// подключаем скрипт для корректной работы с JSON
#include json2.js

// Функция для работы с внешним json файлом ---------------------------------------------------
function loadJson(relPath) {
    var script = new File($.fileName)
    var jsonFile = new File(script.path + '/' + relPath)

    jsonFile.open('r')
    var str = jsonFile.read()
    jsonFile.close()

    return JSON.parse(str)
}

// Функция для сохранения JPEG файла ----------------------------------------------------------------
function saveJpeg(name) {
    var doc = app.activeDocument
    var file = new File(doc.path + '/' + name + '.jpg')

    var opts = new JPEGSaveOptions()
    opts.quality = 12

    doc.saveAs(file, opts, true)
}

// Функция, формирующая расписания для конкретного фильма
var makeFilmItem = function (filmSet, sceduleItemKey, dayTitlesArr, filmIndex) {
    // создаем переменные для заголовка и папок с временем и ценой   
    var titleLayer = filmSet.layers.getByName('title')
    var timeLayerSet = filmSet.layerSets.getByName('time')
    var priceLayerSet = filmSet.layerSets.getByName('price')

    var filmTitle = dayTitlesArr[filmIndex]
    var filmSceduleItem = preparedPSscedule[sceduleItemKey]["seansScedule"][filmTitle]

    // делаем невидимым время
    for (var i = 0; i <= 7; i++) {
        if (timeLayerSet.layers[i].visible) {
            timeLayerSet.layers[i].visible = false
        }
    }
    // делаем невидимымы цены
    for (var i = 0; i <= 7; i++) {
        if (priceLayerSet.layers[i].visible) {
            priceLayerSet.layers[i].visible = false
        }
    }

    // Вставляем название фильма
    titleLayer.textItem.contents = filmTitle

    // Вставляем время и цену
    for (var j = 0; j < filmSceduleItem.length; j++) {
        var seansIndex = filmSceduleItem[j][4]

        timeLayerSet.layers[seansIndex].visible = true
        priceLayerSet.layers[seansIndex].visible = true

        timeLayerSet.layers[seansIndex].textItem.contents = filmSceduleItem[j][0]
        priceLayerSet.layers[seansIndex].textItem.contents = filmSceduleItem[j][3]
    }

    // Сохраняем файл
    var filename = sceduleItemKey + '-2025'
    saveJpeg(filename)
}

// Главный цикл -----------------------------------------------------------------
// Подготовленное для фотошопа расписание сеансов
var preparedPSscedule = loadJson('psSchedule.json')

// Массив с ключами дней недели, для которых необходимо сформировать расписание
var dayKeysRanges = {
    firstHalf: ["day1", "day2", "day3"],
    secondHalf: ["day4", "day5", "day6", "day0"],
    weekEnd: ["day6", "day0"],
    allWeek: ["day1", "day2", "day3", "day4", "day5", "day6", "day0"]
}
// Это единственный изменяемый параметр
var dayKeysArr = ["day6", "day0"]

// Цикл, пробегающийся по выбранным в dayKeysArr фильмам
for (var i = 0; i < dayKeysArr.length; i++) {
    // Стринговый ключ конкретного дня
    var sceduleItemKey = dayKeysArr[i]
    // Массив названий фильмов, отсортированный в порядке возрастания возраста
    var dayTitlesArr = preparedPSscedule[sceduleItemKey]["titles"]
    // Цикл, заполняющий по отдельности каждый фильм
    for (var j = 0; j < dayTitlesArr.length; j++) {
        // выбираем папку фильма
        var filmSet = app.activeDocument.layerSets.getByName('film_' + j)        
        makeFilmItem(filmSet, sceduleItemKey, dayTitlesArr, filmIndex = j)
    }     
}

