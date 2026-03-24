import { style } from '@vanilla-extract/css';
import { breakpoints } from '../styles/theme.css';

export const suspenseFallback = style({
  gridColumn: '1/5',
  height: '90vh',
  margin: '15px',
  '@media': {
    [breakpoints.mobile]: { gridColumn: '1/5', margin: '0 15px' },
  },
});
