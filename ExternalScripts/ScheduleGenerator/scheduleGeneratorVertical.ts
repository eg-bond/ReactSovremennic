import { dayKeyToDateName } from './utils/mappings';
import type { ScheduleData } from './utils/transformSchedule';
import type { AgeRatingMapping, PirateMapping } from './utils/mappings';

const VERTICAL_STYLES = {
  background: '#ffffff',
  textColor: '#000000',
  accentColor: '#FFD700',
  timeColor: '#dc2626',
  fontFamily: 'Microsoft Sans Serif, Arial, sans-serif',
  headerFontSize: 32,
  dayFontSize: 24,
  padding: 20,
  headerPadding: 30,
  dayPadding: 45,
  sectionGap: 25,
  cardGap: 10,
  cardPadding: 10,
  cardBorderWidth: 2,
  cardBorderColor: '#cccccc',
  cardTitleMaxLines: 2,
  cardTitleLineHeight: 16,
  cardContentGap: 4,
  // Base font sizes for card elements (before scaling by card width)
  cardTitleBaseFontSize: 12, // базовый размер для названия фильма
  cardTimeBaseFontSize: 16, // базовый размер для времени
  cardPriceBaseFontSize: 12, // базовый размер для цены
  cardFormatBaseFontSize: 10, // базовый размер для формата (2D/3D)
  cardAgeBaseFontSize: 12, // базовый размер для возраста
  // Отступы для времени и цены
  cardTimeOffsetFromTop: 80, // отступ для блока времени от верхней границы карточки
  cardPriceOffsetFromTime: 40, // отступ для блока цены от блока времени
} as const;

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

const getLayoutConfig = (numSeancesPerDay: number[]): LayoutConfig => {
  // Находим максимальное количество сеансов в день
  const maxSeances = Math.max(...numSeancesPerDay);

  const contentWidth = 1080 - VERTICAL_STYLES.padding * 2;
  const cardGap = VERTICAL_STYLES.cardGap;
  const cardWidth = (contentWidth - cardGap * (maxSeances - 1)) / maxSeances;
  const cardHeight = cardWidth * 1.4; // Высота больше ширины

  return {
    cardWidth,
    cardHeight,
    contentWidth,
    fontSizes: {
      cardTitle: calculateFontSize(
        cardWidth,
        VERTICAL_STYLES.cardTitleBaseFontSize,
      ),
      cardTime: calculateFontSize(
        cardWidth,
        VERTICAL_STYLES.cardTimeBaseFontSize,
      ),
      cardPrice: calculateFontSize(
        cardWidth,
        VERTICAL_STYLES.cardPriceBaseFontSize,
      ),
      cardFormat: calculateFontSize(
        cardWidth,
        VERTICAL_STYLES.cardFormatBaseFontSize,
      ),
      cardAge: calculateFontSize(
        cardWidth,
        VERTICAL_STYLES.cardAgeBaseFontSize,
      ),
    },
  };
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
): number => {
  ctx.fillStyle = color;
  ctx.font = `${fontSize}px ${VERTICAL_STYLES.fontFamily}`;
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
) => {
  const padding = VERTICAL_STYLES.cardPadding;
  const borderWidth = VERTICAL_STYLES.cardBorderWidth;

  // Draw border
  ctx.strokeStyle = VERTICAL_STYLES.cardBorderColor;
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(x, y, width, height);

  // Draw title (top, centered)
  const titleY = y + padding;
  const cleanTitle = filmTitle.replace(/\s*2D\s*|\s*3D\s*/g, ' ').trim();
  drawText(
    ctx,
    cleanTitle,
    x + width / 2,
    titleY,
    fontSizes.cardTitle,
    VERTICAL_STYLES.textColor,
    'center',
    width - padding * 2,
  );

  // Draw time (red, centered) - using fixed offset from top
  const timeY = y + VERTICAL_STYLES.cardTimeOffsetFromTop;
  drawText(
    ctx,
    time,
    x + width / 2,
    timeY,
    fontSizes.cardTime,
    VERTICAL_STYLES.timeColor,
    'center',
  );

  // Draw price (centered) - using fixed offset from time
  const priceY = timeY + VERTICAL_STYLES.cardPriceOffsetFromTime;
  drawText(
    ctx,
    `${price} ₽`,
    x + width / 2,
    priceY,
    fontSizes.cardPrice,
    VERTICAL_STYLES.textColor,
    'center',
  );

  // Draw format (2D/3D) - bottom left
  const formatY = y + height - padding - fontSizes.cardFormat;
  drawText(
    ctx,
    format,
    x + padding,
    formatY,
    fontSizes.cardFormat,
    VERTICAL_STYLES.textColor,
    'left',
  );

  // Draw age rating - bottom right
  if (ageRating) {
    drawText(
      ctx,
      ageRating,
      x + width - padding,
      formatY,
      fontSizes.cardAge,
      VERTICAL_STYLES.accentColor,
      'right',
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
        ageRating: ageRatingMapping?.[filmTitle],
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
): number => {
  const contentX = VERTICAL_STYLES.padding;
  const containerWidth = 1080 - VERTICAL_STYLES.padding * 2;
  const totalCardsWidth = config.cardWidth * seances.length;

  // Calculate space-between distribution
  let gap = VERTICAL_STYLES.cardGap;
  if (seances.length > 1) {
    const availableSpace = containerWidth - totalCardsWidth;
    gap = availableSpace / (seances.length - 1);
  }

  // Draw day name (red)
  drawText(
    ctx,
    dayName,
    1080 / 2,
    startY,
    VERTICAL_STYLES.dayFontSize,
    VERTICAL_STYLES.timeColor,
    'center',
  );

  const currentY = startY + VERTICAL_STYLES.dayFontSize + VERTICAL_STYLES.dayPadding;

  // Draw seance cards in one row with space-between distribution
  seances.forEach((seance, idx) => {
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
    );
  });

  return currentY + config.cardHeight + VERTICAL_STYLES.sectionGap;
};

export const drawWeekdaySchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  width: number,
  height: number,
  pirateMapping?: PirateMapping,
): Promise<void> => {
  // White background
  ctx.fillStyle = VERTICAL_STYLES.background;
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
  const config = getLayoutConfig(numSeancesPerDay);

  let currentY: number = VERTICAL_STYLES.headerPadding;

  // Draw header
  drawText(
    ctx,
    'КИНОТЕАТР "СОВРЕМЕННИК"',
    width / 2,
    currentY,
    VERTICAL_STYLES.headerFontSize,
    VERTICAL_STYLES.textColor,
    'center',
  );

  currentY += VERTICAL_STYLES.headerFontSize + VERTICAL_STYLES.dayPadding;

  // Draw each day section
  for (const daySeances of daySeancesArray) {
    currentY = drawDaySection(
      ctx,
      daySeances.dayName,
      daySeances.seances,
      currentY,
      config,
    );
  }
};

export const drawWeekendSchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  width: number,
  height: number,
  pirateMapping?: PirateMapping,
): Promise<void> => {
  // White background
  ctx.fillStyle = VERTICAL_STYLES.background;
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
  const config = getLayoutConfig(numSeancesPerDay);

  let currentY: number = VERTICAL_STYLES.headerPadding;

  // Draw header
  drawText(
    ctx,
    'КИНОТЕАТР "СОВРЕМЕННИК"',
    width / 2,
    currentY,
    VERTICAL_STYLES.headerFontSize,
    VERTICAL_STYLES.textColor,
    'center',
  );

  currentY += VERTICAL_STYLES.headerFontSize + VERTICAL_STYLES.dayPadding;

  // Draw each day section
  for (const daySeances of daySeancesArray) {
    currentY = drawDaySection(
      ctx,
      daySeances.dayName,
      daySeances.seances,
      currentY,
      config,
    );
  }
};

export const generateWeekdayScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  pirateMapping?: PirateMapping,
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
    );
    return canvas.toDataURL('image/jpeg') as string;
  }
  return '';
};

export const generateWeekendScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  pirateMapping?: PirateMapping,
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
    );
  } else {
    await drawWeekendSchedule(
      ctx,
      scheduleData,
      ageRatingMapping,
      canvas.width,
      canvas.height,
      pirateMapping,
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
