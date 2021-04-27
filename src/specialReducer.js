import { useReducer } from 'react'

const SWITCH_SITE_MODE = 'SWITCH_SITE_MODE'
const SWITCH_SITE_THEME = 'SWITCH_SITE_THEME'
const SWITCH_IMAGES_VISIBILITY = 'SWITCH_IMAGES_VISIBILITY'
const SWITCH_FONT_SIZE = 'SWITCH_FONT_SIZE'

export const useSpecialReduser = () => {
  const initialState = {
    siteMode: 'default',
    theme: 'blackWhite',
    fontStyle: 'Times',
    fontSize: '100',
    imgHidden: false,
  }

  const specialReduser = (state, action) => {
    switch (action.type) {
      case SWITCH_SITE_MODE:
        return action.mode === 'default'
          ? { ...initialState, siteMode: action.mode }
          : { ...state, siteMode: action.mode }
      case SWITCH_SITE_THEME:
        return { ...state, theme: action.theme }
      case SWITCH_IMAGES_VISIBILITY:
        return { ...state, imgHidden: action.value }
      case SWITCH_FONT_SIZE:
        return { ...state, fontSize: action.fontSize }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(specialReduser, initialState)

  const actionCreators = {
    switchSiteMode: mode => dispatch({ type: SWITCH_SITE_MODE, mode }),
    switchSiteTheme: theme => dispatch({ type: SWITCH_SITE_THEME, theme }),
    switchImagesVisibility: value =>
      dispatch({
        type: SWITCH_IMAGES_VISIBILITY,
        value,
      }),
    switchFontSize: fontSize =>
      dispatch({
        type: SWITCH_FONT_SIZE,
        fontSize,
      }),
  }

  return [state, actionCreators]
}
