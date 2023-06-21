import { useCallback } from 'react'
import { createFilmsTodayArr_AC } from './REDUX/cinema/cinemaReducer'
import { setTodayScheduleItem_AC } from './REDUX/seance/seanceReducer'
import { switchSiteMode_AC } from './REDUX/special/specialReducer'
import { useAppDispatch, useAppSelector } from './REDUX/store'
import type { SpecialStateT } from './REDUX/special/specialReducerT'

export const useAppState = () => {
  const { films } = useAppSelector(state => state.cinema)
  const { filmsToday } = useAppSelector(state => state.cinema)
  const { siteMode } = useAppSelector(state => state.special)
  const { theme } = useAppSelector(state => state.special)
  const { imgHidden } = useAppSelector(state => state.special)
  const { fontSize } = useAppSelector(state => state.special)
  const dispatch = useAppDispatch()

  const switchSiteMode = useCallback((mode: SpecialStateT['siteMode']) => {
    dispatch(switchSiteMode_AC({ mode }))
  }, [])
  const createFilmsTodayArr = useCallback(() => {
    dispatch(createFilmsTodayArr_AC())
  }, [])
  const setTodayScheduleItem = useCallback(() => {
    dispatch(setTodayScheduleItem_AC())
  }, [])

  return {
    films,
    filmsToday,
    siteMode,
    theme,
    imgHidden,
    fontSize,
    switchSiteMode,
    createFilmsTodayArr,
    setTodayScheduleItem,
  }
}
