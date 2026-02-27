import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScheduleImageGeneratorBatch } from './ScheduleImageGeneratorBatch';
import type { FilmMapping, AgeRatingMapping } from './scheduleGenerator';
import scheduleData from '../PhotoShopScedule/psSchedule.json';

// Данные фильмов
const filmsArray = [
  {
    title: 'Зверополис 2',
    age: '6+',
    link: 'zootopia',
  },
  {
    title: 'Аватар: Пламя и пепел',
    age: '16+',
    link: 'avatar_3',
  },
  {
    title: 'Сказка о царе Салтане',
    age: '6+',
    link: 'saltan',
  },
  {
    title: 'Красавица',
    age: '12+',
    link: 'beauty',
  },
  {
    title: 'Король и Шут. Навсегда',
    age: '18+',
    link: 'kish_forever',
  },
  {
    title: 'Уволить Жору',
    age: '12+',
    link: 'fire_zhora',
  },
];

// Создание маппинга постеров фильмов
const createFilmMapping = (): FilmMapping => {
  return filmsArray.reduce(
    (acc, film) => {
      acc[`${film.title} 2D`] = `/Images/description/${film.link}_D.webp`;
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

const filmMapping = createFilmMapping();
const ageRatingMapping = createAgeRatingMapping();

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ScheduleImageGeneratorBatch
        scheduleData={scheduleData}
        filmMapping={filmMapping}
        ageRatingMapping={ageRatingMapping}
      />
    </React.StrictMode>,
  );
}
