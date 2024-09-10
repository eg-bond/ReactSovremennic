import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '9 сентября'],
    ['day2', 'Вторник', '10 сентября'],
    ['day3', 'Среда', '11 сентября'],
    ['day4', 'Четверг', '12 сентября'],
    ['day5', 'Пятница', '13 сентября'],
    ['day6', 'Суббота', '14 сентября'],
    ['day0', 'Воскресенье', '15 сентября'],
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
