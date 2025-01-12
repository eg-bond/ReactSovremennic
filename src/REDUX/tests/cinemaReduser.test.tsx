import { filmsArray } from '../filmsArray';
import reducer, {
  createFilmsObject_AC,
  createFilmsTodayArr_AC,
} from '../cinema/cinemaReducer';
import type { CinemaStateT } from '../cinema/cinemaReducerT';

const initialState: CinemaStateT = {
  films: filmsArray,
  filmsObject: {},
  filmsToday: [],
  filmsTodayAmount: 5,
};

const ftLength = initialState.filmsTodayAmount;

describe('cinemaReducer tests:', () => {
  describe('createFilmsTodayArr', () => {
    const newState = reducer(initialState, createFilmsTodayArr_AC());

    it('array has correct slides amount', () => {
      expect(newState.filmsToday).toHaveLength(ftLength);
    });
    it('last movie is correct', () => {
      expect(
        newState.filmsToday[ftLength - 1] === filmsArray[ftLength - 1],
      ).toBe(true);
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
