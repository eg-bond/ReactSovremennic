import fs from 'fs';
import xlsx from 'xlsx';
import { filmsArray } from '@/REDUX/filmsArray';
import { PRE_SHOW_SERVICE_SHORT } from '@/utils/constants';

type dataT = Array<{
  cost: string;
  day: 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';
  filmTitle: 'string';
  time: 'string';
}>;

// retrieve data from excel file
const workBook = xlsx.readFile('ExternalScripts/Excel/macros.ods');
const ws = workBook.Sheets['Лист2'];
const data = xlsx.utils.sheet_to_json(ws) as dataT;

const schedule = dataToObj(data);
const finalSchedule = finalizeScedule(schedule);

const datesArr: Array<[string, string, string]> = [
  ['day4', 'Четверг', '2 июля'],
  ['day5', 'Пятница', '3 июля'],
  ['day6', 'Суббота', '4 июля'],
  ['day0', 'Воскресенье', '5 июля'],
  ['day1', 'Понедельник', '6 июля'],
  ['day2', 'Вторник', '7 июля'],
  ['day3', 'Среда', '8 июля'],
];

// Write final data to public/schedule.json file
fs.writeFileSync(
  'public/schedule.json',
  JSON.stringify({ datesArr, schedule: finalSchedule }, null, 2),
);

// ------------------------------------------------------------------------
function dataToObj(data: dataT) {
  const schedule = {} as {
    [Property in dataT[0]['day']]: Array<[string, string, number]>
  };

  for (let i = 0; i < 7; i++) {
    const currentKey = `day${i}` as `day${0 | 1 | 2 | 3 | 4 | 5 | 6}`;
    const dayArr = data.filter(item => item.day === currentKey);
    schedule[currentKey] = dayArr.map(item => [
      item.time,
      item.filmTitle,
      item.cost + '₽',
    ]);
  }

  return schedule;
}

// Replace titles with ones from filmsArray and add age to final schedule
function finalizeScedule(schedule: ReturnType<typeof dataToObj>) {
  const actualTitleAndAge = findTitleAndAge();

  const finalSchedule = {} as {
    [Property in dataT[0]['day']]: Array<
      [string, string, string, number | string]
    >
  };
  // loop through all days
  Object.keys(schedule).forEach(
    // @ts-expect-error: i don't know
    (key: dataT[0]['day']) => {
      // map through all seance in a day an add actual title and age
      const updatedDay: (typeof finalSchedule)['day0'] = schedule[key].map(
        (seance) => {
          const shortTitle = findFirstWordInTitle(seance[1]);

          if (actualTitleAndAge[shortTitle]) {
            return [
              seance[0],
              actualTitleAndAge[shortTitle][0],
              actualTitleAndAge[shortTitle][1],
              seance[2],
            ];
          } else {
            return ['There', 'is', 'no', 'movie'];
          }
        },
      );

      finalSchedule[key] = updatedDay;
    },
  );

  return finalSchedule;
}

// retrieve title and age of all items in filmsArray
function findTitleAndAge() {
  const actualTitleAndAge = {} as {
    [index: string]: [string, string];
  };

  filmsArray.forEach((filmItem) => {
    const key = findFirstWordInTitle(filmItem.title);

    const title = filmItem.pirate
      ? `${filmItem.title} 2D ${PRE_SHOW_SERVICE_SHORT} `
      : filmItem.title + ' 2D';
    actualTitleAndAge[key] = [title, filmItem.age];
  });

  return actualTitleAndAge;
}

export function findFirstWordInTitle(title: string) {
  const cleaned = title.replace(/[\.:!,*]/gi, '').toLowerCase();
  const result = cleaned.slice(0, Math.min(6, cleaned.length)).trim();
  return result;
}
