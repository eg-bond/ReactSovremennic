// import { combineReducers, createStore } from 'redux'
import seanceReduser from './seanceReducer'
import cinemaReduser from './cinemaReducer'
import specialReduser from './specialReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    seance: seanceReduser,
    cinema: cinemaReduser,
    special: specialReduser,
  },
})

export default store
