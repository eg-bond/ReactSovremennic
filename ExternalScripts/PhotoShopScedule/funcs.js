const scedule = {
  day0: [
    ['11:00', 'Приключения панды 2D', '6+', 280],
    ['12:55', 'Приключения панды 2D', '6+', 350],
    ['14:50', 'Летучий корабль 2D', '6+', 370],
    ['17:05', 'Сто лет тому вперёд 2D', '6+', 420],
    ['20:00', 'Блиндаж 2D', '16+', 420],
    ['22:25', 'Сто лет тому вперёд 2D', '6+', 420],
  ],
  day1: [
    ['11:00', 'Приключения панды 2D', '6+', 280],
    ['12:55', 'Приключения панды 2D', '6+', 350],
    ['14:50', 'Летучий корабль 2D', '6+', 370],
    ['17:05', 'Сто лет тому вперёд 2D', '6+', 420],
    ['20:05', 'Блиндаж 2D', '16+', 420],
    ['22:25', 'Сто лет тому вперёд 2D', '6+', 420],
  ],
  day2: [
    ['10:20', 'Приключения панды 2D', '6+', 250],
    ['12:15', 'Приключения панды 2D', '6+', 350],
    ['14:10', 'Сто лет тому вперёд 2D', '6+', 370],
    ['17:10', 'Блиндаж 2D', '16+', 420],
    ['19:30', 'Сто лет тому вперёд 2D', '6+', 420],
    ['22:30', 'Блиндаж 2D', '16+', 420],
  ],
  day3: [
    ['11:20', 'Приключения панды 2D', '6+', 280],
    ['13:15', 'Сто лет тому вперёд 2D', '6+', 350],
    ['16:15', 'Любви не бывает? 2D', '16+', 390],
    ['18:30', 'Сто лет тому вперёд 2D', '6+', 420],
    ['21:30', 'Блиндаж 2D', '16+', 350],
  ],
  day4: [
    ['14:00', 'Сто лет тому вперёд 2D', '6+', 250],
    ['16:45', 'Приключения панды 2D', '6+', 300],
    ['18:35', 'Сто лет тому вперёд 2D', '6+', 350],
    ['21:25', 'Блиндаж 2D', '16+', 350],
  ],
  day5: [
    ['12:30', 'Приключения панды 2D', '6+', 250],
    ['14:20', 'Блиндаж 2D', '16+', 250],
    ['16:35', 'Сто лет тому вперёд 2D', '6+', 300],
    ['19:20', 'Блиндаж 2D', '16+', 350],
    ['21:40', 'Сто лет тому вперёд 2D', '6+', 350],
  ],
  day6: [
    ['12:00', 'Приключения панды 2D', '6+', 250],
    ['13:50', 'Сто лет тому вперёд 2D', '6+', 270],
    ['16:40', 'Летучий корабль 2D', '6+', 320],
    ['18:50', 'Сто лет тому вперёд 2D', '6+', 420],
    ['22:00', 'Блиндаж 2D', '16+', 420],
  ],
}

function AgeToNumber(age) {
  return parseInt(age.replace('+', ''))
}

// console.log(typeof AgeToNumber('18+'))

function getUniqueTitlesAndAges() {
  const uniqueTitlesAndAges = Object.keys(scedule).reduce((acc, key) => {
    const titlesAndAges = extractTitlesAndAges(key)
    return [...acc, ...titlesAndAges]
  }, [])

  return uniqueTitlesAndAges
}

console.log(getUniqueTitlesAndAges())
