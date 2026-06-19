import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

export const initialState: SeanceStateT = {
  datesArr: [
    ['day4', 'Четверг', '18 июня'],
    ['day5', 'Пятница', '19 июня'],
    ['day6', 'Суббота', '20 июня'],
    ['day0', 'Воскресенье', '21 июня'],
    ['day1', 'Понедельник', '22 июня'],
    ['day2', 'Вторник', '23 июня'],
    ['day3', 'Среда', '24 июня'],
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
      }>,
    ) {
      const { key } = action.payload;
      state.activeScheduleItemKey = key;
    },
  },
});

export const { setTodayScheduleItem: setTodayScheduleItem_AC, changeScheduleItem: changeScheduleItem_AC } = seanceSlice.actions;

export default seanceSlice.reducer;
