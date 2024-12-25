import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '23 декабря'],
    ['day2', 'Вторник', '24 декабря'],
    ['day3', 'Среда', '25 декабря'],
    ['day4', 'Четверг', '26 декабря'],
    ['day5', 'Пятница', '27 декабря'],
    ['day6', 'Суббота', '28 декабря'],
    ['day0', 'Воскресенье', '29 декабря'],
  ],
  activeScheduleItemKey: '',
};

const seanceSlice = createSlice({
  name: 'seance',
  initialState,
  reducers: {
    setTodayScheduleItem(state) {
      const date = new Date();
      const dayNum: getDayT = date.getDay() as getDayT;
      const key = ('day' + dayNum) as `${'day'}${typeof dayNum}`;

      state.activeScheduleItemKey = key;
    },
    changeScheduleItem(
      state,
      action: PayloadAction<{
        key: DateKeysT;
      }>
    ) {
      const { key } = action.payload;
      state.activeScheduleItemKey = key;
    },
  },
});

export const {
  setTodayScheduleItem: setTodayScheduleItem_AC,
  changeScheduleItem: changeScheduleItem_AC,
} = seanceSlice.actions;

export default seanceSlice.reducer;
