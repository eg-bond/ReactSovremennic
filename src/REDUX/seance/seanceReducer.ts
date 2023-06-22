import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

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
