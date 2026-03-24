import { globalFontFace, globalStyle, keyframes } from '@vanilla-extract/css';
import { breakpoints } from './theme.css';

// ─── fonts.scss ──────────────────────────────────────────────────────────────

// Using Google Fonts Jost instead of local files
globalFontFace('Jost', {
  fontStyle: 'normal',
  fontWeight: '400',
  src: 'url(\'https://fonts.gstatic.com/s/jost/v9/92zPtBhPNqw7Ycj9d_xF6dCf.woff2\') format(\'woff2\')',
});

globalFontFace('Jost', {
  fontStyle: 'normal',
  fontWeight: '600',
  src: 'url(\'https://fonts.gstatic.com/s/jost/v9/92zPtBhPNqw7Ycj9d_xF6dCf.woff2\') format(\'woff2\')',
});

globalStyle('*, :after, :before', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  lineHeight: '1.42857143',
});

globalStyle('button, html input[type=\'button\'], input[type=\'reset\'], input[type=\'submit\']', {
  cursor: 'pointer',
});

globalStyle('img', {
  verticalAlign: 'middle',
});

globalStyle('h1, h2, h3', {
  marginTop: '20px',
  marginBottom: '10px',
});

globalStyle('h4, h5, h6', {
  marginTop: '10px',
  marginBottom: '10px',
});

globalStyle('.container', {
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media': {
    'screen and (min-width: 768px)': { width: '750px' },
    'screen and (min-width: 992px)': { width: '970px' },
    'screen and (min-width: 1200px)': { width: '1170px' },
    [breakpoints.mobile]: { width: 'auto', marginRight: '0', marginLeft: '0' },
  },
});

// ─── generalStyles.scss ──────────────────────────────────────────────────────

globalStyle('*', {
  margin: 0,
  padding: 0,
  fontFamily: 'Jost, sans-serif',
});

globalStyle('html', {
  vars: {
    '--mainClr': 'black',
    '--secondaryClr': 'white',
    '--movieTitlesClr': '#e41b2b',
    '--mobileSeparatorClr': '#292e33',
    '--htmlFontSize': '14px',
    '--desktopContentMT': '15px',
    '--mobileContentMT': '2.5vw',
    '--navbarMobileH768': '8.5vw',
    '--navbarMobileH544': '19vw',
    '--titleFS': '2.5rem',
    '--paragraphFS': '1.35rem',
  },
  backgroundColor: 'var(--mainClr)',
  fontSize: 'var(--htmlFontSize)',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('html::-webkit-scrollbar', {
  '@media': {
    [breakpoints.mobile]: { display: 'none' },
  },
});

globalStyle('html', {
  '@media': {
    [breakpoints.w1200]: {
      vars: { '--titleFS': '2rem', '--paragraphFS': '1.15rem' },
    },
    [breakpoints.w992]: {
      vars: { '--titleFS': '1.6rem', '--paragraphFS': '1rem' },
    },
  },
});

globalStyle('hr', {
  border: '0',
  marginTop: '0',
  marginBottom: '0',
});

globalStyle('a', {
  color: 'var(--secondaryClr)',
  textDecoration: 'none',
  fontWeight: '600',
});

globalStyle('a:focus', {
  outline: 'none',
});

globalStyle('p', {
  color: 'var(--secondaryClr)',
  margin: '0 0 10px',
});

globalStyle('button', {
  fontWeight: '600',
});

globalStyle('button, table', {
  color: 'var(--secondaryClr)',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  lineHeight: '1',
  color: 'var(--secondaryClr)',
  fontWeight: '600',
});

globalStyle('img, article', {
  transition: 'all 0.3s',
});

globalStyle('.opacity_0', {
  opacity: 0,
  transition: 'ease 550ms',
});

globalStyle('.opacity_1', {
  opacity: 1,
  transition: 'ease 550ms',
});

globalStyle('.displayMobile', {
  display: 'none',
  '@media': {
    [breakpoints.mobile]: { display: 'block' },
  },
});

globalStyle('.red', { color: 'red' });

globalStyle('.padd_l', { paddingLeft: '7vw' });
globalStyle('.padd_r', { paddingRight: '7vw' });

globalStyle('.contentMT', {
  paddingTop: 'var(--desktopContentMT)',
  '@media': {
    [breakpoints.mobile]: { paddingTop: 'var(--mobileContentMT)' },
  },
});

// Flex footer push
globalStyle('.flex-wrapper', {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

// Main content grid
globalStyle('.mainContainer__content', {
  display: 'grid',
  gridTemplate: '100% / repeat(4, 1fr)',
});

globalStyle('.content__gridLeftItem--3fr', {
  gridColumn: '1/4',
  margin: '0 15px',
  '@media': {
    [breakpoints.mobile]: { gridColumn: '1/5', margin: '0 1.5vw' },
  },
});

globalStyle('.content__gridRightItem--1fr', {
  gridColumn: '4/5',
  marginRight: '15px',
});

globalStyle('.content__gridLeftItem--1fr', {
  gridColumn: '1/2',
  margin: '0 15px',
});

globalStyle('.content__gridRightItem--3fr', {
  gridColumn: '2/5',
  marginRight: '15px',
  '@media': {
    [breakpoints.mobile]: { gridColumn: '1/5', margin: '0 15px' },
  },
});

globalStyle('.content__gridRightItem--full', {
  gridColumn: '1/5',
  height: '90vh',
  margin: '15px',
  '@media': {
    [breakpoints.mobile]: { gridColumn: '1/5', margin: '0 15px' },
  },
});

// Hero background image
const backImgHeight = '335px';
const backImgHeight1200 = '275px';
const backImgHeight992 = '213px';

globalStyle('.space', {
  backgroundImage: 'url(\'../images/main_image.webp\')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  opacity: 1,
  height: backImgHeight,
  '@media': {
    [breakpoints.w1200]: { height: backImgHeight1200 },
    [breakpoints.w992]: { height: backImgHeight992 },
    [breakpoints.mobile]: { display: 'none' },
  },
});

globalStyle('.hidden', { display: 'none' });

globalStyle('.hideImages img, .hideImages article', {
  opacity: '0 !important' as '0',
});

globalStyle('.mainContainer', {
  backgroundSize: `100% calc(${backImgHeight} + 1px), 100%`,
  height: '100%',
  backgroundColor: 'var(--mainClr)',
  '@media': {
    [breakpoints.w1200]: { backgroundSize: `100% calc(${backImgHeight1200} + 1px), 100%` },
    [breakpoints.w992]: { backgroundSize: `110% calc(${backImgHeight992} + 1px), 100%` },
    [breakpoints.mobile]: { backgroundImage: 'none' },
  },
});

globalStyle('.mainContainer--default', {
  backgroundColor: '#b8b8b8',
});

globalStyle('.wrapper', {
  height: '100%',
  minHeight: '85vh',
  borderTop: 'none !important',
  borderBottom: 'none !important',
  backgroundColor: 'var(--mainClr)',
  border: 'solid 5px var(--secondaryClr)',
  '@media': {
    [breakpoints.w992]: { border: 'solid 3px var(--secondaryClr)' },
    [breakpoints.mobile]: { borderWidth: '0', minHeight: '90vh' },
  },
});

globalStyle('.fill_button', {
  borderRadius: '30px',
  transition: 'all 0.4s',
  background: 'none',
});

globalStyle('.fill_button:hover', {
  color: 'var(--mainClr)',
  boxShadow: 'inset 0 0 1.5em 2em var(--secondaryClr)',
});

globalStyle('.fill_button:focus-visible', {
  color: 'var(--secondaryClr)',
  boxShadow: '0 0 0 0.25em var(--secondaryClr)',
});

globalStyle('.fill_button:focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle('.embed-responsive', {
  position: 'relative',
  border: 'solid 1px var(--secondaryClr)',
  borderRadius: '10px',
  overflow: 'hidden',
  marginBottom: '2%',
  width: '100%',
  paddingTop: '55%',
  '@media': {
    [breakpoints.mobile]: { marginBottom: '3%' },
  },
});

const embedItems = '.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe';
globalStyle(embedItems, {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '100%',
  border: '0',
  borderRadius: '10px',
});

globalStyle('.embed-responsive-16by9', {
  paddingBottom: '56.25%',
});

globalStyle('.hidden-xs', {
  '@media': {
    [breakpoints.mobile]: { display: 'none' },
  },
});

globalStyle('.separatorMobile', {
  '@media': {
    [breakpoints.mobile]: {
      height: '1vw',
      backgroundColor: 'var(--mobileSeparatorClr)',
      zIndex: 200,
    },
  },
});

globalStyle('.separatorMobile--sticky', {
  '@media': {
    [breakpoints.mobile]: {
      position: 'sticky',
      top: 'calc(var(--navbarMobileH768) - 0.1vw)',
    },
  },
});

globalStyle('.separatorMobile--sticky', {
  '@media': {
    'screen and (max-width: 544px)': {
      top: 'calc(var(--navbarMobileH544) - 0.1vw)',
    },
  },
});

globalStyle('.separatorMobile--index', {
  '@media': {
    [breakpoints.mobile]: { margin: '0 -15px 0 -15px' },
  },
});

// ─── skeletons.scss ──────────────────────────────────────────────────────────

const shine = keyframes({
  to: { backgroundPosition: 'right -80px top 0' },
});

globalStyle('.skeleton', {
  backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0), rgb(94 92 92 / 50%), rgba(255,255,255,0))',
  backgroundSize: '80px 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left -80px top 0',
  animation: `${shine} 1s ease infinite`,
});

globalStyle('.skeleton-Black', {
  backgroundColor: '#000000',
});

globalStyle('.skeleton-Gray', {
  backgroundColor: '#2d2d2d',
});

// ─── sliders.css.ts ──────────────────────────────────────────────────────────

globalStyle('.swSlide__img', {
  transition: 'all 0.3s',
  cursor: 'pointer',
});

globalStyle('.swSlide__a:hover .swSlide__img', { opacity: 0.85 });
globalStyle('.swSlide__a:focus-visible .swSlide__img', { opacity: 0.85 });
