import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '@/styles/theme.css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: 'auto auto',
  gridAutoFlow: 'column',
});

export const leftFr = style({
  margin: '0 15px 10px 0',
  gridRow: '1/3',
  '@media': {
    [breakpoints.mobile]: { gridRow: '1/2', margin: '0 0 3vw 0' },
  },
});

export const rightFr = style({
  gridColumn: '2/4',
  '@media': {
    [breakpoints.mobile]: { marginLeft: '2vw' },
  },
});

export const fullFr = style({
  gridColumn: '1/4',
});

export const descTrailerGrid = style({
  gridColumn: '2/4',
  gridRow: 2,
  '@media': {
    [breakpoints.mobile]: { gridColumn: '1/4' },
  },
});

export const title = style({});

globalStyle(`${title} h2`, {
  marginTop: 0,
  color: 'var(--movieTitlesClr)',
  fontSize: vars.fontSize.desktopTitle,
  '@media': {
    [breakpoints.w1200]: { fontSize: '2rem' },
    [breakpoints.w992]: { fontSize: '1.6rem' },
    [breakpoints.mobile]: {
      fontSize: `${vars.fontSize.mobileTitles} !important` as '4vw',
      marginBottom: 0,
    },
  },
} as Parameters<typeof globalStyle>[1]);

globalStyle(`${title} p`, {
  color: 'var(--movieTitlesClr)',
  fontSize: vars.fontSize.desktopParagraph,
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: {
      margin: '1vw 0',
      fontSize: `${vars.fontSize.mobileParagraphs} !important` as '2.8vw',
    },
  },
} as Parameters<typeof globalStyle>[1]);

export const table = style({
  width: '100%',
  textAlign: 'left',
  marginBottom: '3%',
});

globalStyle(`${table} td`, {
  padding: '0.7% 0',
  verticalAlign: 'top',
  fontSize: vars.fontSize.desktopParagraph,
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileParagraphs },
  },
} as Parameters<typeof globalStyle>[1]);

globalStyle(`${table} td:nth-of-type(1)`, {
  width: '40%',
  '@media': { [breakpoints.mobile]: { width: '26%' } },
} as Parameters<typeof globalStyle>[1]);

globalStyle(`${table} td:nth-of-type(2)`, {
  width: '60%',
  '@media': { [breakpoints.mobile]: { width: '50%' } },
} as Parameters<typeof globalStyle>[1]);

export const description = style({
  textAlign: 'justify',
  fontSize: vars.fontSize.desktopParagraph,
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileParagraphs },
  },
});
