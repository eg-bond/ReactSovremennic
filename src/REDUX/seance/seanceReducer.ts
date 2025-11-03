import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '3 ноября'],
    ['day2', 'Вторник', '4 ноября'],
    ['day3', 'Среда', '5 ноября'],
    ['day4', 'Четверг', '6 ноября'],
    ['day5', 'Пятница', '7 ноября'],
    ['day6', 'Суббота', '8 ноября'],
    ['day0', 'Воскресенье', '9 ноября'],
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
