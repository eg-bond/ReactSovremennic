import {combineReducers, createStore} from "redux";
import seansReduser from "./seansReduser";
import cinemaReduser from "./cinemaReduser";

let reducers = combineReducers({
    seansPage: seansReduser,
    cinema: cinemaReduser
});

const store = createStore(reducers);

window.store = store;

export default store;