import { style } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const desktopAdvWrapper = style({
  gridColumn: '4/5',
  marginRight: '15px',
  paddingTop: 'var(--desktopContentMT)',
  '@media': {
    [breakpoints.mobile]: {
      paddingTop: 'var(--mobileContentMT)',
    },
  },
});

export const advMarginTop = style({
  marginTop: '1rem',
});

export const mobileAdvGrid = style({
  display: 'flex',
  justifyContent: 'space-around',
});

export const mobileAdvItem1 = style({
  flexBasis: '49%',
  padding: '2.5vw 1% 2.5vw 0',
});

export const mobileAdvItem2 = style({
  flexBasis: '49%',
  padding: '2.5vw 0 2.5vw 1%',
});
