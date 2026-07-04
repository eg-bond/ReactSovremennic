import { keyframes, style } from '@vanilla-extract/css';
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

export const loading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
  fontSize: '18px',
  '@media': {
    [breakpoints.w1200]: {
      minHeight: '35vh',
    },
    [breakpoints.mobile]: {
      minHeight: '20vh',
      paddingBottom: '13vh',
    },
  },

});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  width: '60px',
  height: '60px',
  border: '4px solid #f3f3f3',
  borderTop: '4px solid #ff0000',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
});
