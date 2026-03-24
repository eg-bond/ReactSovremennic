import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints, vars } from '@/styles/theme.css';

export const h1Special = style({
  marginTop: '0 !important' as '0',
});

export const trailers = style({
  '@media': {
    [breakpoints.mobile]: {},
  },
});

globalStyle(`${trailers} h4`, {
  '@media': {
    [breakpoints.mobile]: {
      fontSize: vars.fontSize.mobileTitles,
      margin: '0 0 1vw 0',
      color: 'var(--secondaryClr)',
    },
  },
});

globalStyle(`${trailers} .embed-responsive`, {
  '@media': {
    [breakpoints.mobile]: { margin: '2% 0 2% 0' },
  },
});

export const news = style({
  textAlign: 'justify',
});

globalStyle(`${news} h1`, {
  fontSize: '2.5rem',
  margin: '2% 0 1% 5px',
  '@media': {
    [breakpoints.w1200]: { fontSize: '2rem' },
    [breakpoints.w992]: { fontSize: '1.6rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileTitles, margin: '1vw 0 1vw 0' },
  },
});

globalStyle(`${news} p`, {
  fontSize: '1.35rem',
  margin: '2% 1% 0 1.5%',
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileParagraphs, margin: '0 0 1.5% 0.5%' },
  },
});

globalStyle(`${news} a`, {
  fontSize: '1.35rem',
  margin: '0 1%',
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileParagraphs },
  },
});

export const ref = style({
  textDecoration: 'underline',
  transition: 'ease 0.3s',
});

globalStyle(`${ref}:hover, ${ref}:focus`, {
  color: 'red',
});

export const vkRef = style({});

globalStyle(`${vkRef}:hover, ${vkRef}:focus`, {
  color: 'rgb(45, 140, 230) !important' as 'rgb(45, 140, 230)',
});
