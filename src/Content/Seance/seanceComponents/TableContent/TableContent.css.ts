import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints, vars } from '@/styles/theme.css';

export const seanceTable = style({
  borderSpacing: 0,
  margin: '1rem 0',
  width: '100%',
  overflow: 'hidden',
  borderRadius: vars.borderRadius.images,
  '@media': {
    [breakpoints.mobile]: { margin: '0 auto 2.5vw auto' },
  },
});

globalStyle(`${seanceTable} th, ${seanceTable} td`, {
  padding: '2.7% 0',
  fontSize: vars.fontSize.desktopParagraph,
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileParagraphs },
  },
});

globalStyle(`${seanceTable} th:nth-of-type(1), ${seanceTable} td:nth-of-type(1)`, {
  width: '11%',
  textAlign: 'center',
});

globalStyle(`${seanceTable} th:nth-of-type(2), ${seanceTable} td:nth-of-type(2)`, {
  width: '70%',
  textAlign: 'left',
});

globalStyle(`${seanceTable} th:nth-of-type(3), ${seanceTable} td:nth-of-type(3)`, {
  width: '8%',
  textAlign: 'center',
});

globalStyle(`${seanceTable} th:nth-of-type(4), ${seanceTable} td:nth-of-type(4)`, {
  width: '11%',
  textAlign: 'center',
});

export const tableHead = style({
  backgroundColor: '#e41b2b',
  color: 'white',
});

export const tableWhite = style({
  color: 'black',
  backgroundColor: '#ededed',
  '@media': {
    [breakpoints.mobile]: { fontWeight: 600 },
  },
});

export const tableGray = style({
  color: 'white',
  backgroundColor: '#2b2831',
  '@media': {
    [breakpoints.mobile]: { fontWeight: 600 },
  },
});
