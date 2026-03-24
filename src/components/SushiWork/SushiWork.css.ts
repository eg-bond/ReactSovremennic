import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '@/styles/theme.css';

// %imgContainer equivalent
export const advContainer = style({
  position: 'relative',
  width: '100%',
  border: vars.borders.b1px,
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  marginBottom: '7%',
  transition: 'ease 300ms',
  paddingBottom: '69%',
  cursor: 'pointer',
});

globalStyle(`${advContainer} img`, {
  position: 'absolute',
  width: '100%',
  height: '100%',
});

globalStyle(`${advContainer} img:hover`, {
  opacity: 0.85,
});

export const sushiWork = style({
  '@media': {
    [breakpoints.mobile]: {
      margin: '2.5vw 0',
      position: 'relative',
      width: '100%',
      height: '60vw',
      borderRadius: '10px',
      border: `solid 1px var(--secondaryClr)`,
      overflow: 'hidden',
    },
  },
});

export const sushiWorkImg = style({
  '@media': {
    [breakpoints.mobile]: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  },
});

export const overlay = style({
  position: 'fixed',
  inset: '0',
  zIndex: 9,
  background: 'rgba(0, 0, 0, 0.5)',
});

export const modal = style({
  position: 'fixed',
  width: '40vw',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
  zIndex: 5,
  minHeight: 'auto',
  '@media': {
    [breakpoints.w1200]: { width: '55vw' },
  },
});

export const modalImg = style({
  width: '100%',
});
