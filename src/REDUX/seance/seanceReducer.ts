import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

const initialState: SeanceStateT = {
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
      //@ts-ignore
      const dayNum: getDayT = date.getDay()
      const key = ('day' + dayNum) as `${'day'}${typeof dayNum}`
      const dateItem =
        state.datesArr.find(item => item[0] === key) || state.datesArr[0]

      state.activeScheduleItemKey = key

      state.buttonTitle = dateItem[1] + ' ' + dateItem[2]
    },
    changeScheduleItem(
      state,
      action: PayloadAction<{
        key: DateKeysT
        title: string
      }>
    ) {
      const { key, title } = action.payload
      state.activeScheduleItemKey = key
      state.buttonTitle = title
    },
  },
})

export const {
  setTodayScheduleItem: setTodayScheduleItem_AC,
  changeScheduleItem: changeScheduleItem_AC,
} = seanceSlice.actions

export default seanceSlice.reducer
