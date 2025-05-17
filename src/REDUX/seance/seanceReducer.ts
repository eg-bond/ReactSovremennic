import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

const initialState: SeanceStateT = {
  datesArr: [
    ['day4', 'Четверг', '15 мая'],
    ['day5', 'Пятница', '16 мая'],
    ['day6', 'Суббота', '17 мая'],
    ['day0', 'Воскресенье', '18 мая'],
    ['day1', 'Понедельник', '19 мая'],
    ['day2', 'Вторник', '20 мая'],
    ['day3', 'Среда', '21 мая'],
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
