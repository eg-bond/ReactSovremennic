import { globalFontFace, globalStyle, keyframes } from '@vanilla-extract/css';
import { breakpoints } from './theme.css';

// ─── Fonts ───────────────────────────────────────────────────────────────────

globalFontFace('JostLocal', {
  fontStyle: 'normal',
  fontWeight: '400',
  src: 'url(\'./fonts/Jost-Regular.woff2\') format(\'woff2\')',
});

globalFontFace('JostLocal', {
  fontStyle: 'normal',
  fontWeight: '600',
  src: 'url(\'./fonts/Jost-SemiBold.woff2\') format(\'woff2\')',
});

// ─── Reset & Base ────────────────────────────────────────────────────────────

globalStyle('*, :after, :before', { boxSizing: 'border-box' });
globalStyle('body', { lineHeight: '1.42857143' });
globalStyle('hr', { border: '0', marginTop: '0', marginBottom: '0' });
globalStyle('h1, h2, h3', { marginTop: '20px', marginBottom: '10px' });
globalStyle('h4, h5, h6', { marginTop: '10px', marginBottom: '10px' });

globalStyle('*', {
  margin: 0,
  padding: 0,
  fontFamily: 'JostLocal',
});

// ─── HTML & CSS Variables ────────────────────────────────────────────────────

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
  '@media': {
    [breakpoints.w1200]: {
      vars: { '--titleFS': '2rem', '--paragraphFS': '1.15rem' },
    },
    [breakpoints.w992]: {
      vars: { '--titleFS': '1.6rem', '--paragraphFS': '1rem' },
    },
  },
});

globalStyle('html::-webkit-scrollbar', {
  '@media': { [breakpoints.mobile]: { display: 'none' } },
});

// ─── Typography ──────────────────────────────────────────────────────────────

globalStyle('a', {
  color: 'var(--secondaryClr)',
  textDecoration: 'none',
  fontWeight: '600',
});

globalStyle('a:focus', { outline: 'none' });

globalStyle('p', { color: 'var(--secondaryClr)', margin: '0 0 10px' });

globalStyle('button', { fontWeight: '600' });
globalStyle('button, table', { color: 'var(--secondaryClr)' });

globalStyle('h1, h2, h3, h4, h5, h6', {
  lineHeight: '1',
  color: 'var(--secondaryClr)',
  fontWeight: '600',
});

globalStyle('img', { verticalAlign: 'middle' });
globalStyle('img, article', { transition: 'all 0.3s' });

// ─── Interactive Elements ────────────────────────────────────────────────────

globalStyle(
  'button, html input[type=\'button\'], input[type=\'reset\'], input[type=\'submit\']',
  { cursor: 'pointer' },
);

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

globalStyle('.fill_button:focus:not(:focus-visible)', { outline: 'none' });

// ─── Utility Classes ─────────────────────────────────────────────────────────

globalStyle('.hidden', { display: 'none' });
globalStyle('.hidden-xs', {
  '@media': { [breakpoints.mobile]: { display: 'none' } },
});
globalStyle('.displayMobile', {
  display: 'none',
  '@media': { [breakpoints.mobile]: { display: 'block' } },
});

globalStyle('.contentMT', {
  paddingTop: 'var(--desktopContentMT)',
  '@media': { [breakpoints.mobile]: { paddingTop: 'var(--mobileContentMT)' } },
});

globalStyle('.hideImages img, .hideImages article', {
  opacity: '0 !important' as '0',
});

// ─── Layout ──────────────────────────────────────────────────────────────────

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

// Grid columns
globalStyle('.content__gridLeftItem--3fr', {
  gridColumn: '1/4',
  margin: '0 15px',
  '@media': { [breakpoints.mobile]: { gridColumn: '1/5', margin: '0 1.5vw' } },
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
  '@media': { [breakpoints.mobile]: { gridColumn: '1/5', margin: '0 15px' } },
});

// ─── Hero Space ──────────────────────────────────────────────────────────────

globalStyle('.space', {
  backgroundImage: 'url(\'../images/main_image.webp\')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  opacity: 1,
  height: '335px',
  '@media': {
    [breakpoints.w1200]: { height: '275px' },
    [breakpoints.w992]: { height: '213px' },
    [breakpoints.mobile]: { display: 'none' },
  },
});

// ─── Embed Responsive ────────────────────────────────────────────────────────

globalStyle('.embed-responsive', {
  position: 'relative',
  border: 'solid 1px var(--secondaryClr)',
  borderRadius: '10px',
  overflow: 'hidden',
  marginBottom: '2%',
  width: '100%',
  paddingTop: '55%',
  '@media': { [breakpoints.mobile]: { marginBottom: '3%' } },
});

globalStyle(
  '.embed-responsive .embed-responsive-item, .embed-responsive embed, ' +
  '.embed-responsive iframe',
  {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '0',
    borderRadius: '10px',
  },
);

globalStyle('.embed-responsive-16by9', { paddingBottom: '56.25%' });

// ─── Mobile Separator ────────────────────────────────────────────────────────

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
    'screen and (max-width: 544px)': {
      top: 'calc(var(--navbarMobileH544) - 0.1vw)',
    },
  },
});

globalStyle('.separatorMobile--index', {
  '@media': { [breakpoints.mobile]: { margin: '0 -15px 0 -15px' } },
});

// ─── Skeleton Loading ────────────────────────────────────────────────────────

const shine = keyframes({
  to: { backgroundPosition: 'right -80px top 0' },
});

globalStyle('.skeleton', {
  backgroundImage:
    'linear-gradient(90deg, rgba(255,255,255,0), ' +
    'rgb(94 92 92 / 50%), rgba(255,255,255,0))',
  backgroundSize: '80px 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left -80px top 0',
  animation: `${shine} 1s ease infinite`,
});

globalStyle('.skeleton-Black', { backgroundColor: '#000000' });
globalStyle('.skeleton-Gray', { backgroundColor: '#2d2d2d' });

// ─── Slider Images ───────────────────────────────────────────────────────────

globalStyle('.swSlide__img', { transition: 'all 0.3s', cursor: 'pointer' });

globalStyle(
  '.swSlide__a:hover .swSlide__img, .swSlide__a:focus-visible .swSlide__img',
  { opacity: 0.85 },
);
