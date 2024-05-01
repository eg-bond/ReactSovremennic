import scedule from '../../src/Content/Seance/schedule'
import fs from 'fs'
import {
  extractTitlesWithAges,
  makeUniqueTitlesArr,
  sortTitles,
} from './funcs/titles'

type SeanceLibType = { [key: string]: (string | number)[][] }

type PsScheduleType = {
  [key: string]: { titles: string[]; seansScedule: SeanceLibType }
}

makePsSchedule()

function makePsSchedule() {
  const psSchedule = {} as PsScheduleType

  Object.keys(scedule).forEach((key: string): void => {
    // Titles
    const titlesAndAges = extractTitlesWithAges(key as keyof typeof scedule)
    const uniqueTitlesArray = makeUniqueTitlesArr(titlesAndAges)
    const sortedTitles = sortTitles(uniqueTitlesArray)
    // Schedule
    const indexedSceduleItem = indexSeances(key as keyof typeof scedule)
    const seanceLib = makeSeancesLibFrom(indexedSceduleItem)

    psSchedule[key] = { titles: sortedTitles, seansScedule: seanceLib }
  })

  // fs.writeFileSync(
  //   'ExternalScripts/PhotoShopScedule/psScheduleNew.json',
  //   JSON.stringify(psSchedule)
  // )
}

function indexSeances(key: keyof typeof scedule): (string | number)[][] {
  return scedule[key].map((item: (string | number)[], i: number) => [
    ...item,
    i,
  ])
}

function makeSeancesLibFrom(arr: (string | number)[][]): SeanceLibType {
  let result = {} as SeanceLibType
  arr.forEach((item: (string | number)[]) => {
    if (result[item[1]]) {
      result[item[1]].push(item)
    } else {
      result[item[1]] = [item]
    }
  })
  return result
}
