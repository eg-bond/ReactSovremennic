import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datesArr: [
    ['day1', 'Понедельник', '8 мая'],
    ['day2', 'Вторник', '9 мая'],
    ['day3', 'Среда', '10 мая'],
    ['day4', 'Четверг', '11 мая'],
    ['day5', 'Пятница', '12 мая'],
    ['day6', 'Суббота', '13 мая'],
    ['day0', 'Воскресенье', '14 мая'],
  ],
  activeScheduleItemKey: '',
  buttonTitle: '',
}

const seanceSlice = createSlice({
  name: 'seance',
  initialState,
  reducers: {
    setTodayScheduleItem(state) {
      const date = new Date()
      const key = 'day' + date.getDay()
      const dateItem = state.datesArr.find(item => item[0] === key)

      state.activeScheduleItemKey = key
      state.buttonTitle = dateItem[1] + ' ' + dateItem[2]
    },
    changeScheduleItem: {
      reducer(state, action) {
        const { key, title } = action.payload
        state.activeScheduleItemKey = key
        state.buttonTitle = title
      },
    },
  },
})

export const { setTodayScheduleItem, changeScheduleItem } = seanceSlice.actions

export default seanceSlice.reducer
