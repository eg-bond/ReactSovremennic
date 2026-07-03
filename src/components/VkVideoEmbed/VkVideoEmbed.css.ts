import { style } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const embedResponsive = style({
  border: 'solid 1px var(--secondaryClr)',
  borderRadius: '10px',
  overflow: 'hidden',
  marginBottom: '2%',
  width: '100%',
  aspectRatio: '16 / 9',
  '@media': {
    [breakpoints.mobile]: { margin: '2% 0 2% 0' },
  },
});

export const embedResponsiveItem = style({
  width: '100%',
  height: '100%',
  border: '0',
});
