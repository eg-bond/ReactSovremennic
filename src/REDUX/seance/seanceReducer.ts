import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '26 февраля'],
    ['day2', 'Вторник', '27 февраля'],
    ['day3', 'Среда', '28 февраля'],
    ['day4', 'Четверг', '29 февраля'],
    ['day5', 'Пятница', '1 марта'],
    ['day6', 'Суббота', '2 марта'],
    ['day0', 'Воскресенье', '3 марта'],
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
