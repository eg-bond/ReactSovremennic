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

export const width = {
  below530: `(max-width: ${breakpoints.w530})`,
  below768:
  `(max-width: ${breakpoints.w768}), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)`,
  below992: `(max-width: ${breakpoints.w992})`,
  below1200: `(max-width: ${breakpoints.w1200})`,
} as const;

export const mobileParagraphsFS = '2.3vw';
export const mobileTitlesFS = '3.2vw';
