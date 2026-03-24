import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '@/styles/theme.css';

export const rules = style({});

globalStyle(`${rules} h3`, {
  textAlign: 'center',
  fontSize: '1.6rem',
  '@media': {
    [breakpoints.w992]: { fontSize: '1.1rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileTitles, margin: '1vw 0' },
  },
});

globalStyle(`${rules} h3:first-child`, {
  marginTop: 0,
});

globalStyle(`${rules} p`, {
  textAlign: 'justify',
  fontSize: vars.fontSize.desktopParagraph,
  '@media': {
    [breakpoints.w1200]: { fontSize: '1.15rem' },
    [breakpoints.w992]: { fontSize: '1rem' },
    [breakpoints.mobile]: { fontSize: vars.fontSize.mobileParagraphs },
  },
});

export const aboutImages = style({
  display: 'flex',
  marginBottom: '0.5rem',
  justifyContent: 'space-between',
});

export const aboutImage = style({
  position: 'relative',
  width: '100%',
  border: vars.borders.b1px,
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  margin: '0 0.5rem',
  paddingBottom: '15%',
  '@media': {
    [breakpoints.mobile]: { paddingBottom: '30%' },
  },
  selectors: {
    '&:first-child': { marginLeft: 0 },
    '&:last-child': { marginRight: 0 },
  },
});

globalStyle(`${aboutImage} img`, {
  position: 'absolute',
  width: '100%',
  height: '100%',
});
