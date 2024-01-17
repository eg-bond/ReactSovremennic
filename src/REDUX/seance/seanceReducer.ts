import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '15 января'],
    ['day2', 'Вторник', '16 января'],
    ['day3', 'Среда', '17 января'],
    ['day4', 'Четверг', '18 января'],
    ['day5', 'Пятница', '19 января'],
    ['day6', 'Суббота', '20 января'],
    ['day0', 'Воскресенье', '21 января'],
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
