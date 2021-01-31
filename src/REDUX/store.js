import {combineReducers, createStore} from "redux";
import seansReduser from "./seansReduser";
import cinemaReduser from "./cinemaReduser";
import specialReduser from "./specialReduser";

let reducers = combineReducers({
    seansPage: seansReduser,
    cinema: cinemaReduser,
    special: specialReduser
});

const store = createStore(reducers);

export default store;