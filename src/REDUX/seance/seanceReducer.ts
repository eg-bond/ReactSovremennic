import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '1 июля'],
    ['day2', 'Вторник', '2 июля'],
    ['day3', 'Среда', '3 июля'],
    ['day4', 'Четверг', '4 июля'],
    ['day5', 'Пятница', '5 июля'],
    ['day6', 'Суббота', '6 июля'],
    ['day0', 'Воскресенье', '7 июля'],
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
