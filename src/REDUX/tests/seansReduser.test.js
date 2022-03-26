import seansReduser, {
  setTodaySceduleItem,
  changeSceduleItem,
  createActualDatesArr,
} from '../seansReduser.js'

let initialState = {
  datesArr: [
    ['day0', 'Воскресенье', '13 июня'],
    ['day1', 'Понедельник', '14 июня'],
    ['day2', 'Вторник', '15 июня'],
    ['day3', 'Среда', '16 июня'],
    ['day4', 'Четверг', '10 июня'],
    ['day5', 'Пятница', '11 июня'],
    ['day6', 'Суббота', '12 июня'],
  ],
  actualDatesArr: [],
  weekStartsFrom: 'monday',
  activeSceduleItemKey: '',
  buttonTitle: null,
}

describe('seansReduser tests:', () => {
  describe('SET_TODAY_SCEDULE_ITEM', () => {
    let newS = seansReduser(initialState, setTodaySceduleItem())

    it('activeSceduleItemKey is not empty', () => {
      expect(newS.activeSceduleItemKey).not.toBe('')
    })

    let date = new Date()
    let day = date.getDay()

    it('activeSceduleItemKey is set correctly', () => {
      expect(newS.activeSceduleItemKey).toBe(newS.datesArr[day][0])
    })
    it('buttonTitle is correct', () => {
      expect(newS.buttonTitle).toBe(
        newS.datesArr[day][1] + ' ' + newS.datesArr[day][2]
      )
    })
  })

  describe('CHANGE_SCEDULE_ITEM', () => {
    let activeKey = 'day3'
    let title = 'Воскресенье 25 декабря'
    let newS = seansReduser(initialState, changeSceduleItem(activeKey, title))

    it('activeSceduleItemKey is equal to key from action', () => {
      expect(newS.activeSceduleItemKey).toBe(activeKey)
    })
    it('buttonTitle is equal to title from action', () => {
      expect(newS.buttonTitle).toBe(title)
    })
  })

  describe('CREATE_ACTUAL_DATES_ARR', () => {
    let newS = seansReduser(initialState, createActualDatesArr())

    it('actualDatesArr sort correctly', () => {
      expect(newS.actualDatesArr[0]).toEqual(initialState.datesArr[1])
    })
  })
})
