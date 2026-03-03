import { filmsArray } from '@/REDUX/filmsArray';
import { schedule } from '@/Content/Seance/schedule';
import { initialState } from '@/REDUX/seance/seanceReducer';
import { transformScheduleData } from './transformSchedule';

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

// Create a mapping from day keys to formatted date names (e.g., "Monday 2 of march")
export const dayKeyToDateName: Record<string, string> = initialState.datesArr.reduce(
  (acc, [dayKey, dayName, date]) => {
    // For each date entry, combine the day name and date into a readable format
    acc[dayKey] = `${dayName} ${date}`;
    return acc;
  },
  {} as Record<string, string>,
);

export const filmMapping = createFilmMapping();
export const ageRatingMapping = createAgeRatingMapping();
export const pirateMapping = createPirateMapping();
export const scheduleData = transformScheduleData(schedule as Record<string, unknown[][]>);
