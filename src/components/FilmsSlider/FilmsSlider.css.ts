import { style, globalStyle } from '@vanilla-extract/css';
import { breakpoints, vars } from '@/styles/theme.css';

export const cinemaSlider = style({
  padding: '7px 7px 0 7px',
  width: '100%',
  cursor: 'grab',
  borderBottom: 'solid 5px var(--secondaryClr)',
  '@media': {
    [breakpoints.w992]: { borderBottom: 'solid 3px var(--secondaryClr)' },
    [breakpoints.mobile]: { borderBottom: 'none', padding: '0 7px' },
  },
});

// Embla structure
export const viewport = style({
  overflow: 'hidden',
});

export const track = style({
  display: 'flex',
  marginLeft: '-0.6rem', // compensates first slide paddingLeft (desktop gap)
  '@media': {
    [breakpoints.mobile]: { marginLeft: '-2vw' },
  },
});

export const slide = style({
  flex: '0 0 20%', // 5 per page desktop
  minWidth: 0,
  paddingLeft: '0.6rem',
  boxSizing: 'border-box',
  '@media': {
    [breakpoints.mobile]: {
      flex: '0 0 28.571%', // 3.5 slides visible on mobile
      paddingLeft: '2vw',
    },
  },
});

export const imgCont = style({
  aspectRatio: '3/4',
  overflow: 'hidden',
  borderRadius: vars.borderRadius.images,
  position: 'relative',
  zIndex: 1,
});

export const slideH1 = style({
  paddingLeft: '2%',
  margin: '5% 0 2% 0',
  whiteSpace: 'pre',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.3s',
  cursor: 'pointer',
  fontSize: '1.35rem',
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: { fontSize: '2.4vw' },
  },
  '::before': {
    content: '""',
    width: '20px',
    position: 'absolute',
    right: '-2px',
    bottom: '0',
    top: '0',
    backgroundImage: 'linear-gradient(to right, transparent, var(--mainClr) 100%)',
  },
});

export const slideP = style({
  paddingLeft: '2.5%',
  letterSpacing: '0.01em',
  fontWeight: 'normal',
  transition: 'all 0.3s',
  cursor: 'pointer',
  fontSize: '0.9rem',
  '@media': {
    [breakpoints.w1200]: { fontSize: '0.8rem' },
    [breakpoints.w992]: { fontSize: '0.7rem' },
    [breakpoints.mobile]: { fontSize: '2vw' },
  },
});

export const mobileTitle = style({
  color: 'white',
  fontSize: vars.fontSize.mobileTitles,
  margin: '0',
  padding: '1vw 0 1vw 1vw',
});

export const arrowPrev = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '-8em',
  zIndex: 2,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5em',
  '@media': {
    [breakpoints.w992]: { left: '-3.5em' },
  },
});

export const arrowNext = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '-8em',
  zIndex: 2,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5em',
  '@media': {
    [breakpoints.w992]: { right: '-3.5em' },
  },
});

export const arrowSvg = style({
  width: '8em',
  height: '8em',
  fill: 'var(--secondaryClr)',
});

globalStyle(`.swSlide__a:hover .${slideH1}, .swSlide__a:focus-visible .${slideH1}`, {
  color: 'red',
});
globalStyle(`.swSlide__a:hover .${slideP}, .swSlide__a:focus-visible .${slideP}`, {
  color: 'red',
});
