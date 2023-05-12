const schedule: ScheduleT = {
  day0: [
    ['11:00', 'Яга и книга заклинаний 2D', '6+', 220],
    ['13:00', 'Кот в сапогах 2: Последнее желание 2D', '6+', 300],
    ['15:00', 'Вызов 2D', '6+', 350],
    ['18:15', 'Стражи Галактики. Часть 3 2D', '16+', 420],
    ['21:15', 'Стражи Галактики. Часть 3 2D', '16+', 370],
  ],
  day1: [
    ['10:00', 'Яга и книга заклинаний 2D', '6+', 220],
    ['12:00', 'Кот в сапогах 2: Последнее желание 2D', '6+', 300],
    ['14:00', 'Вызов 2D', '6+', 350],
    ['17:15', 'Достать ножи: Стеклянная луковица 2D', '16+', 370],
    ['19:50', 'Вызов 2D', '6+', 400],
    ['23:00', 'Улыбка 2D', '18+', 320],
  ],
  day2: [
    ['11:00', 'Яга и книга заклинаний 2D', '6+', 220],
    ['13:00', 'Кот в сапогах 2: Последнее желание 2D', '6+', 300],
    ['15:00', 'Вызов 2D', '6+', 350],
    ['18:15', 'Вызов 2D', '6+', 400],
    ['21:25', 'Достать ножи: Стеклянная луковица 2D', '16+', 300],
  ],
  day3: [
    ['13:15', 'Яга и книга заклинаний 2D', '6+', 220],
    ['15:10', 'Вызов 2D', '6+', 250],
    ['18:15', 'Джон Уик 4 2D', '18+', 300],
    ['21:25', 'Вызов 2D', '6+', 330],
  ],
  day4: [['12:45', 'Вызов 2D', '6+', 230]],
  day5: [
    ['12:30', 'Вызов 2D', '6+', 230],
    ['15:40', 'Кот в сапогах 2: Последнее желание 2D', '6+', 250],
    ['17:35', 'Яга и книга заклинаний 2D', '6+', 300],
    ['19:30', 'Вызов 2D', '6+', 400],
    ['22:40', 'Стражи Галактики. Часть 3 2D', '16+', 420],
  ],
  day6: [
    ['11:00', 'Яга и книга заклинаний 2D', '6+', 220],
    ['13:00', 'Вызов 2D', '6+', 330],
    ['16:15', 'Вызов 2D', '6+', 370],
    ['19:30', 'Стражи Галактики. Часть 3 2D', '16+', 420],
    ['22:30', 'Стражи Галактики. Часть 3 2D', '16+', 420],
  ],
}

export type ScheduleT = {
  [index: string]: Array<[string, string, string, number]>
}

export default schedule
