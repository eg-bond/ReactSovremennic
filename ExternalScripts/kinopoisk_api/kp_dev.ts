import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import kpDev from '@openmoviedb/kinopoiskdev_client';
import { ids } from './movieIds';
import { config } from './config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const kp = new kpDev.KinopoiskDev(config.KP_DEV_TOKEN);
logAllMovies(ids);

// -----------------------------------------------------------

// return necessary data in a form we need
async function getMovieData(id: number) {
  const { data } = await kp.movie.getById(id);

  const year = data?.year;

  const countries = data?.countries?.map(country => country.name).join(', ');

  const title = data?.name;

  const kind = capitalizeFirstLetter(
    data?.genres?.map(genre => genre.name).join(', '),
  );

  const director = data?.persons
    ?.filter(person => person.enProfession === 'director')
    .map(person => person.name)
    .join(', ');

  const mLength = data?.movieLength;
  const duration = getDuration(mLength);

  const age = data?.ageRating ? data.ageRating.toString() + '+' : '-';

  const actors = data?.persons
    ?.filter(person => person.enProfession === 'actor')
    .map(person => person.name)
    .join(', ');

  const description = data?.description;

  const finalData = {
    year,
    countries,
    title,
    beginDate: 'с',
    endDate: '',
    pirate: false,
    kind,
    director,
    duration,
    age,
    actors,
    description,
    playerCode: '',
    link: '',
  };

  return finalData;
}

// log all desired movies data into console
function logAllMovies(ids: number[]): void {
  const promises = ids.map(id => getMovieData(id));

  Promise.all(promises).then((movies) => {
    console.log(movies);
    appendToFilmsArray(movies);
  });
}

function appendToFilmsArray(movies: Awaited<ReturnType<typeof getMovieData>>[]): void {
  const filePath = path.resolve(__dirname, '../../src/REDUX/filmsArray.ts');

  // Форматируем данные как TypeScript объекты
  const formattedMovies = movies
    .map(movie =>
      `  ${JSON.stringify(movie, null, 2).split('\n').join('\n  ')}`,
    )
    .join(',\n\n');

  // Читаем текущий файл
  let content = fs.readFileSync(filePath, 'utf-8');

  // Вставляем перед закрывающей скобкой массива
  content = content.replace(/\];$/m, `\n\n${formattedMovies}\n];`);

  // Пишем обратно
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('✅ Данные добавлены в filmsArray.ts');
}

// ------------------------------------------------------
function capitalizeFirstLetter(string: string | undefined | null) {
  if (!string) return '-';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDuration(minutes: number | undefined) {
  if (!minutes) return '-';
  return `${minutes?.toString()} мин. / ${minutesToHours(minutes)}`;
}

function minutesToHours(minutes: number | undefined) {
  if (!minutes) return '-';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `0${hours}:${remainingMinutes}`;
}
