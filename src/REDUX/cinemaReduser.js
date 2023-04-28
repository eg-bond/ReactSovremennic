import { filmsArray } from './filmsArray'
const CREATE_FILMS_TODAY_ARR = 'CREATE_MOVIES_TODAY_ARR'
const CREATE_FILMS_OBJECT = 'CREATE_MOVIES_OBJECT'

let initialState = {
  films: filmsArray,
  filmsObject: null,
  filmsToday: [],
  filmsTodayAmount: 4,
}

export const cinemaReduser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FILMS_TODAY_ARR:
      let filmsToday = []

      function amountOfSlides() {
        return Math.ceil(8 / state.filmsTodayAmount) * state.filmsTodayAmount
      }

      for (let i = 0; i < amountOfSlides(); i++) {
        filmsToday[i] = state.films[i % state.filmsTodayAmount]
      }

      return {
        ...state,
        filmsToday: filmsToday,
      }
    case CREATE_FILMS_OBJECT:
      let filmsObject = {}
      state.films.forEach(film => {
        filmsObject[film.link] = film
      })
      return {
        ...state,
        filmsObject,
      }

    default:
      return state
  }
}

export const createFilmsTodayArr = () => ({ type: CREATE_FILMS_TODAY_ARR })
export const createFilmsObject = () => ({ type: CREATE_FILMS_OBJECT })

export default cinemaReduser
