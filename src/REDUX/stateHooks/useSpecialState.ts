import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  switchFontSize_AC,
  switchImagesVisibility_AC,
  switchSiteMode_AC,
  switchSiteTheme_AC,
} from '../special/specialReducer';
import type { SpecialStateT } from '../special/specialReducerT';

export const useSpecialState = () => {
  const { siteMode } = useAppSelector(state => state.special);
  const { imgHidden } = useAppSelector(state => state.special);
  const dispatch = useAppDispatch();

  const switchSiteTheme = useCallback((theme: SpecialStateT['theme']) => {
    dispatch(switchSiteTheme_AC({ theme }));
  }, [dispatch]);
  const switchImagesVisibility = useCallback((value: boolean) => {
    dispatch(switchImagesVisibility_AC({ value }));
  }, [dispatch]);
  const switchFontSize = useCallback((fontSize: SpecialStateT['fontSize']) => {
    dispatch(switchFontSize_AC({ fontSize }));
  }, [dispatch]);
  const switchSiteMode = useCallback((mode: SpecialStateT['siteMode']) => {
    dispatch(switchSiteMode_AC({ mode }));
  }, [dispatch]);

  return {
    siteMode,
    imgHidden,
    switchFontSize,
    switchImagesVisibility,
    switchSiteMode,
    switchSiteTheme,
  };
};
