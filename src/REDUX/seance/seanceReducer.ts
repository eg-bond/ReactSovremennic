import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

const initialState: SeanceStateT = {
  datesArr: [
    ['day4', 'Четверг', '31 июля'],
    ['day5', 'Пятница', '1 августа'],
    ['day6', 'Суббота', '2 августа'],
    ['day0', 'Воскресенье', '3 августа'],
    ['day1', 'Понедельник', '4 августа'],
    ['day2', 'Вторник', '5 августа'],
    ['day3', 'Среда', '6 августа'],
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
