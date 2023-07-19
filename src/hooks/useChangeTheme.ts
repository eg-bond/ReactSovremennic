import { useEffect } from 'react'
import type { SpecialStateT } from '../REDUX/special/specialReducerT'

export const useChangeTheme = (
  theme: SpecialStateT['theme'],
  siteMode: SpecialStateT['siteMode']
) => {
  useEffect(() => {
    changeAppColors(theme, siteMode)
  }, [theme, siteMode])
}

export const changeAppColors = (
  theme: SpecialStateT['theme'],
  siteMode: SpecialStateT['siteMode']
) => {
  const docStyle = document.documentElement.style

  docStyle.setProperty('--mainClr', themeColors[theme].main)
  docStyle.setProperty('--secondaryClr', themeColors[theme].secondary)

  if (siteMode === 'default') {
    docStyle.setProperty('--movieTitlesClr', '#e41b2b')
  } else {
    docStyle.setProperty('--movieTitlesClr', themeColors[theme].secondary)
  }
}

export const themeColors = {
  blackWhite: {
    main: 'black',
    secondary: 'white',
  },
  whiteBlack: {
    main: 'white',
    secondary: 'black',
  },
  blackBlue: {
    main: 'black',
    secondary: '#7ba2d5',
  },
  yellowBrown: {
    main: '#f5dda1',
    secondary: '#810026',
  },
  blueGreen: {
    main: '#b4e5ee',
    secondary: '#5e4005',
  },
} as const
