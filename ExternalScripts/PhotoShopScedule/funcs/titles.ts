import schedule from '../../../src/Content/Seance/schedule';

type TitleAgeTuple = [title: string, age: number];

/**
 * Extracts titles and ages of given day ('key') from schedule
 * @param key - key of the day in schedule
 * @returns Array of type: Array<[title: string, age: number]>
 */
export function extractTitlesWithAges(
  key: keyof typeof schedule,
): Array<TitleAgeTuple> {
  return schedule[key].map((item: Array<string | number>): TitleAgeTuple => {
    const title = item[1] as string;
    const age = AgeToNumber(item[2] as string);
    return [title, age];
  });
}

/**
 * Forms array of unique titles of given array
 * @param arr Array of type: Array<[title: string, age: number]>
 * @returns Array of type: Array<[uniqueTitle: string, age: number]>
 */
export function makeUniqueTitlesArr(
  arr: Array<TitleAgeTuple>,
): Array<TitleAgeTuple> {
  const lib = makeLibFrom(arr);

  const result = [] as Array<TitleAgeTuple>;

  for (const key in lib) {
    result.push([key, lib[key]]);
  }

  return result;
}

/**
 * Sorts titles of given array by age from lowest to biggest.
 * If ages are equal, sorts titles alphabetically.
 * @param titles - Array of type: Array<[title: string, age: number]>
 * @returns Array of type: Array<title: string>
 */
export function sortTitles(titles: Array<TitleAgeTuple>): Array<string> {
  const sortedArray = titles.sort(function (a, b) {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
  });
  return sortedArray.map(item => item[0]);
}

type LibType = {
  [title: string]: number;
};
/**
 * Forms library of unique titles of given array
 * @param arr - Array of the type [title: string, age: number]
 * @returns Object type {title: age}
 */
function makeLibFrom(arr: Array<TitleAgeTuple>): LibType {
  const result = {} as LibType;
  arr.forEach((item: [string, number]) => {
    result[item[0]] = item[1];
  });
  return result;
}

/**
 * Converts age string to number
 * @param age - age string of format: '18+'
 * @returns number
 */
function AgeToNumber(age: string): number {
  return parseInt(age.replace('+', ''));
}
