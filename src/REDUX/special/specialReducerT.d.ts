type SpecialStateT = {
  fontSize: '14px' | '21px' | '26px';
  imgHidden: boolean;
  siteMode: 'default' | 'special';
  theme: 'blackWhite' | 'whiteBlack' | 'blackBlue' | 'yellowBrown' | 'blueGreen';
};

type SpecialDispatchesT = {
  switchFontSize: (fontSize: SpecialStateT['fontSize']) => void;
  switchImagesVisibility: (value: boolean) => void;
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void;
  switchSiteTheme: (theme: SpecialStateT['theme']) => void;
};

export type { SpecialStateT, SpecialDispatchesT };
