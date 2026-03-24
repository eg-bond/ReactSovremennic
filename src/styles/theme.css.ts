import { createGlobalTheme } from '@vanilla-extract/css';

// CSS custom properties on :root — only values that make sense as CSS vars
export const vars = createGlobalTheme(':root', {
  font: {
    jost: '\'Jost\', sans-serif',
  },
  borders: {
    b1px: 'solid 1px var(--secondaryClr)',
    b2px: 'solid 3px var(--secondaryClr)',
    b3px: 'solid 3px var(--secondaryClr)',
    b5px: 'solid 5px var(--secondaryClr)',
  },
  borderRadius: {
    images: '10px',
    buttons: '30px',
  },
  fontSize: {
    mobileParagraphs: '2.8vw',
    mobileTitles: '4vw',
    desktopTitle: '2.5rem',
    desktopParagraph: '1.35rem',
  },
});

// Plain TS constants — NOT CSS vars, used directly in style() calls
export const breakpoints = {
  mobile: '(max-width: 767.5px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)',
  w1200: '(max-width: 1200px)',
  w992: '(max-width: 992px)',
  w610: '(max-width: 610px)',
  w530: '(max-width: 530px)',
} as const;

// Theme color palettes for siteMode = "special"
export const specialThemes = {
  blackWhite: { background: 'black', elements: '#ebece9' },
  whiteBlack: { background: '#ebece9', elements: 'black' },
  blackBlue: { background: 'black', elements: '#7ba2d5' },
  yellowBrown: { background: '#f5dda1', elements: '#810026' },
  blueGreen: { background: '#b4e5ee', elements: '#5e4005' },
} as const;
