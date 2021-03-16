import { filmsArray } from "./filmsArray";
const CREATE_FILMS_TODAY_ARR = "CREATE_FILMS_TODAY_ARR";

let initialState = {
    films: filmsArray,
    filmsToday: [],
    filmsTodaySlides: 4,
}


export const cinemaReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FILMS_TODAY_ARR:
            let filmsToday = [];
            for (let i = 0; i < state.filmsTodaySlides; i++) {
                filmsToday[i] = state.films[i]; // тут регулируем, с какого фильма начнется нижний слайдер
            }
            return {
                ...state,
                filmsToday: filmsToday
            }

        default:
            return state;
    }
}

export const createFilmsTodayArr = () => ({type: CREATE_FILMS_TODAY_ARR})

export default cinemaReduser;
