import { createSlice } from '@reduxjs/toolkit'
import { filmsArray } from '../filmsArray'
import type { CinemaStateT } from './cinemaReducerT'

const initialState: CinemaStateT = {
  films: filmsArray,
  filmsObject: {},
  filmsToday: [],
  filmsTodayAmount: 6,
}

const cinemaSlice = createSlice({
  name: 'cinema',
  initialState,
  reducers: {
    createFilmsTodayArr(state) {
      function amountOfSlides() {
        return Math.ceil(8 / state.filmsTodayAmount) * state.filmsTodayAmount
      }

      for (let i = 0; i < amountOfSlides(); i++) {
        state.filmsToday[i] = state.films[i % state.filmsTodayAmount]
      }
    },
    createFilmsObject(state) {
      state.films.forEach(film => {
        state.filmsObject[film.link] = film
      })
    },
  },
})

export const {
  createFilmsTodayArr: createFilmsTodayArr_AC,
  createFilmsObject: createFilmsObject_AC,
} = cinemaSlice.actions

export default cinemaSlice.reducer
