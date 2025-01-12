import fs from 'fs';
import schedule from '../../src/Content/Seance/schedule';
import {
  SeanceLibType,
  indexSeances,
  makeSeancesLibFrom,
} from './funcs/seances';
import {
  extractTitlesWithAges,
  makeUniqueTitlesArr,
  sortTitles,
} from './funcs/titles';

type PsScheduleType = {
  [key: string]: {
    seansScedule: SeanceLibType; titles: string[];
  };
};

function makePsSchedule() {
  const psSchedule = {} as PsScheduleType;

  Object.keys(schedule).forEach((key: string): void => {
    // Titles
    const titlesAndAges = extractTitlesWithAges(key as keyof typeof schedule);
    const uniqueTitlesArray = makeUniqueTitlesArr(titlesAndAges);
    const sortedTitles = sortTitles(uniqueTitlesArray);
    // Seances
    const indexedSceduleItem = indexSeances(key as keyof typeof schedule);
    const seanceLib = makeSeancesLibFrom(indexedSceduleItem);
    // Final psSchedule object
    psSchedule[key] = { titles: sortedTitles, seansScedule: seanceLib };
  });

  fs.writeFileSync(
    'ExternalScripts/PhotoShopScedule/psSchedule.json',
    JSON.stringify(psSchedule),
  );
}

makePsSchedule();
