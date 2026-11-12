import { style, globalStyle } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const container = style({
  gridColumn: '1/5',
  margin: '0 auto',
  padding: '20px',
  width: '100%',
  '@media': {
    [breakpoints.mobile]: { gridColumn: '1/5' },
  },
});

globalStyle(`${container} h1`, {
  textAlign: 'center',
  marginBottom: '20px',
  marginTop: 0,
  '@media': { [breakpoints.mobile]: { fontSize: '6vw' } },
} as Parameters<typeof globalStyle>[1]);

export const videosGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  alignItems: 'start',
  '@media': {
    [breakpoints.mobile]: {
      gridTemplateColumns: '1fr',
      gap: '16px',
    },
  },
});
