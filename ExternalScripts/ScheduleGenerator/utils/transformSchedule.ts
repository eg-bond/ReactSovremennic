export interface DaySchedule {
  seansScedule: {
    [filmTitle: string]: [string, string, string, string, number][];
  };
  titles: string[];
}

export interface ScheduleData {
  [dayKey: string]: DaySchedule;
}

/**
 * Transforms raw schedule data into a structured format for easier processing.
 * Groups movie seances by day and organizes them by film title.
 *
 * @param rawSchedule - Raw schedule data where keys are day identifiers
 * and values are arrays of seance data (schedule.ts)
 * @returns Structured schedule data with titles and organized seances for each day
 */
export function transformScheduleData(
  rawSchedule: Record<string, unknown[][]>,
): ScheduleData {
  const result: ScheduleData = {};

  // Process each day's schedule
  for (const [dayKey, seances] of Object.entries(rawSchedule)) {
    const titles: string[] = [];
    const seansScedule: Record<string, [string, string, string, string, number][]> = {};

    // Group seances by film title
    (seances as Array<[string, string, string, string]>)
      .forEach(([time, title, age, price]) => {
      // Add unique titles to the titles array
        if (!titles.includes(title)) {
          titles.push(title);
        }

        // Initialize array for this title if it doesn't exist
        if (!seansScedule[title]) {
          seansScedule[title] = [];
        }

        // Add seance data with zero value (possibly for booking count or status)
        seansScedule[title].push([time, title, age, price, 0]);
      });

    // Store processed data for this day
    result[dayKey] = {
      titles,
      seansScedule,
    };
  }

  return result;
}
