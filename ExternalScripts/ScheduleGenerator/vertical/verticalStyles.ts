const MOST_IMPORTANT_STYLES = {
  headerPaddingBottom: 80, // 180 для 3х, 80 для 4х
  sectionGap: 80, // 140 для 3х, 80 для 4х
  // Fonts
  primaryFont: 'Gerhaus Regular, sans-serif',
  secondaryFont: 'Microsoft Sans Serif, sans-serif',
  // colors
  red: '#dc2626',
  black: '#000000',
  white: '#ffffff',
  gray: '#e0e0e0',
};

export const VERTICAL_STYLES = {
  // Цвета ------------------------------------------------------
  background: MOST_IMPORTANT_STYLES.white,
  textColor: MOST_IMPORTANT_STYLES.black,
  accentColor: MOST_IMPORTANT_STYLES.red,
  timeColor: MOST_IMPORTANT_STYLES.red,
  cardBorderColor: MOST_IMPORTANT_STYLES.black,
  priceOvalColor: MOST_IMPORTANT_STYLES.gray,
  // Font Families -----------------------------------------------
  fontFamily: MOST_IMPORTANT_STYLES.secondaryFont,
  headerFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  dayFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  cardTitleFontFamily: MOST_IMPORTANT_STYLES.secondaryFont,
  cardTimeFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  cardPriceFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  cardFormatAgeFontFamily: MOST_IMPORTANT_STYLES.primaryFont,
  // Font Sizes -----------------------------------------------------
  headerFontSize: 60,
  dayFontSize: 42,
  footerFontSize: 22,
  // Базовые FS для элементов карточки (до скалирования по ширине карточки)
  cardTitleBaseFontSize: 12, // базовый размер для названия фильма
  cardTimeBaseFontSize: 26, // базовый размер для времени
  cardPriceBaseFontSize: 16, // базовый размер для цены
  cardFormatBaseFontSize: 15, // базовый размер для формата (2D/3D)
  cardAgeBaseFontSize: 15, // базовый размер для возраста
  // Отступы ------------------------------------------------------
  padding: 20, // отступ по краям
  // Заголовок "КИНОТЕАТР "СОВРЕМЕННИК"" и футер
  headerPadding: 110,
  headerPaddingBottom: MOST_IMPORTANT_STYLES.headerPaddingBottom,
  footerPadding: 110, // отступ сноски от нижнего края
  // Между секциями
  dayPadding: 25,
  sectionGap: MOST_IMPORTANT_STYLES.sectionGap,
  // Отступы элементов внутри карточки
  cardTimeOffsetFromTop: 80, // отступ для блока времени от верхней границы карточки
  cardPriceOffsetFromTime: 80, // отступ для блока цены от блока времени
  cardPaddingVertical: 10, // padding сверху и снизу внутри карточки
  cardPaddingHorizontal: 4, // padding слева и справа внутри карточки
  // Прочее ---------------------------------------------------------
  cardBorderWidth: 3,
  cardGap: 15, // Расстояние между карточками
  // Стили овала цены ------------------------------------------------
  priceOvalPadding: 18, // отступ текста от края овала
  priceOvalHeight: 60, // высота овала
  priceOvalOffsetY: -12, // fine-tuning vertical position of price text within oval
} as const;
