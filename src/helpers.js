// Helpers for siteMode "special"
export const modifiedClass = (cl, siteMode) =>
  `${cl} ${siteMode === 'default' ? cl + '--default' : cl + '--special'}`

const themeAppColors = {
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
  blackBlue: 'logoBB.png',
  yellowBrown: 'logoYB.png',
  blueGreen: 'logoBG.png',
}

export const themeLogo = theme => {
  switch (theme) {
    case 'blackWhite':
      return 'logo'
    case 'whiteBlack':
      return 'logoWB'
    case 'blackBlue':
      return 'logoBB'
    case 'yellowBrown':
      return 'logoYB'
    case 'blueGreen':
      return 'logoBG'
    default:
      return 'logo'
  }
}
//-------------------------------------------------------------------

// Media queries strings for reusing
export const queries = {
  desktop: '(min-width: 768px) and (min-height: 500px)',
  mobile:
    '(max-width: 767.5px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)',
}

// Scroll up functions
export const scrollToTop = () => window.scrollTo(0, 0)
export const scrollToNavigation = () => window.scrollTo(0, 200)

// Delay promise
export const delay = ms => {
  return new Promise(res => setTimeout(() => res(), ms))
}

// after decorator (invokes function after it is called necessary amount of times)
export function after(times, func) {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments)
    }
  }
}
