import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

export const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '11 мая'],
    ['day2', 'Вторник', '12 мая'],
    ['day3', 'Среда', '13 мая'],
    ['day4', 'Четверг', '14 мая'],
    ['day5', 'Пятница', '15 мая'],
    ['day6', 'Суббота', '16 мая'],
    ['day0', 'Воскресенье', '17 мая'],
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
