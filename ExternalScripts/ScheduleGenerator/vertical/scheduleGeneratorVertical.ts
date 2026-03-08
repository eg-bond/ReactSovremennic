import { VERTICAL_STYLES } from './verticalStyles';
import { dayKeyToDateName } from '../utils/mappings';
import type { ScheduleData } from '../utils/transformSchedule';
import type { AgeRatingMapping, PirateMapping } from '../utils/mappings';

export interface StyleOverrides {
  headerPaddingBottom?: number;
  sectionGap?: number;
}

interface SeanceInfo {
  ageRating?: string;
  filmTitle: string;
  format: string;
  price: string;
  time: string;
}

interface DaySeances {
  dayKey: string;
  dayName: string;
  seances: SeanceInfo[];
}

interface LayoutConfig {
  cardHeight: number;
  cardWidth: number;
  contentWidth: number;
  fontSizes: {
    cardAge: number;
    cardFormat: number;
    cardPrice: number;
    cardTime: number;
    cardTitle: number;
  };
}

const calculateFontSize = (cardWidth: number, baseSize: number): number => {
  // Масштабируем шрифт в зависимости от ширины карточки
  const scaleFactor = cardWidth / 100; // 100 - базовая ширина
  return Math.max(8, Math.round(baseSize * scaleFactor));
};

const getLayoutConfig = (
  numSeancesPerDay: number[],
  styleOverrides?: StyleOverrides,
): LayoutConfig => {
  // Находим максимальное количество сеансов в день
  const maxSeances = Math.max(...numSeancesPerDay);

  const styles = { ...VERTICAL_STYLES, ...styleOverrides };
  const contentWidth = 1080 - styles.padding * 2;
  const cardGap = styles.cardGap;
  const cardWidth = (contentWidth - cardGap * (maxSeances - 1)) / maxSeances;
  const cardHeight = cardWidth * 1.4; // Высота больше ширины

  return {
    cardWidth,
    cardHeight,
    contentWidth,
    fontSizes: {
      cardTitle: calculateFontSize(
        cardWidth,
        styles.cardTitleBaseFontSize,
      ),
      cardTime: calculateFontSize(
        cardWidth,
        styles.cardTimeBaseFontSize,
      ),
      cardPrice: calculateFontSize(
        cardWidth,
        styles.cardPriceBaseFontSize,
      ),
      cardFormat: calculateFontSize(
        cardWidth,
        styles.cardFormatBaseFontSize,
      ),
      cardAge: calculateFontSize(
        cardWidth,
        styles.cardAgeBaseFontSize,
      ),
    },
  };
};

const getEffectiveStyles = (styleOverrides?: StyleOverrides) => {
  return { ...VERTICAL_STYLES, ...styleOverrides } as typeof VERTICAL_STYLES;
};

const drawOval = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(
    x + width / 2,
    y + height / 2,
    width / 2,
    height / 2,
    0,
    0,
    Math.PI * 2,
  );
  ctx.fill();
};

const drawText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  fontSize: number,
  color: string = VERTICAL_STYLES.textColor,
  align: CanvasTextAlign = 'center',
  maxWidth?: number,
  fontFamily?: string,
): number => {
  ctx.fillStyle = color;
  ctx.font = `${fontSize}px ${fontFamily || VERTICAL_STYLES.fontFamily}`;
  ctx.textAlign = align;
  ctx.textBaseline = 'top';

  let linesDrawn = 0;

  if (maxWidth) {
    const words = text.split(' ');
    let line = '';
    let lineY = y;
    const lineHeight = fontSize + 2;

    words.forEach((word) => {
      const testLine = line + (line ? ' ' : '') + word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line) {
        ctx.fillText(line, x, lineY);
        linesDrawn++;
        line = word;
        lineY += lineHeight;
      } else {
        line = testLine;
      }
    });
    if (line) {
      ctx.fillText(line, x, lineY);
      linesDrawn++;
    }
  } else {
    ctx.fillText(text, x, y);
    linesDrawn = 1;
  }

  return linesDrawn;
};

const drawSeanceCard = (
  ctx: CanvasRenderingContext2D,
  filmTitle: string,
  time: string,
  price: string,
  format: string,
  ageRating: string | undefined,
  x: number,
  y: number,
  width: number,
  height: number,
  fontSizes: LayoutConfig['fontSizes'],
  styles: typeof VERTICAL_STYLES = VERTICAL_STYLES,
) => {
  const paddingVertical = styles.cardPaddingVertical;
  const paddingHorizontal = styles.cardPaddingHorizontal;
  const borderWidth = styles.cardBorderWidth;

  // Draw border
  ctx.strokeStyle = styles.cardBorderColor;
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(x, y, width, height);

  // Draw title (top, centered)
  const titleY = y + paddingVertical;
  const cleanTitle = filmTitle.replace(/\s*2D\s*|\s*3D\s*/g, ' ').trim();
  drawText(
    ctx,
    cleanTitle,
    x + width / 2,
    titleY,
    fontSizes.cardTitle,
    styles.textColor,
    'center',
    width - paddingHorizontal * 2,
    styles.cardTitleFontFamily,
  );

  // Draw time (red, centered) - using fixed offset from top
  const timeY = y + styles.cardTimeOffsetFromTop;
  drawText(
    ctx,
    time,
    x + width / 2,
    timeY,
    fontSizes.cardTime,
    styles.timeColor,
    'center',
    undefined,
    styles.cardTimeFontFamily,
  );

  // Draw price (centered) - using fixed offset from time
  const basePriceY = timeY + styles.cardPriceOffsetFromTime;
  const displayPrice = price.replace('₽', 'р.');

  // Рассчитать размер овала
  const ovalWidth = fontSizes.cardPrice * 4.5; // примерная ширина
  const ovalHeight = styles.priceOvalHeight;
  const ovalX = x + width / 2 - ovalWidth / 2;
  const ovalY = basePriceY - ovalHeight / 2;

  // Нарисовать овал
  drawOval(ctx, ovalX, ovalY, ovalWidth, ovalHeight, styles.priceOvalColor);

  // Calculate text position with offset
  const priceTextY = basePriceY + styles.priceOvalOffsetY;

  // Нарисовать текст цены поверх овала
  drawText(
    ctx,
    displayPrice,
    x + width / 2,
    priceTextY,
    fontSizes.cardPrice,
    styles.textColor,
    'center',
    undefined,
    styles.cardPriceFontFamily,
  );

  // Draw format (2D/3D) - bottom left
  const formatY = y + height - paddingVertical - fontSizes.cardFormat;
  drawText(
    ctx,
    format,
    x + paddingHorizontal + 2,
    formatY,
    fontSizes.cardFormat,
    styles.textColor,
    'left',
    undefined,
    styles.cardFormatAgeFontFamily,
  );

  // Draw age rating - bottom right
  if (ageRating) {
    // Draw age rating text at original formatY position (without offsets)
    drawText(
      ctx,
      ageRating,
      x + width - paddingHorizontal - 2,
      formatY,
      fontSizes.cardAge,
      styles.accentColor,
      'right',
      undefined,
      styles.cardFormatAgeFontFamily,
    );
  }
};

const collectDaySeances = (
  scheduleData: ScheduleData,
  dayKey: string,
  ageRatingMapping: AgeRatingMapping | undefined,
  pirateMapping?: PirateMapping,
): SeanceInfo[] => {
  const daySchedule = scheduleData[dayKey];
  if (!daySchedule) return [];

  const seances: SeanceInfo[] = [];

  for (const filmTitle of daySchedule.titles) {
    const seancesForFilm = daySchedule.seansScedule[filmTitle];
    for (const [time, , , price] of seancesForFilm) {
      let displayTitle = filmTitle;
      // Получить нормализованное название (без суффикса)
      const normalizedTitle = filmTitle.replace(
        /\s*\(предс\.\s*обсл\.\)\s*$/g,
        '',
      ).trim();

      // Заменить "(предс. обсл.)" на "*" если фильм в pirateMapping
      if (pirateMapping?.[normalizedTitle]) {
        displayTitle = filmTitle
          .replace(/\s*\(предс\.\s*обсл\.\)\s*$/g, ' *')
          .trim();
      }

      seances.push({
        filmTitle: displayTitle,
        time,
        price,
        format: filmTitle.includes('3D') ? '3D' : '2D',
        ageRating: ageRatingMapping?.[normalizedTitle],
      });
    }
  }

  return seances;
};

const drawDaySection = (
  ctx: CanvasRenderingContext2D,
  dayName: string,
  seances: SeanceInfo[],
  startY: number,
  config: LayoutConfig,
  styles: typeof VERTICAL_STYLES = VERTICAL_STYLES,
): number => {
  const contentX = styles.padding;
  const containerWidth = 1080 - styles.padding * 2;
  const totalCardsWidth = config.cardWidth * seances.length;

  // Calculate space-between distribution
  let gap = styles.cardGap;
  if (seances.length > 1) {
    const availableSpace = containerWidth - totalCardsWidth;
    gap = availableSpace / (seances.length - 1);
  }

  // Sort seances by time (earliest to latest)
  const sortedSeances = [...seances].sort((a, b) => {
    const timeA = a.time.split(':').map(Number);
    const timeB = b.time.split(':').map(Number);
    const minutesA = timeA[0] * 60 + timeA[1];
    const minutesB = timeB[0] * 60 + timeB[1];
    return minutesA - minutesB;
  });

  // Draw day name (red)
  drawText(
    ctx,
    dayName.toUpperCase(),
    1080 / 2,
    startY,
    styles.dayFontSize,
    styles.timeColor,
    'center',
    undefined,
    styles.dayFontFamily,
  );

  const currentY = startY + styles.dayFontSize + styles.dayPadding;

  // Draw seance cards in one row with space-between distribution
  sortedSeances.forEach((seance, idx) => {
    const cardX = contentX + idx * (config.cardWidth + gap);
    const cardY = currentY;

    drawSeanceCard(
      ctx,
      seance.filmTitle,
      seance.time,
      seance.price,
      seance.format,
      seance.ageRating,
      cardX,
      cardY,
      config.cardWidth,
      config.cardHeight,
      config.fontSizes,
      styles,
    );
  });

  return currentY + config.cardHeight + styles.sectionGap;
};

const drawFooter = (
  ctx: CanvasRenderingContext2D,
  y: number,
  width: number,
) => {
  const footerText =
    '* - В РАМКАХ ПРЕДСЕАНСОВОГО ОБСЛУЖИВАНИЯ ПЕРЕД МУЛЬТФИЛЬМОМ "СНЕГУР"';
  drawText(
    ctx,
    footerText,
    width / 2,
    y,
    VERTICAL_STYLES.footerFontSize,
    VERTICAL_STYLES.textColor,
    'center',
    width - VERTICAL_STYLES.padding * 2,
    VERTICAL_STYLES.headerFontFamily,
  );
};

export const drawWeekdaySchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  width: number,
  height: number,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
): Promise<void> => {
  const styles = getEffectiveStyles(styleOverrides);

  // White background
  ctx.fillStyle = styles.background;
  ctx.fillRect(0, 0, width, height);

  const weekdayKeys = ['day1', 'day2', 'day3'];
  const daySeancesArray: DaySeances[] = [];

  // Collect seances for each day
  for (const dayKey of weekdayKeys) {
    const seances = collectDaySeances(
      scheduleData,
      dayKey,
      ageRatingMapping,
      pirateMapping,
    );
    if (seances.length > 0) {
      daySeancesArray.push({
        dayKey,
        dayName: dayKeyToDateName[dayKey],
        seances,
      });
    }
  }

  // Calculate layout based on max seances per day
  const numSeancesPerDay = daySeancesArray.map(d => d.seances.length);
  const config = getLayoutConfig(numSeancesPerDay, styleOverrides);

  let currentY: number = styles.headerPadding;

  // Draw header
  drawText(
    ctx,
    'КИНОТЕАТР "СОВРЕМЕННИК"',
    width / 2,
    currentY,
    styles.headerFontSize,
    styles.textColor,
    'center',
    undefined,
    styles.headerFontFamily,
  );

  currentY += styles.headerFontSize + styles.headerPaddingBottom;

  // Draw each day section
  for (const daySeances of daySeancesArray) {
    currentY = drawDaySection(
      ctx,
      daySeances.dayName,
      daySeances.seances,
      currentY,
      config,
      styles,
    );
  }

  // Draw footer
  const footerY =
    height -
    styles.footerPadding -
    styles.footerFontSize;
  drawFooter(ctx, footerY, width);
};

export const drawWeekendSchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  width: number,
  height: number,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
): Promise<void> => {
  const styles = getEffectiveStyles(styleOverrides);

  // White background
  ctx.fillStyle = styles.background;
  ctx.fillRect(0, 0, width, height);

  const weekendKeys = ['day4', 'day5', 'day6', 'day0'];
  const daySeancesArray: DaySeances[] = [];

  // Collect seances for each day
  for (const dayKey of weekendKeys) {
    const seances = collectDaySeances(
      scheduleData,
      dayKey,
      ageRatingMapping,
      pirateMapping,
    );
    if (seances.length > 0) {
      daySeancesArray.push({
        dayKey,
        dayName: dayKeyToDateName[dayKey],
        seances,
      });
    }
  }

  // Calculate layout based on max seances per day
  const numSeancesPerDay = daySeancesArray.map(d => d.seances.length);
  const config = getLayoutConfig(numSeancesPerDay, styleOverrides);

  let currentY: number = styles.headerPadding;

  // Draw header
  drawText(
    ctx,
    'КИНОТЕАТР "СОВРЕМЕННИК"',
    width / 2,
    currentY,
    styles.headerFontSize,
    styles.textColor,
    'center',
    undefined,
    styles.headerFontFamily,
  );

  currentY += styles.headerFontSize + styles.headerPaddingBottom;

  // Draw each day section
  for (const daySeances of daySeancesArray) {
    currentY = drawDaySection(
      ctx,
      daySeances.dayName,
      daySeances.seances,
      currentY,
      config,
      styles,
    );
  }

  // Draw footer
  const footerY =
    height -
    styles.footerPadding -
    styles.footerFontSize;
  drawFooter(ctx, footerY, width);
};

export const generateWeekdayScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    await drawWeekdaySchedule(
      ctx,
      scheduleData,
      ageRatingMapping,
      canvas.width,
      canvas.height,
      pirateMapping,
      styleOverrides,
    );
    return canvas.toDataURL('image/jpeg') as string;
  }
  return '';
};

export const generateWeekendScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    await drawWeekendSchedule(
      ctx,
      scheduleData,
      ageRatingMapping,
      canvas.width,
      canvas.height,
      pirateMapping,
      styleOverrides,
    );
    return canvas.toDataURL('image/jpeg') as string;
  }
  return '';
};

// Backward compatibility - for single day preview
export const generateVerticalScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (!ctx) return '';

  const isWeekday = ['day1', 'day2', 'day3'].includes(dayKey);

  if (isWeekday) {
    await drawWeekdaySchedule(
      ctx,
      scheduleData,
      ageRatingMapping,
      canvas.width,
      canvas.height,
      pirateMapping,
      styleOverrides,
    );
  } else {
    await drawWeekendSchedule(
      ctx,
      scheduleData,
      ageRatingMapping,
      canvas.width,
      canvas.height,
      pirateMapping,
      styleOverrides,
    );
  }

  return canvas.toDataURL('image/jpeg') as string;
};

export const downloadImage = (dataUrl: string, filename: string) => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
};
