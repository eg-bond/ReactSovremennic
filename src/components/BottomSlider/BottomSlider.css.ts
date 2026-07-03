import { style, globalStyle } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const bar = style({
  fontSize: 'var(--titleFS)',
  margin: '1% 0 10px 20px',
  '@media': {
    [breakpoints.mobile]: { display: 'none' },
  },
});

export const border = style({
  borderTop: 'solid 5px var(--secondaryClr)',
  marginLeft: '-1px',
  '@media': {
    [breakpoints.w992]: { borderTop: 'solid 3px var(--secondaryClr)' },
    [breakpoints.mobile]: { display: 'none' },
  },
});

export const viewport = style({
  overflow: 'hidden',
  minHeight: '462px',
  '@media': {
    [breakpoints.w1200]: { minHeight: '380px' },
    [breakpoints.w992]: { minHeight: '290px' },
    [breakpoints.mobile]: { display: 'none' },
  },
});

export const track = style({
  display: 'flex',
  marginLeft: '-2rem', // compensates first slide's paddingLeft
});

export const slide = style({
  // gap via paddingLeft — Embla loop clones slides with their padding intact
  flex: '0 0 25%',
  minWidth: 0,
  paddingLeft: '2rem',
  boxSizing: 'border-box',
  height: '462px',
  '@media': {
    [breakpoints.w1200]: { height: '380px' },
    [breakpoints.w992]: { height: '290px' },
  },
});

export const imgCont = style({
  height: '388px',
  position: 'relative',
  zIndex: 1,
  '@media': {
    [breakpoints.w1200]: { height: '322px' },
    [breakpoints.w992]: { height: '242px' },
  },
});

export const slideH1 = style({
  padding: '0 1% 0 2%',
  margin: '3% 0',
  whiteSpace: 'pre',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.3s',
  cursor: 'pointer',
  fontSize: '1.8rem',
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.5rem' },
    [breakpoints.w992]: { fontSize: '1.2rem' },
  },
  '::before': {
    content: '""',
    width: '40px',
    position: 'absolute',
    right: '0',
    bottom: '0',
    top: '0',
    backgroundImage: 'linear-gradient(to right, transparent, var(--mainClr) 100%)',
  },
});

export const slideP = style({
  paddingLeft: '2%',
  marginBottom: '1.5%',
  transition: 'all 0.3s',
  cursor: 'pointer',
  fontSize: '1.35rem',
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
  },
});

globalStyle(`.swSlide__a:hover .${slideH1}, .swSlide__a:focus-visible .${slideH1}`, {
  color: 'red',
});
globalStyle(`.swSlide__a:hover .${slideP}, .swSlide__a:focus-visible .${slideP}`, {
  color: 'red',
});
