import { filmsArray } from '@/data/films';
import { transformScheduleData } from './transformSchedule';
export type { ScheduleData } from './transformSchedule';

// Создание маппинга постеров фильмов
export interface FilmMapping {
  [title: string]: string;
}

const createFilmMapping = (): FilmMapping => {
  return filmsArray.reduce(
    (acc, film) => {
      acc[`${film.title} 2D`] = `/Images/description/${film.link}.webp`;
      return acc;
    },
    {} as FilmMapping,
  );
};

// Создание маппинга возрастных ограничений
export interface AgeRatingMapping {
  [title: string]: string;
}

const createAgeRatingMapping = (): AgeRatingMapping => {
  return filmsArray.reduce(
    (acc, film) => {
      acc[`${film.title} 2D`] = film.age;
      return acc;
    },
    {} as AgeRatingMapping,
  );
};

// Создание маппинга пиратских фильмов
export interface PirateMapping {
  [title: string]: boolean;
}

const createPirateMapping = (): PirateMapping => {
  return filmsArray.reduce(
    (acc, film) => {
      acc[`${film.title} 2D`] = film.pirate;
      return acc;
    },
    {} as PirateMapping,
  );
};

export const filmMapping = createFilmMapping();
export const ageRatingMapping = createAgeRatingMapping();
export const pirateMapping = createPirateMapping();

/**
 * Build a dayKey → formatted date name mapping from datesArr.
 * Example: { day0: "Воскресенье 5 июля", day1: "Понедельник 6 июля", ... }
 */
export function buildDayKeyToDateName(
  datesArr: [string, string, string][],
): Record<string, string> {
  return datesArr.reduce(
    (acc, [dayKey, dayName, dateStr]) => {
      acc[dayKey] = `${dayName} ${dateStr}`;
      return acc;
    },
    {} as Record<string, string>,
  );
}

/**
 * Fetch schedule.json and return the parsed data along with derived mappings.
 */
export async function fetchScheduleData(): Promise<{
  dayKeyToDateName: Record<string, string>;
  scheduleData: ReturnType<typeof transformScheduleData>;
}> {
  const response = await fetch('/schedule.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch schedule.json: ${response.status}`);
  }
  const json = await response.json();
  const { datesArr, schedule } = json as {
    datesArr: [string, string, string][];
    schedule: Record<string, unknown[][]>;
  };

  return {
    scheduleData: transformScheduleData(schedule),
    dayKeyToDateName: buildDayKeyToDateName(datesArr),
  };
}
