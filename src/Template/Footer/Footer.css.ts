import { style } from '@vanilla-extract/css';
import { vars, breakpoints } from '@/styles/theme.css';

export const footer = style({
  textAlign: 'center',
  padding: '1.2%',
  backgroundColor: 'var(--secondaryClr)',
});

export const footerContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  padding: '0 1rem',
});

export const footerLink = style({
  color: 'var(--mainClr)',
  fontSize: 'var(--paragraphFS)',
  ':hover': { textDecoration: 'underline' },
  ':focus': { textDecoration: 'underline' },
  '@media': {
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileParagraphs },
  },
});

export const footerSocial = style({
  display: 'flex',
  gap: '30px',
});

export const footerIcon = style({
  'color': 'var(--mainClr)',
  'transition': 'color 0.2s ease',
  ':hover': { color: '#7ba2d5' },
});

export const footerIconSvg = style({
  'width': '36px',
  'height': '36px',
  '@media': {
    [breakpoints.w1200]: { width: '30px', height: '30px' },
    [breakpoints.w992]: { width: '24px', height: '24px' },
    [breakpoints.mobile]: { width: '7vw', height: '7vw' },
  },
});
