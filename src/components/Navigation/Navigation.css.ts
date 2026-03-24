import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '@/styles/theme.css';

const upAndDown = keyframes({
  '50%': { transform: 'translateY(-4px)' },
  '100%': { transform: 'translateY(0)' },
});

export const container = style({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  '@media': {
    [`not all and ${breakpoints.mobile}`]: {
      position: 'static',
      zIndex: 'auto',
    },
  },
});

export const navigation = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'var(--mainClr)',
  border: vars.borders.b5px,
  '@media': {
    [breakpoints.w992]: {
      border: vars.borders.b3px,
    },
    [breakpoints.mobile]: {
      borderRadius: 0,
      borderWidth: 0,
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 10,
      height: 'var(--navbarMobileH768)',
    },
    '(max-width: 544px)': {
      height: 'var(--navbarMobileH544)',
      flexDirection: 'column',
    },
  },
});

export const navigationFs150 = style({});
export const navigationFs200 = style({});

export const logo = style({
  textDecoration: 'none',
  flex: 1,
  alignSelf: 'center',
  marginLeft: '2%',
  '@media': {
    [breakpoints.mobile]: {
      marginLeft: '1%',
      alignSelf: 'flex-start',
    },
  },
});

export const logoImg = style({
  width: '70%',
  '@media': {
    [breakpoints.mobile]: {
      width: '21vw',
      marginTop: '0.5vw',
    },
    '(max-width: 544px)': {
      width: '25vw',
    },
  },
});

// fs150 overrides
globalStyle(`${navigationFs150} .${logo}`, {
  textAlign: 'right',
});
globalStyle(`${navigationFs150} .${logoImg}`, {
  width: '60%',
  '@media': { [breakpoints.w992]: { width: '170px' } },
} as Parameters<typeof globalStyle>[1]);

// fs200 overrides
globalStyle(`${navigationFs200} .${logo}`, {
  textAlign: 'right',
});
globalStyle(`${navigationFs200} .${logoImg}`, {
  width: '90%',
  '@media': { [breakpoints.w992]: { width: '220px' } },
} as Parameters<typeof globalStyle>[1]);

// Logo hover/focus animation
globalStyle(`${logo} a:hover img, ${logo} a:focus img`, {
  animation: `${upAndDown} 2s ease infinite`,
  '@media': {
    [breakpoints.mobile]: { animation: 'none' },
  },
} as Parameters<typeof globalStyle>[1]);

export const menu = style({
  flex: 3.5,
  margin: '1% 0',
  '@media': {
    [breakpoints.mobile]: {
      alignSelf: 'center',
    },
    '(max-width: 544px)': {
      alignSelf: 'stretch',
    },
    '(max-width: 390px)': {
      marginTop: 0,
    },
  },
});

globalStyle(`${navigationFs150} .${menu}`, {
  flex: 1.8,
  '@media': { [breakpoints.w1200]: { flex: 1.5 } },
} as Parameters<typeof globalStyle>[1]);

globalStyle(`${navigationFs200} .${menu}`, {
  flex: 2,
});

export const menuUl = style({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  listStyle: 'none',
  '@media': {
    [breakpoints.mobile]: {
      top: 0,
      justifyContent: 'space-between',
    },
  },
});

export const menuLi = style({
  margin: '1.5% 0.5%',
});

export const menuLink = style({
  borderRadius: vars.borderRadius.buttons,
  padding: '9px 11px',
  textDecoration: 'none',
  fontSize: '1.2rem',
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.05rem' },
    [breakpoints.w992]: { fontSize: '0.86rem', padding: '8px 6px' },
    [breakpoints.mobile]: { padding: '1.8vw 0.5vw', fontSize: '1.85vw' },
    '(max-width: 544px)': { fontSize: '2.3vw' },
  },
});

export const logoSpecial = style({
  '@media': {
    [breakpoints.w1200]: { flex: 0.8 },
    [breakpoints.w992]: { flex: 0.7 },
  },
});

export const menuLinkActive = style({
  color: 'var(--mainClr) !important' as 'inherit',
  backgroundColor: 'var(--secondaryClr) !important' as 'inherit',
});
