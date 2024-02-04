import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

const initialState: SeanceStateT = {
  datesArr: [
    ['day4', 'Четверг', '1 февраля'],
    ['day5', 'Пятница', '2 февраля'],
    ['day6', 'Суббота', '3 февраля'],
    ['day0', 'Воскресенье', '4 февраля'],
    ['day1', 'Понедельник', '5 февраля'],
    ['day2', 'Вторник', '6 февраля'],
    ['day3', 'Среда', '7 февраля'],
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
