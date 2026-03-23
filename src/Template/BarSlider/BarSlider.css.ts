import { style } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const barSlider = style({
  borderRadius: '10px',
  border: 'solid 1px var(--secondaryClr)',
  margin: '1rem 0',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'grab',
  width: '100%',
  aspectRatio: '16/9',
  '@media': {
    [breakpoints.mobile]: { margin: '2.5vw 0' },
  },
});

export const imgContainer16x9 = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  overflow: 'hidden',
});

export const imgContainerImg = style({
  borderRadius: '10px',
  width: '100%',
  height: '100%',
});
