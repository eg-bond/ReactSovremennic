import { style } from '@vanilla-extract/css';
import { vars, breakpoints } from './theme.css';

// Analogue of %imgContainer
export const imgContainer = style({
  position: 'relative',
  width: '100%',
  border: 'solid 1px var(--secondaryClr)',
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  selectors: {
    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  },
});

// Analogue of %desktopTitlesFS
export const desktopTitlesFS = style({
  'fontSize': vars.fontSize.desktopTitle,
  '@media': {
    [breakpoints.w1200]: { fontSize: '2rem' },
    [breakpoints.w992]: { fontSize: '1.6rem' },
  },
});

// Analogue of %desktopParagraphsFS
export const desktopParagraphsFS = style({
  'fontSize': vars.fontSize.desktopParagraph,
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
  },
});

// Analogue of %desktopBorders
export const desktopBorders = style({
  'border': 'solid 5px var(--secondaryClr)',
  '@media': {
    [breakpoints.w992]: { border: 'solid 3px var(--secondaryClr)' },
  },
});
