import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { DateKeysT, SeanceStateT, getDayT } from './seanceReducerT';

export const initialState: SeanceStateT = {
  datesArr: [
    ['day1', 'Понедельник', '30 марта'],
    ['day2', 'Вторник', '31 марта'],
    ['day3', 'Среда', '1 апреля'],
    ['day4', 'Четверг', '2 апреля'],
    ['day5', 'Пятница', '3 апреля'],
    ['day6', 'Суббота', '4 апреля'],
    ['day0', 'Воскресенье', '5 апреля'],
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
