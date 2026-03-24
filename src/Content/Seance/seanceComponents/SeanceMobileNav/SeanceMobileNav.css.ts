import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const mobileNavContainerBack = style({
  margin: '0 -15px',
  backgroundColor: 'black',
  zIndex: 10,
  position: 'sticky',
  top: '9.2vw',
  '@media': {
    'screen and (max-width: 544px)': { top: '19.7vw' },
  },
});

export const mobileNavContainer = style({
  display: 'flex',
  overflow: 'hidden',
  cursor: 'grab',
  margin: '0 7px',
  height: '13.5vw',
});

export const mobileNav = style({
  display: 'flex',
  height: 'var(--mobileNavHeight)',
  color: 'white',
  columnGap: '2vw',
  padding: 'var(--mobileContentMT) 0',
});

export const mobileNavChanging = style({
  transition: '0.25s',
  pointerEvents: 'none',
});

export const mobileNavItem = style({
  width: 'fit-content',
  whiteSpace: 'nowrap',
  borderRadius: '5vw',
  border: vars.borders.b1px,
  backgroundColor: 'black',
  padding: '0 1rem',
  fontSize: vars.fontSize.mobileParagraphs,
  height: '8vw',
});

globalStyle(`${mobileNavItem}.active, ${mobileNavItem}:hover`, {
  backgroundColor: 'white',
  color: 'black',
});

export const mobileNavAnchor = style({
  position: 'sticky',
  top: 'calc(var(--navbarMobileH768) + var(--mobileNavHeight) + 0.5vw)',
  '@media': {
    'screen and (max-width: 544px)': {
      top: 'calc(var(--navbarMobileH544) + var(--mobileNavHeight) + 0.5vw)',
    },
  },
});
