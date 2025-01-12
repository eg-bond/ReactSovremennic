import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { SpecialStateT } from './specialReducerT';

const initialState: SpecialStateT = {
  siteMode: 'default',
  theme: 'blackWhite',
  fontSize: '14px',
  imgHidden: false,
};

const specialSlice = createSlice({
  name: 'special',
  initialState,
  reducers: {
    switchSiteMode(
      state,
      action: PayloadAction<{
        mode: SpecialStateT['siteMode'];
      }>,
    ) {
      const { mode } = action.payload;
      if (mode === 'default') {
        return { ...initialState };
      } else {
        state.siteMode = mode;
      }
    },
    switchSiteTheme(
      state,
      action: PayloadAction<{
        theme: SpecialStateT['theme'];
      }>,
    ) {
      state.theme = action.payload.theme;
    },
    switchImagesVisibility(
      state,
      action: PayloadAction<{
        value: boolean;
      }>,
    ) {
      state.imgHidden = action.payload.value;
    },
    switchFontSize(
      state,
      action: PayloadAction<{
        fontSize: SpecialStateT['fontSize'];
      }>,
    ) {
      state.fontSize = action.payload.fontSize;
    },
  },
});

export const {
  switchSiteMode: switchSiteMode_AC,
  switchSiteTheme: switchSiteTheme_AC,
  switchImagesVisibility: switchImagesVisibility_AC,
  switchFontSize: switchFontSize_AC,
} = specialSlice.actions;

export default specialSlice.reducer;
