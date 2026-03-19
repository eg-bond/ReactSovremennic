// Пресеты для быстрого переключения количества дней
export const PRESETS = {
  days3: { headerPaddingBottom: 150, sectionGap: 150 },
  days4: { headerPaddingBottom: 65, sectionGap: 65 },
} as const;

const FONT = 'Audex Regular, sans-serif';

const COLORS = {
  red: '#dc2626',
  black: '#000000',
  white: '#ffffff',
  purple: '#9f6aff',
  teal: '#93cac4',
  gradient1: '#381d98',
  gradient2: '#e4774d',
};

export const VERTICAL_STYLES = {
  // Фон ----------------------------------------------------------
  background: COLORS.black,
  backgroundImage: '/ExternalScripts/ScheduleGenerator/vertical/back.jpg',
  // Цвета --------------------------------------------------------
  textColor: COLORS.black,
  weekDayColor: COLORS.white,
  footerColor: COLORS.white,
  // Градиент (обводка постера + блок времени)
  gradientStart: COLORS.gradient1,
  gradientEnd: COLORS.gradient2,
  // Кружок пирата
  pirateDotColor: COLORS.teal,
  // Кружок возрастного рейтинга
  ageRatingDotColor: COLORS.white,
  ageRatingTextColor: COLORS.black,
  // Заголовок "РАСПИСАНИЕ" ---------------------------------------
  headerColor: COLORS.purple,
  headerGlowBlur: 60,
  headerGlowLayers: 3,
  // Шрифт --------------------------------------------------------
  fontFamily: FONT,
  // Размеры шрифтов
  headerFontSize: 70,
  dayFontSize: 32,
  footerFontSize: 22,
  cardTimeBaseFontSize: 14,
  cardPriceBaseFontSize: 14,
  cardAgeBaseFontSize: 17,
  // Отступы ------------------------------------------------------
  padding: 20,
  headerPadding: 80,
  headerPaddingBottom: 150, // 150 для 3х дней, 65 для 4х
  footerPadding: 80,
  dayPadding: 25,
  sectionGap: 150, // 150 для 3х дней, 65 для 4х
  // Карточки -----------------------------------------------------
  cardGap: 15,
  posterBorderWidth: 2,
  posterBorderRadius: 15,
} as const;
