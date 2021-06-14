// Хелперы для сайта "для слабовидящих"
export const modifiedClass = (cl, siteMode) =>
  `${cl} ${siteMode === 'default' ? cl + '--default' : cl + '--special'}`

const themeAppColors = {
  blackWhite: {
    main: 'black',
    secondary: '#ebece9',
  },
  whiteBlack: {
    main: '#ebece9',
    secondary: 'black',
  },
  blackRed: {
    main: 'black',
    secondary: '#ab1919',
  },
  yellowBrown: {
    main: '#f5dda1',
    secondary: '#810026',
  },
  blueGreen: {
    main: '#b4e5ee',
    secondary: '#5e4005',
  },
}

export const changeAppColors = (theme, siteMode) => {
  const docStyle = document.documentElement.style

  docStyle.setProperty('--mainClr', themeAppColors[theme].main)
  docStyle.setProperty('--secondaryClr', themeAppColors[theme].secondary)
  if (siteMode === 'default') {
    docStyle.setProperty('--movieTitlesClr', '#e41b2b')
  } else {
    docStyle.setProperty('--movieTitlesClr', themeAppColors[theme].secondary)
  }
}

export const themeLogoFile = {
  blackWhite: 'logo.png',
  whiteBlack: 'logoWB.png',
  blackRed: 'logoBR.png',
  yellowBrown: 'logoYB.png',
  blueGreen: 'logoBG.png',
}

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
//-------------------------------------
// Медиа запросы
export const queries = {
  desktop: '(min-width: 768px) and (min-height: 500px)',
  mobile:
    '(max-width: 767.5px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)',
}

// Функция для прокрутки наверх
export const scrollToTop = () => window.scrollTo(0, 0)

// Промис - задержка
export const delay = ms => {
  return new Promise(res => setTimeout(() => res(), ms))
}
