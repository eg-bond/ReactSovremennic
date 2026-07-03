import { useEffect, useState } from 'react';
import type { DateKeysT } from '@/REDUX/seance/seanceReducerT';

type ScheduleDataT = Record<
  DateKeysT,
  Array<[string, string, string, string]>
>;

type UseScheduleResult = {
  error: string | null;
  isLoading: boolean;
  schedule: ScheduleDataT | null;
};

export function useSchedule(): UseScheduleResult {
  const [schedule, setSchedule] = useState<ScheduleDataT | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    // const cacheBuster = `?t=${Date.now()}`;

    fetch(`/schedule.json`)
    // fetch(`/api/schedule.json${cacheBuster}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setSchedule(data as ScheduleDataT);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { schedule, isLoading, error };
}
