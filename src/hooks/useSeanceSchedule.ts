import { useCallback, useEffect, useState } from 'react';

type DateKeysT = 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';

type ScheduleDataT = Record<
  DateKeysT,
  Array<[string, string, string, string]>
>;

type DatesArrT = Array<[string, string, string]>;

type SeanceDataT = {
  datesArr: DatesArrT;
  schedule: ScheduleDataT;
};

type UseSeanceScheduleResult = {
  activeScheduleItemKey: DateKeysT | '';
  changeScheduleItem: (key: DateKeysT) => void;
  datesArr: DatesArrT;
  error: string | null;
  isLoading: boolean;
  schedule: ScheduleDataT | null;
};

export function useSeanceSchedule(): UseSeanceScheduleResult {
  const [data, setData] = useState<SeanceDataT | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeScheduleItemKey, setActiveScheduleItemKey] = useState<
    DateKeysT | ''
  >('');

  // Fetch schedule from server
  useEffect(() => {
    const controller = new AbortController();

    fetch(`/schedule.json`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json: SeanceDataT) => {
        setData(json);
        const date = new Date();
        const dayNum = date.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;
        const todayKey = `day${dayNum}` as DateKeysT;
        setActiveScheduleItemKey(todayKey);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const changeScheduleItem = useCallback((key: DateKeysT) => {
    setActiveScheduleItemKey(key);
  }, []);

  return {
    activeScheduleItemKey,
    changeScheduleItem,
    datesArr: data?.datesArr ?? [],
    error,
    isLoading,
    schedule: data?.schedule ?? null,
  };
}
