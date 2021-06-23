import sinemaReduser, {
  createFilmsTodayArr,
  createFilmsObject,
} from '../cinemaReduser.js'
import { filmsArray } from '../filmsArray.js'

let todaySlidesAmount = 4

let initialState = {
  films: filmsArray,
  filmsObject: null,
  filmsToday: [],
  filmsTodaySlides: todaySlidesAmount,
}

describe('cinemaReduser tests:', () => {
  describe('CREATE_FILMS_TODAY_ARR', () => {
    let newState = sinemaReduser(initialState, createFilmsTodayArr())

    it('array has correct slides amount', () => {
      expect(newState.filmsToday).toHaveLength(todaySlidesAmount)
    })
    it('array is instance of Array', () => {
      expect(newState.filmsToday).toBeInstanceOf(Array)
    })
  })

  describe('CREATE_FILMS_OBJECT', () => {
    let newState = sinemaReduser(initialState, createFilmsObject())

    it('filmsObject is an Object', () => {
      expect(newState.filmsObject).toBeInstanceOf(Object)
      expect(newState.filmsObject).not.toBeInstanceOf(Array)
      expect(newState.filmsObject).not.toBeFalsy()
    })
    it('filmsObject has correct items amount of items', () => {
      let filmsObjectKeys = Object.keys(newState.filmsObject)

      expect(filmsObjectKeys).toHaveLength(filmsArray.length)
    })
  })
})
