import { useCallback } from 'react'
import {
  changeScheduleItem_AC,
  setTodayScheduleItem_AC,
} from '../seance/seanceReducer'
import { useAppDispatch, useAppSelector } from '../store'
import type { DateKeysT } from '../seance/seanceReducerT'

export const useSeanceState = () => {
  const { siteMode } = useAppSelector(state => state.special)
  const { datesArr } = useAppSelector(state => state.seance)
  const { buttonTitle } = useAppSelector(state => state.seance)
  const { activeScheduleItemKey } = useAppSelector(state => state.seance)
  const dispatch = useAppDispatch()

  const setTodayScheduleItem = useCallback(() => {
    dispatch(setTodayScheduleItem_AC())
  }, [])

  const changeScheduleItem = useCallback((key: DateKeysT, title: string) => {
    dispatch(changeScheduleItem_AC({ key, title }))
  }, [])

  return {
    siteMode,
    datesArr,
    buttonTitle,
    activeScheduleItemKey,
    setTodayScheduleItem,
    changeScheduleItem,
  }
}
