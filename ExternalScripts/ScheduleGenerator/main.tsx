import React from 'react';
import ReactDOM from 'react-dom/client';
import { filmsArray } from '@/REDUX/filmsArray';
import { schedule } from '@/Content/Seance/schedule';
import { transformScheduleData } from './transformSchedule';
import { ScheduleImageGeneratorBatch } from './ScheduleImageGeneratorBatch';
import type { FilmMapping, AgeRatingMapping, PirateMapping } from './scheduleGenerator';

// Создание маппинга постеров фильмов
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
const createPirateMapping = (): PirateMapping => {
  return filmsArray.reduce(
    (acc, film) => {
      acc[`${film.title} 2D`] = film.pirate;
      return acc;
    },
    {} as PirateMapping,
  );
};

const filmMapping = createFilmMapping();
const ageRatingMapping = createAgeRatingMapping();
const pirateMapping = createPirateMapping();
const scheduleData = transformScheduleData(schedule as Record<string, unknown[][]>);

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ScheduleImageGeneratorBatch
        ageRatingMapping={ageRatingMapping}
        filmMapping={filmMapping}
        pirateMapping={pirateMapping}
        scheduleData={scheduleData}
      />
    </React.StrictMode>,
  );
}
