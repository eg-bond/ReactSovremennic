import {combineReducers, createStore} from "redux";
import seansReduser from "./seansReduser";

let reducers = combineReducers({
    seansPage: seansReduser
});

const store = createStore(reducers);

window.store = store;

export default store;