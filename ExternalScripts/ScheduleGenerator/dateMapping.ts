import { initialState } from '../../src/REDUX/seance/seanceReducer';

export const dayKeyToDateName: Record<string, string> = initialState.datesArr.reduce(
  (acc, [dayKey, dayName, date]) => {
    acc[dayKey] = `${dayName} ${date}`;
    return acc;
  },
  {} as Record<string, string>,
);
