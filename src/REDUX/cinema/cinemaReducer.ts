import { createSlice } from '@reduxjs/toolkit';
import { filmsArray } from '../filmsArray';
import type { CinemaStateT } from './cinemaReducerT';
import type { PayloadAction } from '@reduxjs/toolkit';

export const LINKS = ['michael', 'mario_2', 'prada_2', 'mario', 'send_help'];

const initialState: CinemaStateT = {
  films: filmsArray,
  filmsObject: {},
  filmsToday: [],
  filmsTodayLinks: [],
};

const cinemaSlice = createSlice({
  name: 'cinema',
  initialState,
  reducers: {
    createFilmsTodayArr(state, action: PayloadAction<string[]>) {
      state.filmsTodayLinks = action.payload;
      state.filmsToday = state.films.filter(film =>
        action.payload.includes(film.link),
      );
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
