import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

const initialState: SeanceStateT = {
  datesArr: [
    ['day4', 'Четверг', '21 марта'],
    ['day5', 'Пятница', '22 марта'],
    ['day6', 'Суббота', '23 марта'],
    ['day0', 'Воскресенье', '24 марта'],
    ['day1', 'Понедельник', '25 марта'],
    ['day2', 'Вторник', '26 марта'],
    ['day3', 'Среда', '27 марта'],
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
