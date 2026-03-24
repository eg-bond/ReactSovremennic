import { style } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const seance = style({
  paddingTop: 'var(--desktopContentMT)',
  vars: { '--mobileNavHeight': '13.5vw' },
  '@media': {
    [breakpoints.mobile]: {
      paddingTop: '0 !important' as '0',
    },
  },
});
