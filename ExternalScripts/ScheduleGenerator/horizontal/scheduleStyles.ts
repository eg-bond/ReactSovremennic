import '../../../src/SCSS/fonts.scss';

export const MOST_IMPORTANT_STYLES = {
  F2: {
    topPadding: 0,
    bottomPadding: 0,
    posterHeight: 855, // 760 или 855
  },
  F3: {
    topPadding: 0,
    bottomPadding: 0,
    posterHeight: 855, // 760 или 855
  },
  F4: {
    topPadding: 45, // 0 или 45
    bottomPadding: 45,
    posterHeight: 640,
  },
  F5: {
    topPadding: 130,
    bottomPadding: 130,
    posterHeight: 506,
  },
  F6: {
    topPadding: 150,
    bottomPadding: 150,
    posterHeight: 450,
  },
};

export const SCHEDULE_STYLES = {
  background: '#000000',
  backgroundGradientEnd: '#2a2a2a',
  accentColor: '#FFD700',
  blockBackground: '#333333',
  textColor: '#ffffff',
  filmBackgroundDark: 'rgba(0, 0, 0, 0.6)',
  filmBackgroundLight: 'rgba(60, 60, 60, 0.6)',
  borderRadius: 10,
  fontFamily: 'Audex Regular, sans-serif',
  fontFamilyBold: 'Audex Regular, sans-serif',
  // fontFamily: 'Microsoft Sans Serif, Arial, sans-serif',
  seansFontFamily: 'Audex Regular, sans-serif',
  // seansFontFamily: 'Microsoft Sans Serif, Arial, sans-serif',
  priceTextColor: '#000000',
} as const;

export const getLayoutConfig = (filmCount: number) => {
  const configs = {
    2: {
      // Paddings сверху и снизу -------------------------------------
      topPadding: MOST_IMPORTANT_STYLES.F2.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F2.bottomPadding,
      // Размеры постера ---------------------------------------------
      posterWidth: 600,
      // posterHeight: 760,
      posterHeight: MOST_IMPORTANT_STYLES.F2.posterHeight,
      // Расстояния по бокам между блоками фильмов -------------------
      spacing: 20,
      filmBlockPadding: { left: 10, right: 10, top: 30 },
      sidePadding: 40, // ???
      // Отступы сверху для заголовка, блоков с ценой от заголовка и между
      margins: { titleTop: 55, seansTop: 60, seansBetween: 110 },
      // Grid setup ---------------------------------------------------
      seansLayout: 'grid' as const, // 'grid' или 'vertical'
      seansGridColumns: 2, // количество колонок в grid
      seansGridGap: 20, // расстояние между блоками в grid
      // Блок с временем и ценой
      seansBlockWidth: 250, // не работает если seansLayout = 'grid'
      seansBlockHeight: { time: 45, price: 30 },
      timeFontSize: 28,
      priceFontSize: 25,
      // Title --------------------------------------------------------
      titlePaddingBottom: 0,
      titleLineHeight: 48, // междустрочное расстояние для заголовка
      titleFontSize: 37,
      // Pirate banner ------------------------------------------------
      pirateBannerHeight: 40,
      pirateBannerFontSize: 14,
    },
    3: {
      // Paddings сверху и снизу -------------------------------------
      topPadding: MOST_IMPORTANT_STYLES.F3.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F3.bottomPadding,
      // Размеры постера ---------------------------------------------
      posterWidth: 600,
      posterHeight: MOST_IMPORTANT_STYLES.F3.posterHeight,
      // Расстояния по бокам между блоками фильмов -------------------
      spacing: 20,
      filmBlockPadding: { left: 10, right: 10, top: 30 },
      sidePadding: 40, // ???
      // Отступы сверху для заголовка, блоков с ценой от заголовка и между
      margins: { titleTop: 55, seansTop: 60, seansBetween: 110 },
      // Grid setup ---------------------------------------------------
      seansLayout: 'grid' as const, // 'grid' или 'vertical'
      seansGridColumns: 2, // количество колонок в grid
      seansGridGap: 20, // расстояние между блоками в grid
      // Блок с временем и ценой
      seansBlockWidth: 250, // не работает если seansLayout = 'grid'
      seansBlockHeight: { time: 45, price: 30 },
      timeFontSize: 28,
      priceFontSize: 25,
      // Title --------------------------------------------------------
      titlePaddingBottom: 0,
      titleLineHeight: 48, // междустрочное расстояние для заголовка
      titleFontSize: 37,
      // Pirate banner ------------------------------------------------
      pirateBannerHeight: 40,
      pirateBannerFontSize: 14,
    },
    4: {
      // Paddings сверху и снизу -------------------------------------
      topPadding: MOST_IMPORTANT_STYLES.F4.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F4.bottomPadding,
      // Размеры постера ---------------------------------------------
      posterWidth: 450,
      posterHeight: MOST_IMPORTANT_STYLES.F4.posterHeight,
      // Расстояния по бокам между блоками фильмов -------------------
      spacing: 20,
      filmBlockPadding: { left: 5, right: 5, top: 10 },
      sidePadding: 40,
      // Отступы сверху для заголовка, блоков с ценой от заголовка и между
      margins: { titleTop: 50, seansTop: 60, seansBetween: 115 },
      // Grid setup ---------------------------------------------------
      seansLayout: 'vertical' as const, // 'grid' или 'vertical'
      seansGridColumns: 1, // количество колонок в grid
      seansGridGap: 0, // расстояние между блоками в grid
      // Блок с временем и ценой
      seansBlockWidth: 430, // не работает если seansLayout = 'grid'
      seansBlockHeight: { time: 52, price: 42 },
      timeFontSize: 30,
      priceFontSize: 26,
      // Title --------------------------------------------------------
      titlePaddingBottom: 35,
      titleLineHeight: 40, // междустрочное расстояние для заголовка
      titleFontSize: 32,
      // Pirate banner ------------------------------------------------
      pirateBannerHeight: 80,
      pirateBannerFontSize: 20,
    },
    5: {
      // Paddings сверху и снизу -------------------------------------
      topPadding: MOST_IMPORTANT_STYLES.F5.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F5.bottomPadding,
      // Размеры постера ---------------------------------------------
      posterWidth: 354,
      posterHeight: MOST_IMPORTANT_STYLES.F5.posterHeight,
      // Расстояния по бокам между блоками фильмов -------------------
      spacing: 20,
      filmBlockPadding: { left: 5, right: 5, top: 10 },
      sidePadding: 40,
      // Отступы сверху для заголовка, блоков с ценой от заголовка и между
      margins: { titleTop: 40, seansTop: 80, seansBetween: 110 },
      // Grid setup ---------------------------------------------------
      seansLayout: 'vertical' as const, // 'grid' или 'vertical'
      seansGridColumns: 1, // количество колонок в grid
      seansGridGap: 0, // расстояние между блоками в grid
      // Блок с временем и ценой
      seansBlockWidth: 340, // не работает если seansLayout = 'grid'
      seansBlockHeight: { time: 50, price: 40 },
      timeFontSize: 26,
      priceFontSize: 24,
      // Title --------------------------------------------------------
      titlePaddingBottom: 0,
      titleLineHeight: 30, // междустрочное расстояние для заголовка
      titleFontSize: 26,
      // Pirate banner ------------------------------------------------
      pirateBannerHeight: 60,
      pirateBannerFontSize: 14,
    },
    6: {
      // Paddings сверху и снизу -------------------------------------
      topPadding: MOST_IMPORTANT_STYLES.F6.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F6.bottomPadding,
      // Размеры постера ---------------------------------------------
      posterWidth: 296,
      posterHeight: MOST_IMPORTANT_STYLES.F6.posterHeight,
      // Расстояния по бокам между блоками фильмов -------------------
      spacing: 20,
      filmBlockPadding: { left: 2, right: 2, top: 5 },
      sidePadding: 40,
      // Отступы сверху для заголовка, блоков с ценой от заголовка и между
      margins: { titleTop: 45, seansTop: 85, seansBetween: 110 },
      // Grid setup ---------------------------------------------------
      seansLayout: 'vertical' as const, // 'grid' или 'vertical'
      seansGridColumns: 1, // количество колонок в grid
      seansGridGap: 0, // расстояние между блоками в grid
      // Блок с временем и ценой
      seansBlockWidth: 280, // не работает если seansLayout = 'grid'
      seansBlockHeight: { time: 50, price: 35 },
      timeFontSize: 26,
      priceFontSize: 24,
      // Title --------------------------------------------------------
      titlePaddingBottom: 0,
      titleLineHeight: 34, // междустрочное расстояние для заголовка
      titleFontSize: 21,
      // Pirate banner ------------------------------------------------
      pirateBannerHeight: 50,
      pirateBannerFontSize: 14,
    },
  };
  return configs[filmCount as 3 | 4 | 5] || configs[4];
};
