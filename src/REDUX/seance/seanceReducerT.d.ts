interface SeanceStateT {
  activeScheduleItemKey: DateKeysT | '';
  datesArr: Array<[DateKeysT, string, string]>;
}

type DateKeysT = 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';

type getDayT = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type { SeanceStateT, DateKeysT, getDayT };
