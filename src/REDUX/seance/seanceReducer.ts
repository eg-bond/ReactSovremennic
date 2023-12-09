import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

const initialState: SeanceStateT = {
  datesArr: [
    ['day4', 'Четверг', '7 декабря'],
    ['day5', 'Пятница', '8 декабря'],
    ['day6', 'Суббота', '9 декабря'],
    ['day0', 'Воскресенье', '10 декабря'],
    ['day1', 'Понедельник', '11 декабря'],
    ['day2', 'Вторник', '12 декабря'],
    ['day3', 'Среда', '13 декабря'],
  ],
  activeScheduleItemKey: '',
}

const seanceSlice = createSlice({
  name: 'seance',
  initialState,
  reducers: {
    setTodayScheduleItem(state) {
      const date = new Date()
      const dayNum: getDayT = date.getDay() as getDayT
      const key = ('day' + dayNum) as `${'day'}${typeof dayNum}`

      state.activeScheduleItemKey = key
    },
    changeScheduleItem(
      state,
      action: PayloadAction<{
        key: DateKeysT
      }>
    ) {
      const { key } = action.payload
      state.activeScheduleItemKey = key
    },
  },
})

export const {
  setTodayScheduleItem: setTodayScheduleItem_AC,
  changeScheduleItem: changeScheduleItem_AC,
} = seanceSlice.actions

export default seanceSlice.reducer
