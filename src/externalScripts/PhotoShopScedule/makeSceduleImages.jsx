// подключаем скрипт для корректной работы с JSON
#include json2.js


var titlesArr = [
    'Конёк-горбунок 2D',
    'Райя и последний дракон 2D',
    'Том и Джерри 2D',
    'Рашн Юг 2D',
    'Пара из будущего 2D'
]

var scedule = {
    'Конёк-горбунок 2D': [['10:00', 'Конёк-горбунок 2D', 220, 0]],
    'Райя и последний дракон 2D': [
        ['12:20', 'Райя и последний дракон 2D', 260, 1],
        ['16:50', 'Райя и последний дракон 2D', 340, 3],
        ['23:40', 'Райя и последний дракон 2D', 330, 6]
    ],
    'Том и Джерри 2D': [['14:40', 'Том и Джерри 2D', 300, 2]],
    'Рашн Юг 2D': [['19:10', 'Рашн Юг 2D', 370, 4]],
    'Пара из будущего 2D': [['21:30', 'Пара из будущего 2D', 370, 5]]
}

let preparedPSscedule = { "day0": { "titles": ["Райя и последний дракон 2D", "Конёк-горбунок 2D", "Том и Джерри 2D", "Пара из будущего 2D", "Рашн Юг 2D"], "seansScedule": { "Райя и последний дракон 2D": [["10:00", "Райя и последний дракон  2D", 220, 0], ["14:35", "Райя и последний дракон  2D", 300, 2]], "Конёк-горбунок 2D": [["12:15", "Конёк-горбунок  2D", 260, 1]], "Том и Джерри 2D": [["16:50", "Том и Джерри  2D", 340, 3]], "Пара из будущего 2D": [["18:55", "Пара из будущего  2D", 370, 4], ["23:30", "Пара из будущего  2D", 280, 6]], "Рашн Юг 2D": [["21:10", "Рашн Юг  2D", 370, 5]] } }, "day1": { "titles": ["Райя и последний дракон 2D", "Конёк-горбунок 2D", "Рашн Юг 2D", "Пара из будущего 2D"], "seansScedule": { "Рашн Юг 2D": [["12:00", "Рашн Юг  2D", 200, 0]], "Райя и последний дракон 2D": [["14:20", "Райя и последний дракон  2D", 240, 1], ["20:50", "Райя и последний дракон  2D", 320, 4]], "Конёк-горбунок 2D": [["16:25", "Конёк-горбунок  2D", 280, 2]], "Пара из будущего 2D": [["18:35", "Пара из будущего  2D", 320, 3], ["23:00", "Пара из будущего  2D", 280, 5]] } }, "day2": { "titles": ["Райя и последний дракон 2D", "Конёк-горбунок 2D", "Пара из будущего 2D", "Рашн Юг 2D"], "seansScedule": { "Пара из будущего 2D": [["12:10", "Пара из будущего  2D", 200, 0], ["20:50", "Пара из будущего  2D", 320, 4]], "Райя и последний дракон 2D": [["14:20", "Райя и последний дракон  2D", 240, 1], ["18:40", "Райя и последний дракон  2D", 320, 3]], "Конёк-горбунок 2D": [["16:30", "Конёк-горбунок  2D", 280, 2]], "Рашн Юг 2D": [["23:00", "Рашн Юг  2D", 280, 5]] } } }


var makeSceduleItem = function (titleLayer, timeLayerSet, priceLayerSet, filmIndex) {
    var filmTitle = titlesArr[filmIndex]
    var filmSceduleItem = scedule[filmTitle]

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
        var seansIndex = filmSceduleItem[j][3]

        timeLayerSet.layers[seansIndex].visible = true
        priceLayerSet.layers[seansIndex].visible = true

        timeLayerSet.layers[seansIndex].textItem.contents = filmSceduleItem[j][0]
        priceLayerSet.layers[seansIndex].textItem.contents = filmSceduleItem[j][2] + 'р.'
    }
}

for (var i = 0; i < titlesArr.length; i++) {
    // выбираем папку фильма
    var filmSet = app.activeDocument.layerSets.getByName('film_' + i)
    // создаем переменные для заголовка и папок с временем и ценой   
    var titleLayer = filmSet.layers.getByName('title')
    var timeLayerSet = filmSet.layerSets.getByName('time')
    var priceLayerSet = filmSet.layerSets.getByName('price')
    makeSceduleItem(titleLayer, timeLayerSet, priceLayerSet, filmIndex = i)
}