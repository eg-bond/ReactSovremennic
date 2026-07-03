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

export const loader = style({
  textAlign: 'center',
  padding: '2rem 0',
  fontSize: '1.1rem',
  color: 'var(--textColor)',
  opacity: 0.7,
});

export const error = style({
  textAlign: 'center',
  padding: '2rem 0',
  fontSize: '1.1rem',
  color: 'var(--errorColor, #e74c3c)',
});
