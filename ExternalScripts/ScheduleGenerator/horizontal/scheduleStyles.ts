export const SCHEDULE_STYLES = {
  background: '#000000',
  backgroundGradientEnd: '#2a2a2a',
  accentColor: '#FFD700',
  blockBackground: '#333333',
  textColor: '#ffffff',
  filmBackgroundDark: 'rgba(0, 0, 0, 0.6)',
  filmBackgroundLight: 'rgba(60, 60, 60, 0.6)',
  borderRadius: 10,
  fontFamily: 'Microsoft Sans Serif, Arial, sans-serif',
  seansFontFamily: 'Microsoft Sans Serif, Arial, sans-serif',
  priceTextColor: '#000000',
} as const;

export const getLayoutConfig = (filmCount: number) => {
  const configs = {
    2: {
      posterWidth: 560,
      posterHeight: 760,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 30, right: 30, top: 30 },
      topPadding: 0,
      bottomPadding: 0,
      fontSize: { title: 40, time: 28, price: 25 },
      margins: { titleTop: 55, seansTop: 60, seansBetween: 110 },
      seansBlockHeight: { time: 45, price: 30 },
      seansBlockWidth: 250,
      seansLayout: 'grid' as const, // 'grid' или 'vertical'
      seansGridColumns: 2, // количество колонок в grid
      seansGridGap: 20, // расстояние между блоками в grid
      titleHeight: 0,
      titleLineHeight: 48, // междустрочное расстояние для заголовка
      pirateBannerHeight: 40,
      pirateBannerFontSize: 14,
    },
    3: {
      posterWidth: 600,
      // posterHeight: 760,
      posterHeight: 855,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 10, right: 10, top: 30 },
      topPadding: 0,
      bottomPadding: 0,
      fontSize: { title: 37, time: 28, price: 25 },
      margins: { titleTop: 55, seansTop: 60, seansBetween: 110 },
      seansBlockHeight: { time: 45, price: 30 },
      seansBlockWidth: 250,
      seansLayout: 'grid' as const, // 'grid' или 'vertical'
      seansGridColumns: 2, // количество колонок в grid
      seansGridGap: 20, // расстояние между блоками в grid
      titleHeight: 0,
      titleLineHeight: 48, // междустрочное расстояние для заголовка
      pirateBannerHeight: 40,
      pirateBannerFontSize: 14,
    },
    4: {
      posterWidth: 450,
      posterHeight: 640,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 5, right: 5, top: 10 },
      topPadding: 45,
      bottomPadding: 45,
      fontSize: { title: 34, time: 30, price: 26 },
      margins: { titleTop: 50, seansTop: 60, seansBetween: 115 },
      seansBlockHeight: { time: 55, price: 35 },
      seansBlockWidth: 430,
      seansLayout: 'vertical' as const,
      seansGridColumns: 1,
      seansGridGap: 0,
      titleHeight: 35,
      titleLineHeight: 40, // междустрочное расстояние для заголовка
      pirateBannerHeight: 80,
      pirateBannerFontSize: 20,
    },
    5: {
      posterWidth: 354,
      posterHeight: 506,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 5, right: 5, top: 10 },
      topPadding: 140,
      bottomPadding: 140,
      fontSize: { title: 24, time: 26, price: 24 },
      margins: { titleTop: 45, seansTop: 55, seansBetween: 110 },
      seansBlockHeight: { time: 50, price: 35 },
      seansBlockWidth: 340,
      seansLayout: 'vertical' as const,
      seansGridColumns: 1,
      seansGridGap: 0,
      titleHeight: 0,
      titleLineHeight: 30, // междустрочное расстояние для заголовка
      pirateBannerHeight: 40,
      pirateBannerFontSize: 14,
    },
    6: {
      posterWidth: 296,
      posterHeight: 450,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 2, right: 2, top: 5 },
      topPadding: 210,
      bottomPadding: 215,
      fontSize: { title: 28, time: 26, price: 24 },
      margins: { titleTop: 45, seansTop: 85, seansBetween: 110 },
      seansBlockHeight: { time: 50, price: 35 },
      seansBlockWidth: 280,
      seansLayout: 'vertical' as const,
      seansGridColumns: 1,
      seansGridGap: 0,
      titleHeight: 0,
      titleLineHeight: 34, // междустрочное расстояние для заголовка
      pirateBannerHeight: 40,
      pirateBannerFontSize: 14,
    },
  };
  return configs[filmCount as 3 | 4 | 5] || configs[4];
};
