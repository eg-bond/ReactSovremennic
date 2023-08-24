import type { SeanceStateT } from '../seance/seanceReducerT.js'
import reducer, {
  setTodayScheduleItem_AC,
  changeScheduleItem_AC,
} from '../seance/seanceReducer.js'

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '19 июня'],
    ['day2', 'Вторник', '20 июня'],
    ['day3', 'Среда', '21 июня'],
    ['day4', 'Четверг', '22 июня'],
    ['day5', 'Пятница', '23 июня'],
    ['day6', 'Суббота', '24 июня'],
    ['day0', 'Воскресенье', '25 июня'],
  ],
  activeScheduleItemKey: '',
}

describe('seanceReducer tests:', () => {
  describe('setTodayScheduleItem', () => {
    const newState = reducer(initialState, setTodayScheduleItem_AC())
    const date = new Date()
    const day = date.getDay()
    const index = initialState.datesArr.findIndex(
      item => item[0] === 'day' + day
    )

    it('activeScheduleItemKey is not empty', () => {
      expect(newState.activeScheduleItemKey).not.toBe('')
    })

    it('activeScheduleItemKey is set correctly', () => {
      expect(newState.activeScheduleItemKey).toBe(newState.datesArr[index][0])
    })
  })

  describe('changeScheduleItem', () => {
    const actionKey = 'day3'
    const newState = reducer(
      initialState,
      changeScheduleItem_AC({ key: actionKey })
    )

    it('activeScheduleItemKey is equal to key from action', () => {
      expect(newState.activeScheduleItemKey).toBe(actionKey)
    })
  })
})
