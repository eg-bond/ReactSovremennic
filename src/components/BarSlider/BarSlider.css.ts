import { style } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const viewport = style({
  borderRadius: '10px',
  border: 'solid 1px var(--secondaryClr)',
  margin: '1rem 0',
  overflow: 'hidden',
  cursor: 'grab',
  width: '100%',
  aspectRatio: '16/9',
  '@media': {
    [breakpoints.mobile]: { margin: '2.5vw 0' },
  },
});

export const track = style({
  display: 'flex',
  height: '100%',
});

export const slide = style({
  flex: '0 0 100%',
  minWidth: 0,
  position: 'relative',
  aspectRatio: '16/9',
  overflow: 'hidden',
});

export const img = style({
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
