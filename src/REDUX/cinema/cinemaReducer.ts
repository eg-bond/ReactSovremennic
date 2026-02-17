import { createSlice } from '@reduxjs/toolkit';
import { filmsArray } from '../filmsArray';
import type { CinemaStateT } from './cinemaReducerT';

const initialState: CinemaStateT = {
  films: filmsArray,
  filmsObject: {},
  filmsToday: [],
  filmsTodayAmount: 7,
};

const cinemaSlice = createSlice({
  name: 'cinema',
  initialState,
  reducers: {
    createFilmsTodayArr(state) {
      for (let i = 0; i < state.filmsTodayAmount; i++) {
        state.filmsToday[i] = state.films[i];
      }
    },
    createFilmsObject(state) {
      state.films.forEach((film) => {
        state.filmsObject[film.link] = film;
      });
    },
  },
});

export const { createFilmsTodayArr: createFilmsTodayArr_AC, createFilmsObject: createFilmsObject_AC } = cinemaSlice.actions;

export default cinemaSlice.reducer;
