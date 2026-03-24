import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints, vars } from '@/styles/theme.css';

export const desktopAdvWrapper = style({
  gridColumn: '4/5',
  marginRight: '15px',
  paddingTop: 'var(--desktopContentMT)',
  '@media': {
    [breakpoints.mobile]: {
      paddingTop: 'var(--mobileContentMT)',
    },
  },
});

export const advMarginTop = style({
  marginTop: '1rem',
});

// .desktopAdv — %imgContainer + extras
export const desktopAdv = style({
  position: 'relative',
  width: '100%',
  border: vars.borders.b1px,
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  marginBottom: '7%',
  transition: 'ease 300ms',
});

globalStyle(`${desktopAdv} img`, {
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export const desktopAdv1 = style({ paddingBottom: '50%' });
export const desktopAdv2 = style({ paddingBottom: '66.6%' });
export const desktopAdv3 = style({ paddingBottom: '150%' });
export const desktopAdv4 = style({ paddingBottom: '197.45%' });

export const desktopAdv5 = style({
  paddingBottom: '69%',
  cursor: 'pointer',
});

globalStyle(`${desktopAdv5} img`, {
  transition: 'ease 300ms',
});

globalStyle(`${desktopAdv5} img:hover`, {
  opacity: 0.85,
});

export const linkWrapper = style({});

globalStyle(`${linkWrapper}:focus ${desktopAdv}`, {
  transform: 'translateY(-6px)',
});

export const opacityOnHover = style({});

globalStyle(`${opacityOnHover} img:hover`, {
  opacity: 0.85,
});

// Mobile adv grid
export const mobileAdvGrid = style({
  display: 'flex',
  justifyContent: 'space-around',
});

export const mobileAdvItem1 = style({
  flexBasis: '49%',
  padding: '2.5vw 1% 2.5vw 0',
});

export const mobileAdvItem2 = style({
  flexBasis: '49%',
  padding: '2.5vw 0 2.5vw 1%',
});

// indexAdvXS — mobile only adv layout
export const indexAdvXS = style({
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
});

export const indexAdvXSItem1 = style({
  '@media': {
    [breakpoints.mobile]: {
      flexBasis: '49%',
      padding: '2.5vw 1% 2.5vw 0',
    },
  },
});

export const indexAdvXSItem1_2 = style({
  '@media': {
    [breakpoints.mobile]: {
      flexBasis: '49%',
      padding: '2.5vw 0 2.5vw 1%',
    },
  },
});

export const indexAdvXSItem2 = style({
  '@media': {
    [breakpoints.mobile]: {
      flexBasis: '59%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2.5vw 0 2.5vw 2%',
    },
  },
});

export const indexAdvXSItem1ImgCont = style({
  position: 'relative',
  width: '100%',
  border: vars.borders.b1px,
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  '@media': {
    [breakpoints.mobile]: { minHeight: '70vw' },
  },
});

globalStyle(`${indexAdvXSItem1ImgCont} img`, {
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export const indexAdvXSItem2ImgCont = style({
  position: 'relative',
  width: '100%',
  border: vars.borders.b1px,
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  '@media': {
    [breakpoints.mobile]: { minHeight: '28vw' },
  },
});

globalStyle(`${indexAdvXSItem2ImgCont} img`, {
  position: 'absolute',
  width: '100%',
  height: '100%',
});
