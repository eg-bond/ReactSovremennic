import { useCallback } from 'react'
import {
  switchFontSize_AC,
  switchImagesVisibility_AC,
  switchSiteMode_AC,
  switchSiteTheme_AC,
} from '../special/specialReducer'
import type { SpecialStateT } from '../special/specialReducerT'
import { useAppDispatch, useAppSelector } from '../store'

export const useSpecialState = () => {
  const { siteMode } = useAppSelector(state => state.special)
  const { imgHidden } = useAppSelector(state => state.special)
  const dispatch = useAppDispatch()

  const switchSiteTheme = useCallback((theme: SpecialStateT['theme']) => {
    dispatch(switchSiteTheme_AC({ theme }))
  }, [])
  const switchImagesVisibility = useCallback((value: boolean) => {
    dispatch(switchImagesVisibility_AC({ value }))
  }, [])
  const switchFontSize = useCallback((fontSize: SpecialStateT['fontSize']) => {
    dispatch(switchFontSize_AC({ fontSize }))
  }, [])
  const switchSiteMode = useCallback((mode: SpecialStateT['siteMode']) => {
    dispatch(switchSiteMode_AC({ mode }))
  }, [])

  return {
    siteMode,
    imgHidden,
    switchFontSize,
    switchImagesVisibility,
    switchSiteMode,
    switchSiteTheme,
  }
}
