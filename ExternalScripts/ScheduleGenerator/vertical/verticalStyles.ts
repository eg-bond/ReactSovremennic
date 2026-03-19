const MOST_IMPORTANT_STYLES = {
  headerPaddingBottom: 50, // 180 для 3х, 80 для 4х
  sectionGap: 30, // 140 для 3х, 80 для 4х
  // Fonts
  primaryFont: 'Audex Regular, sans-serif',
  secondaryFont: 'Microsoft Sans Serif, sans-serif',
  // primaryFont: 'Gerhaus Regular, sans-serif',
  // colors
  red: '#dc2626',
  black: '#000000',
  white: '#ffffff',
  gray: '#e0e0e0',
  purple: '#9f6aff',
};

export const VERTICAL_STYLES = {
  // Цвета ------------------------------------------------------
  background: MOST_IMPORTANT_STYLES.black,
  textColor: MOST_IMPORTANT_STYLES.black,
  weekDayColor: MOST_IMPORTANT_STYLES.white,
  timeColor: MOST_IMPORTANT_STYLES.red,
  cardBorderColor: MOST_IMPORTANT_STYLES.black,
  priceOvalColor: MOST_IMPORTANT_STYLES.gray,
  pirateDotColor: '#93cac4',
  ageRatingDotColor: MOST_IMPORTANT_STYLES.white,
  ageRatingTextColor: MOST_IMPORTANT_STYLES.black,
  // Свечение заголовка
  headerColor: MOST_IMPORTANT_STYLES.purple,
  headerGlowColor: MOST_IMPORTANT_STYLES.purple,
  headerGlowBlur: 60,
  headerGlowLayers: 5,
  footerColor: MOST_IMPORTANT_STYLES.white,
  // Фоновая картинка
  backgroundImage: '/ExternalScripts/ScheduleGenerator/vertical/back.jpg',
  gradientStart: '#381d98',
  gradientEnd: '#e4774d',
  // Font Families -----------------------------------------------
  fontFamily: MOST_IMPORTANT_STYLES.secondaryFont,
  headerFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  dayFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  cardTitleFontFamily: MOST_IMPORTANT_STYLES.secondaryFont,
  cardTimeFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  cardPriceFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  cardFormatAgeFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  // Font Sizes -----------------------------------------------------
  headerFontSize: 64,
  dayFontSize: 32,
  footerFontSize: 22,
  // Базовые FS для элементов карточки (до скалирования по ширине карточки)
  cardTitleBaseFontSize: 12,
  cardTimeBaseFontSize: 14,
  cardPriceBaseFontSize: 14,
  cardFormatBaseFontSize: 15,
  cardAgeBaseFontSize: 15,
  // Отступы ------------------------------------------------------
  padding: 20,
  headerPadding: 80,
  headerPaddingBottom: MOST_IMPORTANT_STYLES.headerPaddingBottom,
  footerPadding: 80,
  dayPadding: 25,
  sectionGap: MOST_IMPORTANT_STYLES.sectionGap,
  // Отступы элементов внутри карточки
  cardTimeOffsetFromTop: 80,
  cardPriceOffsetFromTime: 80,
  cardPaddingVertical: 10,
  cardPaddingHorizontal: 6,
  // Прочее ---------------------------------------------------------
  cardBorderWidth: 3,
  cardGap: 15,
  // Обводка постера -------------------------------------------------
  posterBorderWidth: 2,
  posterBorderRadius: 15,
  // Стили овала цены ------------------------------------------------
  priceOvalPadding: 18,
  priceOvalHeight: 60,
  priceOvalOffsetY: -12,
} as const;
