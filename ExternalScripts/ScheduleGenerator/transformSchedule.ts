import type { ScheduleData } from './scheduleGenerator';

export function transformScheduleData(
  rawSchedule: Record<string, unknown[][]>,
): ScheduleData {
  const result: ScheduleData = {};

  for (const [dayKey, seances] of Object.entries(rawSchedule)) {
    const titles: string[] = [];
    const seansScedule: Record<string, [string, string, string, string, number][]> = {};

    // Group seances by film title
    (seances as Array<[string, string, string, string]>).forEach(([time, title, age, price]) => {
      if (!titles.includes(title)) {
        titles.push(title);
      }

      if (!seansScedule[title]) {
        seansScedule[title] = [];
      }

      seansScedule[title].push([time, title, age, price, 0]);
    });

    result[dayKey] = {
      titles,
      seansScedule,
    };
  }

  return result;
}
