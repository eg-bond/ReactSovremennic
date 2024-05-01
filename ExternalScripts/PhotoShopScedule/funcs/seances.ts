import schedule from '../../../src/Content/Seance/schedule'

type SeanceItemT = Array<string | number>

export type SeanceLibType = {
  [movieName: string]: Array<SeanceItemT>
}

/**
 * Adds order index to seance items of given day
 * @param key - key of the day in schedule
 * @returns array of seance items with order index: Array<[...seanceItem, i]]>
 */
export function indexSeances(key: keyof typeof schedule): Array<SeanceItemT> {
  return schedule[key].map((item: SeanceItemT, i: number) => [...item, i])
}

/**
 * Creates seance library from given array of seance items
 * @param arr - array of seance items
 * @returns seance library of type: {movieName: Array<SeanceItemT>}
 */
export function makeSeancesLibFrom(arr: Array<SeanceItemT>): SeanceLibType {
  let result = {} as SeanceLibType

  arr.forEach((item: SeanceItemT) => {
    if (result[item[1]]) {
      result[item[1]].push(item)
    } else {
      result[item[1]] = [item]
    }
  })

  return result
}
