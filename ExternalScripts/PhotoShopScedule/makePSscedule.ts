import schedule from '../../src/Content/Seance/schedule'
import fs from 'fs'
import {
  extractTitlesWithAges,
  makeUniqueTitlesArr,
  sortTitles,
} from './funcs/titles'
import {
  SeanceLibType,
  indexSeances,
  makeSeancesLibFrom,
} from './funcs/seances'

type PsScheduleType = {
  [key: string]: { titles: string[]; seansScedule: SeanceLibType }
}

function makePsSchedule() {
  const psSchedule = {} as PsScheduleType

  Object.keys(schedule).forEach((key: string): void => {
    // Titles
    const titlesAndAges = extractTitlesWithAges(key as keyof typeof schedule)
    const uniqueTitlesArray = makeUniqueTitlesArr(titlesAndAges)
    const sortedTitles = sortTitles(uniqueTitlesArray)
    // Seances
    const indexedSceduleItem = indexSeances(key as keyof typeof schedule)
    const seanceLib = makeSeancesLibFrom(indexedSceduleItem)
    // Final psSchedule object
    psSchedule[key] = { titles: sortedTitles, seansScedule: seanceLib }
  })

  fs.writeFileSync(
    'ExternalScripts/PhotoShopScedule/psSchedule.json',
    JSON.stringify(psSchedule)
  )
}

makePsSchedule()
