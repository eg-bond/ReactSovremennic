import { combineReducers, createStore } from 'redux'
import seansReduser from './seansReducer'
import cinemaReduser from './cinemaReducer'
import specialReduser from './specialReducer'

let reducers = combineReducers({
  seansPage: seansReduser,
  cinema: cinemaReduser,
  special: specialReduser,
})

const store = createStore(reducers)

export default store
