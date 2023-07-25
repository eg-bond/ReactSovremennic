import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT'

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '24 июля'],
    ['day2', 'Вторник', '25 июля'],
    ['day3', 'Среда', '26 июля'],
    ['day4', 'Четверг', '27 июля'],
    ['day5', 'Пятница', '28 июля'],
    ['day6', 'Суббота', '29 июля'],
    ['day0', 'Воскресенье', '30 июля'],
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
