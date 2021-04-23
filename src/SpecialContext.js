import React, { useCallback, useContext } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  switchFontSize,
  switchSiteMode,
  switchSiteTheme,
  switchImagesVisibility,
} from './REDUX/specialReduser'
import { currentFontSizeClass, themeClasses } from './helpers'

export const SpecialContext = React.createContext()

export const useSpecialContext = () => {
  return useContext(SpecialContext)
}

const SpecialProvider = ({ children, switchSiteMode, ...props }) => {
  const switchSiteModeHandler = useCallback(
    mode => {
      switchSiteMode(mode)
    },
    [switchSiteMode]
  )

  // const currentFS = currentFontSizeClass(props.fontSize) || 'fontSize__100'
  const themeCl = themeClasses(props.theme)

  return (
    <SpecialContext.Provider
      value={{
        siteMode: props.siteMode,
        theme: props.theme,
        themeCl,
        fontSize: props.fontSize,
        imgHidden: props.imgHidden,
        switchSiteMode: switchSiteModeHandler,
        switchSiteTheme: props.switchSiteTheme,
        switchImagesVisibility: props.switchImagesVisibility,
        switchFontSize: props.switchFontSize,
      }}>
      {children}
    </SpecialContext.Provider>
  )
}

let mapStateToProps = state => ({
  siteMode: state.special.siteMode,
  theme: state.special.theme,
  imgHidden: state.special.imgHidden,
  fontSize: state.special.fontSize,
})

export const SpecialContextProvider = compose(
  connect(mapStateToProps, {
    switchSiteMode,
    switchFontSize,
    switchSiteTheme,
    switchImagesVisibility,
  })
)(SpecialProvider)
