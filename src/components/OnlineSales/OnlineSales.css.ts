import { style } from '@vanilla-extract/css';
import { breakpoints, vars } from '@/styles/theme.css';

export const salesBtn = style({
  width: '100%',
  padding: '1.4rem',
  color: '#ffffff',
  borderRadius: '1rem',
  border: 'none',
  backgroundColor: '#e41b2b',
  transition: 'all 300ms',
  fontSize: '1.2rem',
  selectors: {
    '&:hover': { backgroundColor: '#c10017' },
  },
  '@media': {
    [breakpoints.w1200]: { padding: '1.2rem', fontSize: '1rem' },
    [breakpoints.w992]: { padding: '1rem', fontSize: '1rem' },
    [breakpoints.mobile]: {
      fontSize: vars.fontSize.mobileTitles,
      padding: '2vw',
      marginBottom: '2.5vw',
    },
  },
});
