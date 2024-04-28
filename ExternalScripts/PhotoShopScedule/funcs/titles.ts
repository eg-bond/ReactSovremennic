import schedule from '../../../src/Content/Seance/schedule'

// form array of unique titles
export function extractTitlesAndAges(
  key: keyof typeof schedule
): [string, number][] {
  return scedule[key].map((item: (string | number)[]): [string, number] => [
    item[1] as string,
    AgeToNumber(item[2] as string),
  ])
}

export function makeLibFrom(arr: Array<[string, number]>): LibType {
  let result = {} as LibType
  arr.forEach((item: [string, number]) => {
    result[item[0]] = item[1]
  })
  return result
}

export function libToArray(lib: LibType): Array<[string, number]> {
  let result = [] as Array<[string, number]>
  for (let key in lib) {
    result.push([key, lib[key]])
  }
  return result
}

export function AgeToNumber(age: string): number {
  return parseInt(age.replace('+', ''))
}

export function sortTitles(titles: Array<[string, number]>): Array<string> {
  let sortedArray = titles.sort(function (a, b) {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    } else {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0)
    }
  })
  return sortedArray.map(item => item[0])
}

type LibType = {
  [key: string]: number
}
