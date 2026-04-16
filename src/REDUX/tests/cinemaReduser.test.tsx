import { filmsArray } from '../filmsArray';
import reducer, {
  createFilmsObject_AC,
  createFilmsTodayArr_AC,
} from '../cinema/cinemaReducer';
import type { CinemaStateT } from '../cinema/cinemaReducerT';

const testLinks = ['avatar_3', 'wultering_heights', 'marsupilami', 'dr_gaf'];

const initialState: CinemaStateT = {
  films: filmsArray,
  filmsObject: {},
  filmsToday: [],
  filmsTodayLinks: [],
};

describe('cinemaReducer tests:', () => {
  describe('createFilmsTodayArr', () => {
    const newState = reducer(initialState, createFilmsTodayArr_AC(testLinks));

    it('array has correct slides amount', () => {
      expect(newState.filmsToday).toHaveLength(testLinks.length);
    });
    it('films match the provided links', () => {
      const resultLinks = newState.filmsToday.map(f => f.link);
      expect(resultLinks).toEqual(expect.arrayContaining(testLinks));
    });
  });

  describe('createFilmsObject', () => {
    const newState = reducer(initialState, createFilmsObject_AC());

    it('filmsObject is an Object', () => {
      expect(newState.filmsObject).toBeInstanceOf(Object);
      expect(newState.filmsObject).not.toBeInstanceOf(Array);
      expect(newState.filmsObject).not.toBeFalsy();
    });

    it('filmsObject has correct amount of items', () => {
      const filmsObjectKeys = Object.keys(newState.filmsObject);
      expect(filmsObjectKeys).toHaveLength(filmsArray.length);
    });
  });
});
