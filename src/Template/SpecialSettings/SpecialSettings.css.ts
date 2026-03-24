import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints, specialThemes } from '@/styles/theme.css';

// ─── Container ───────────────────────────────────────────────────────────────

export const container = style({
  backgroundColor: '#a08d5f',
  padding: '0.5% 1%',
  borderBottom: 'none',
  border: vars.borders.b5px,
  '@media': {
    [breakpoints.w992]: { border: vars.borders.b3px },
  },
});

export const flex = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
});

export const flexItem = style({
  position: 'relative',
  color: 'black',
  textAlign: 'center',
  fontWeight: 'bold',
  alignSelf: 'flex-start',
});

globalStyle(`${flexItem} *`, {
  fontSize: '16px !important' as '16px',
  '@media': {
    [breakpoints.w1200]: { fontSize: '15px !important' as '15px' },
    [breakpoints.w992]: { fontSize: '13px !important' as '13px' },
  },
} as Parameters<typeof globalStyle>[1]);

export const flexItemModeButton = style({
  alignSelf: 'center',
});

export const flexTitle = style({
  paddingBottom: '4%',
  fontWeight: 'bold',
});

// Default mode wrapper (uses .space background from global, button positioned inside)
export const spaceButtonWrapper = style({
  position: 'relative',
});

globalStyle(`${spaceButtonWrapper} button`, {
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  backgroundColor: 'black',
});

globalStyle(`${spaceButtonWrapper} button:hover`, {
  backgroundColor: 'black !important' as 'black',
});

globalStyle(`${spaceButtonWrapper} span`, {
  color: 'white',
});

// ─── Theme buttons ────────────────────────────────────────────────────────────

export const roundBtn = style({
  position: 'relative',
  border: 'none',
  borderRadius: '50%',
  minHeight: '40px',
  minWidth: '40px',
  transition: '0.4s',
  margin: '0 1px',
  cursor: 'pointer',
  selectors: {
    '&:focus-visible': { transform: 'translateY(-4px)' },
    '&:hover': { transform: 'translateY(-4px)' },
  },
});

export const roundBtnInnerCircle = style({
  display: 'inline-block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '15px',
  height: '15px',
  borderRadius: '50%',
});

export const themeColors: Record<string, {
  btn: string; inner: string;
}> = {
  blackWhite: {
    btn: style({ backgroundColor: specialThemes.blackWhite.background }),
    inner: style({ backgroundColor: specialThemes.blackWhite.elements }),
  },
  whiteBlack: {
    btn: style({ backgroundColor: specialThemes.whiteBlack.background }),
    inner: style({ backgroundColor: specialThemes.whiteBlack.elements }),
  },
  blackBlue: {
    btn: style({ backgroundColor: specialThemes.blackBlue.background }),
    inner: style({ backgroundColor: specialThemes.blackBlue.elements }),
  },
  yellowBrown: {
    btn: style({ backgroundColor: specialThemes.yellowBrown.background }),
    inner: style({ backgroundColor: specialThemes.yellowBrown.elements }),
  },
  blueGreen: {
    btn: style({ backgroundColor: specialThemes.blueGreen.background }),
    inner: style({ backgroundColor: specialThemes.blueGreen.elements }),
  },
};

// ─── Font buttons ─────────────────────────────────────────────────────────────

export const fontButtons = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  columnGap: '2px',
});

export const fontButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  minHeight: '40px',
  padding: '0 10px',
  transition: '0.4s',
  selectors: {
    '&:focus-visible': { transform: 'translateY(-4px)' },
    '&:hover': { transform: 'translateY(-4px)' },
  },
});

export const fontButtonLabel = style({
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

// ─── Img switcher ─────────────────────────────────────────────────────────────

export const switchWrapper = style({
  display: 'inline-block',
  position: 'relative',
  width: '50px',
  height: '26px',
  marginTop: '9px',
  transition: '0.4s',
});

export const switchLabel = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
});

export const switchSlider = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#000',
  borderRadius: '20px',
  transition: 'transform 0.2s ease-in-out',
  selectors: {
    '&::before': {
      position: 'absolute',
      content: '""',
      height: '20px',
      width: '20px',
      left: '4px',
      bottom: '3px',
      backgroundColor: 'white',
      borderRadius: '50%',
      transition: 'transform 0.2s ease-in-out',
    },
  },
});

export const switchSliderPressed = style({
  selectors: {
    '&::before': {
      transform: 'translateX(22px)',
    },
  },
});

// ─── Mode button ──────────────────────────────────────────────────────────────

export const modeButton = style({
  minHeight: '40px',
  padding: '0 1rem',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: 'black !important' as 'black',
  color: 'white !important' as 'white',
  fontSize: '14px !important' as '14px',
  transition: '0.4s',
  selectors: {
    '&:hover': { transform: 'translateY(-4px)' },
    '&:focus-visible': { transform: 'translateY(-4px)' },
  },
  '@media': {
    [breakpoints.w1200]: { fontSize: '13px !important' as '13px' },
    [breakpoints.w992]: { fontSize: '11px !important' as '11px' },
  },
});
