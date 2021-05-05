export const modifiedClass = (cl, siteMode) =>
  `${cl} ${siteMode === 'default' ? cl + '__default' : cl + '__special'}`

export const themeClasses = theme => {
  return {
    back: `theme__${theme}__background`,
    elems: `theme__${theme}__elements`,
    borders: `theme__${theme}__borders`,
    pills: `theme__${theme}__pills`,
    navs: `theme__${theme}__navs`,
    footer: `theme__${theme}__footer`,
  }
}

export const currentFontSizeClass = fontSize => `fontSize__${fontSize}`

export const themeLogo = theme => {
  switch (theme) {
    case 'blackWhite':
      return 'logo'
    case 'whiteBlack':
      return 'logoWB'
    case 'blackRed':
      return 'logoBR'
    case 'yellowBrown':
      return 'logoYB'
    case 'blueGreen':
      return 'logoBG'
    default:
      return 'logo'
  }
}
// Медиа запросы
export const queries = {
  desktop: '(min-width: 768px) and (min-height: 500px)',
  mobile:
    '(max-width: 767.5px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)',
}

export const scrollToTop = () => window.scrollTo(0, 0)
