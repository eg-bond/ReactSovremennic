type SpecialStateT = {
  siteMode: 'default' | 'special'
  theme: 'blackWhite' | 'whiteBlack' | 'blackBlue' | 'yellowBrown' | 'blueGreen'
  fontSize: '14px' | '21px' | '26px'
  imgHidden: boolean
}

type SpecialDispatchesT = {
  switchSiteTheme: (theme: SpecialStateT['theme']) => void
  switchImagesVisibility: (value: boolean) => void
  switchFontSize: (fontSize: SpecialStateT['fontSize']) => void
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void
}

export type { SpecialStateT, SpecialDispatchesT }
