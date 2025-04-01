export const PRE_SHOW_SERVICE = '(предсеансовое обслуживание)';
export const PRE_SHOW_SERVICE_SHORT = '(предс. обслуживание)';

export const Y_MAPS_SRC =
'https://yandex.ru/map-widget/v1/?um=constructor%' +
'3Ab3cf16ca0bc3eed0838b34be9c0607866b4c270427026b7fe0dd14ef4096116b' +
'&amp;source=constructor';

// Styled-components constants
const breakpoints = {
  w530: '530px',
  w768: '767.5px',
  w992: '992px',
  w1200: '1200px',
} as const;

export const SCREEN_WIDTH = {
  BELOW_1200: `(max-width: ${breakpoints.w1200})`,
  BELOW_992: `(max-width: ${breakpoints.w992})`,
  BELOW_768:
  `(max-width: ${breakpoints.w768}), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)`,
  BELOW_530: `(max-width: ${breakpoints.w530})`,
} as const;

const DESCTOP_BASIC_TITLE_FS = 2;
// H1 font sizes
export const H1_FS = {
  BASIC: `${DESCTOP_BASIC_TITLE_FS}rem`,
  BELOW_1200: `${DESCTOP_BASIC_TITLE_FS * 0.8}rem`,
  BELOW_992: `${DESCTOP_BASIC_TITLE_FS * 0.6}rem`,
} as const;
// H2 font sizes
export const H2_FS = {
  BASIC: `${DESCTOP_BASIC_TITLE_FS * 0.8}rem`,
  BELOW_1200: `${DESCTOP_BASIC_TITLE_FS * 0.65}rem`,
  BELOW_992: `${DESCTOP_BASIC_TITLE_FS * 0.5}rem`,
} as const;

export type FontConstT = {
  BASIC: string;
  BELOW_1200: string;
  BELOW_992: string;
};

export const MOBILE_P_FS = '2.3vw';
const MOBILE_BASIC_TITLE_FS = 3.5;
export const MOBILE_TITLE_FS = {
  H1: `${MOBILE_BASIC_TITLE_FS}vw`,
  H2: `${MOBILE_BASIC_TITLE_FS * 0.85}vw`,
} as const;
