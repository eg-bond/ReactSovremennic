import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

const base = style({
  '@media': {
    [breakpoints.mobile]: {
      height: '1vw',
      backgroundColor: 'var(--mobileSeparatorClr)',
      zIndex: 200,
    },
  },
});

export const separator = styleVariants({
  index: [
    base,
    style({
      '@media': {
        [breakpoints.mobile]: {
          margin: '0',
        },
      },
    }),
  ],
  sticky: [
    base,
    style({
      '@media': {
        [breakpoints.mobile]: {
          position: 'sticky',
          top: 'calc(var(--navbarMobileH768) - 0.1vw)',
        },
        'screen and (max-width: 544px)': {
          top: 'calc(var(--navbarMobileH544) - 0.1vw)',
        },
      },
    }),
  ],
  default: [base],
});
