import React, { useCallback, useContext } from 'react'
import { themeClasses } from './helpers'
import { useSpecialReduser } from './specialReducer'

export const SpecialContext = React.createContext()

export const useSpecialContext = () => {
  return useContext(SpecialContext)
}

export const SpecialContextProvider = ({ children }) => {
  const [specialState, specialAC] = useSpecialReduser()
  const themeCl = themeClasses(specialState.theme)

  const switchSiteModeHandler = useCallback(
    mode => {
      specialAC.switchSiteMode(mode)
    },
    [specialAC]
  )

  return (
    <SpecialContext.Provider
      value={{
        siteMode: specialState.siteMode,
        theme: specialState.theme,
        themeCl,
        fontSize: specialState.fontSize,
        imgHidden: specialState.imgHidden,
        switchSiteMode: switchSiteModeHandler,
        switchSiteTheme: specialAC.switchSiteTheme,
        switchImagesVisibility: specialAC.switchImagesVisibility,
        switchFontSize: specialAC.switchFontSize,
      }}>
      {children}
    </SpecialContext.Provider>
  )
}
