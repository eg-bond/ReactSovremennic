import { filmsArray } from '@/REDUX/filmsArray';
import { ScheduleImageGeneratorBatch } from './ScheduleImageGeneratorBatch';
import scheduleData from '../../../ExternalScripts/PhotoShopScedule/psSchedule.json';

const createFilmMapping = () => {
  return filmsArray.reduce((acc, film) => {
    acc[`${film.title} 2D`] = `/Images/description/${film.link}_D.webp`;
    return acc;
  }, {} as Record<string, string>);
};

const createAgeRatingMapping = () => {
  return filmsArray.reduce((acc, film) => {
    acc[`${film.title} 2D`] = film.age;
    return acc;
  }, {} as Record<string, string>);
};

export const ScheduleGeneratorExample = () => {
  const filmMapping = createFilmMapping();
  const ageRatingMapping = createAgeRatingMapping();

  return (
    <div style={{ gridColumn: '1/4' }}>
      <h1>Генератор изображений расписания</h1>
      <ScheduleImageGeneratorBatch
        ageRatingMapping={ageRatingMapping}
        filmMapping={filmMapping}
        scheduleData={scheduleData}
      />
    </div>
  );
};
