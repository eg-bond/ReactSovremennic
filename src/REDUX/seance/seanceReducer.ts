import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

const initialState: SeanceStateT = {
  datesArr: [
    ['day4', 'Четверг', '17 октября'],
    ['day5', 'Пятница', '18 октября'],
    ['day6', 'Суббота', '19 октября'],
    ['day0', 'Воскресенье', '20 октября'],
    ['day1', 'Понедельник', '21 октября'],
    ['day2', 'Вторник', '22 октября'],
    ['day3', 'Среда', '23 октября'],
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
