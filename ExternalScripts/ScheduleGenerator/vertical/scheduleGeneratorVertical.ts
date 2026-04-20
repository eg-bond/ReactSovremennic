import { VERTICAL_STYLES } from './verticalStyles';
import { dayKeyToDateName } from '../utils/mappings';
import type { ScheduleData } from '../utils/transformSchedule';
import type { AgeRatingMapping, FilmMapping, PirateMapping } from '../utils/mappings';

export interface StyleOverrides {
  headerPaddingBottom?: number;
  sectionGap?: number;
}

interface SeanceInfo {
  ageRating?: string;
  filmTitle: string;
  format: string;
  isPirate: boolean;
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
  const scaleFactor = cardWidth / 100;
  return Math.max(8, Math.round(baseSize * scaleFactor));
};

const getLayoutConfig = (
  numSeancesPerDay: number[],
  styleOverrides?: StyleOverrides,
): LayoutConfig => {
  const maxSeances = Math.max(...numSeancesPerDay);
  const styles = { ...VERTICAL_STYLES, ...styleOverrides };
  const contentWidth = 1080 - styles.padding * 2;
  const cardGap = styles.cardGap;
  const cardWidth = (contentWidth - cardGap * (maxSeances - 1)) / maxSeances;
  const cardHeight = cardWidth * 1.4;

  return {
    cardWidth,
    cardHeight,
    contentWidth,
    fontSizes: {
      cardTitle: calculateFontSize(cardWidth, 12),
      cardTime: calculateFontSize(cardWidth, styles.cardTimeBaseFontSize),
      cardPrice: calculateFontSize(cardWidth, styles.cardPriceBaseFontSize),
      cardFormat: calculateFontSize(cardWidth, 15),
      cardAge: calculateFontSize(cardWidth, styles.cardAgeBaseFontSize),
    },
  };
};

const getEffectiveStyles = (styleOverrides?: StyleOverrides) => {
  return { ...VERTICAL_STYLES, ...styleOverrides } as typeof VERTICAL_STYLES;
};

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const normalizeFilmTitle = (title: string): string => {
  return title
    .replace(/\s*\(предс\.\s*обсл\.\)\s*$/g, '')
    .replace(/\s*\*\s*$/g, '')
    .trim();
};

const drawRoundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

const drawTimePrice = (
  ctx: CanvasRenderingContext2D,
  time: string,
  price: string,
  x: number,
  y: number,
  width: number,
  timeFontSize: number,
  priceFontSize: number,
  styles: typeof VERTICAL_STYLES,
) => {
  const radius = 10;
  const fontSize = Math.max(timeFontSize, priceFontSize);
  const blockHeight = fontSize + 14;
  const gap = 6;
  const halfWidth = (width - gap) / 2;

  // Time block (left half) — gradient fill
  const timeGradient = ctx.createLinearGradient(x, y, x + halfWidth, y);
  timeGradient.addColorStop(0, styles.gradientStart);
  timeGradient.addColorStop(1, styles.gradientEnd);
  ctx.fillStyle = timeGradient;
  drawRoundedRect(ctx, x, y, halfWidth, blockHeight, radius);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${timeFontSize}px ${styles.fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(time, x + halfWidth / 2, y + blockHeight / 2);

  // Price block (right half) — grey fill
  const priceX = x + halfWidth + gap;
  ctx.fillStyle = '#cccccc';
  drawRoundedRect(ctx, priceX, y, halfWidth, blockHeight, radius);
  ctx.fill();

  ctx.fillStyle = styles.textColor;
  ctx.font = `bold ${priceFontSize}px ${styles.fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(price.replace('₽', 'р.'), priceX + halfWidth / 2, y + blockHeight / 2);

  ctx.textBaseline = 'alphabetic';
};

const drawGradientBorder = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  borderWidth: number,
  radius: number,
  gradientStart: string,
  gradientEnd: string,
) => {
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, gradientStart);
  gradient.addColorStop(1, gradientEnd);

  ctx.save();
  ctx.strokeStyle = gradient;
  ctx.lineWidth = borderWidth;
  drawRoundedRect(ctx, x, y, width, height, radius);
  ctx.stroke();
  ctx.restore();
};

const drawPirateDot = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  styles: typeof VERTICAL_STYLES,
) => {
  const radius = Math.min(width, height) * 0.08;
  const margin = radius * 0.5;
  const cx = x + width - margin;
  const cy = y + height - margin;

  ctx.save();
  ctx.fillStyle = styles.pirateDotColor;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};

const drawAgeRatingDot = (
  ctx: CanvasRenderingContext2D,
  ageRating: string,
  x: number,
  y: number,
  width: number,
  styles: typeof VERTICAL_STYLES,
) => {
  const radius = Math.min(width, width) * 0.10;
  const margin = radius * 0.4;
  const cx = x + width - margin;
  const cy = y + margin;

  ctx.save();
  ctx.fillStyle = styles.ageRatingDotColor;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = styles.ageRatingTextColor;
  ctx.font = `400 ${styles.cardAgeBaseFontSize}px ${styles.fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(ageRating, cx, cy);
  ctx.restore();
};

const drawSeanceCard = async (
  ctx: CanvasRenderingContext2D,
  filmTitle: string,
  time: string,
  price: string,
  isPirate: boolean,
  ageRating: string | undefined,
  x: number,
  y: number,
  width: number,
  height: number,
  fontSizes: LayoutConfig['fontSizes'],
  styles: typeof VERTICAL_STYLES,
  filmMapping?: FilmMapping,
) => {
  const normalizedTitle = normalizeFilmTitle(filmTitle);
  const imagePath = filmMapping?.[normalizedTitle];
  const { posterBorderWidth: bw, posterBorderRadius: br } = styles;

  // Clip to rounded rect with posterBorderRadius
  ctx.save();
  drawRoundedRect(ctx, x, y, width, height, br);
  ctx.clip();

  if (imagePath) {
    try {
      const img = await loadImage(imagePath);
      ctx.drawImage(img, x, y, width, height);
    } catch {
      ctx.fillStyle = '#e0e0e0';
      ctx.fillRect(x, y, width, height);
    }
  } else {
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(x, y, width, height);
  }

  ctx.restore();

  // Gradient border
  drawGradientBorder(ctx, x, y, width, height, bw, br, styles.gradientStart, styles.gradientEnd);

  // Pirate dot in bottom-right corner
  if (isPirate) {
    drawPirateDot(ctx, x, y, width, height, styles);
  }

  // Age rating dot in top-right corner
  if (ageRating) {
    drawAgeRatingDot(ctx, ageRating, x, y, width, styles);
  }

  // Time & price below the card
  const timePriceGap = 10;
  const timeFontSize = fontSizes.cardTime;
  const priceFontSize = fontSizes.cardPrice;
  const blockHeight = Math.max(timeFontSize, priceFontSize) + 14;
  const belowY = y + height + timePriceGap;

  drawTimePrice(ctx, time, price, x, belowY, width, timeFontSize, priceFontSize, styles);

  return blockHeight + timePriceGap;
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
      const normalizedTitle = normalizeFilmTitle(filmTitle);
      const isPirate = !!pirateMapping?.[normalizedTitle];

      if (isPirate) {
        displayTitle = filmTitle
          .replace(/\s*\(предс\.\s*обсл\.\)\s*$/g, ' *')
          .trim();
      }

      seances.push({
        filmTitle: displayTitle,
        time,
        price,
        format: filmTitle.includes('3D') ? '3D' : '2D',
        isPirate,
        ageRating: ageRatingMapping?.[normalizedTitle],
      });
    }
  }

  return seances;
};

const drawGlowText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  styles: typeof VERTICAL_STYLES,
) => {
  ctx.font = `bold ${styles.headerFontSize}px ${styles.fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  for (let i = 0; i < styles.headerGlowLayers; i++) {
    ctx.save();
    ctx.shadowColor = styles.headerColor;
    ctx.shadowBlur = styles.headerGlowBlur * (i + 1);
    ctx.fillStyle = styles.headerColor;
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  ctx.fillStyle = styles.headerColor;
  ctx.fillText(text, x, y);
  ctx.textBaseline = 'alphabetic';
};

const drawDaySection = async (
  ctx: CanvasRenderingContext2D,
  dayName: string,
  seances: SeanceInfo[],
  startY: number,
  config: LayoutConfig,
  styles: typeof VERTICAL_STYLES,
  filmMapping?: FilmMapping,
): Promise<number> => {
  const contentX = styles.padding;
  const containerWidth = 1080 - styles.padding * 2;
  const totalCardsWidth = config.cardWidth * seances.length;

  let gap = styles.cardGap;
  if (seances.length > 1) {
    const availableSpace = containerWidth - totalCardsWidth;
    gap = availableSpace / (seances.length - 1);
  }

  const sortedSeances = [...seances].sort((a, b) => {
    const timeA = a.time.split(':').map(Number);
    const timeB = b.time.split(':').map(Number);
    return (timeA[0] * 60 + timeA[1]) - (timeB[0] * 60 + timeB[1]);
  });

  ctx.fillStyle = styles.weekDayColor;
  ctx.font = `${styles.dayFontSize}px ${styles.fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(dayName.toUpperCase(), 1080 / 2, startY);

  const currentY = startY + styles.dayFontSize + styles.dayPadding;

  for (let idx = 0; idx < sortedSeances.length; idx++) {
    const seance = sortedSeances[idx];
    const cardX = contentX + idx * (config.cardWidth + gap);
    await drawSeanceCard(
      ctx,
      seance.filmTitle,
      seance.time,
      seance.price,
      seance.isPirate,
      seance.ageRating,
      cardX,
      currentY,
      config.cardWidth,
      config.cardHeight,
      config.fontSizes,
      styles,
      filmMapping,
    );
  }

  const timeFontSize = config.fontSizes.cardTime;
  const priceFontSize = config.fontSizes.cardPrice;
  const blockHeight = Math.max(timeFontSize, priceFontSize) + 14;
  const belowBlocksHeight = blockHeight + 10;

  return currentY + config.cardHeight + belowBlocksHeight + styles.sectionGap;
};

const drawFooter = (
  ctx: CanvasRenderingContext2D,
  y: number,
  width: number,
) => {
  const styles = VERTICAL_STYLES;
  const text = ' - В РАМКАХ ПРЕДСЕАНСОВОГО ОБСЛУЖИВАНИЯ ПЕРЕД МУЛЬТФИЛЬМОМ "СНЕГУР"';
  const fontSize = styles.footerFontSize;

  ctx.font = `${fontSize}px ${styles.fontFamily}`;
  ctx.textBaseline = 'middle';

  // Measure full line to center it
  const dotRadius = fontSize * 0.5;
  const gap = dotRadius * 0.6;
  const textWidth = ctx.measureText(text).width;
  const totalWidth = dotRadius * 2 + gap + textWidth;
  const startX = (width - totalWidth) / 2;
  const cy = y;

  // Draw pirate dot
  ctx.fillStyle = styles.pirateDotColor;
  ctx.beginPath();
  ctx.arc(startX + dotRadius, cy, dotRadius, 0, Math.PI * 2);
  ctx.fill();

  // Draw text after the dot
  ctx.fillStyle = styles.footerColor;
  ctx.textAlign = 'left';
  ctx.fillText(text, startX + dotRadius * 2 + gap, cy);

  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'center';
};

export const drawWeekdaySchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  width: number,
  height: number,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
  filmMapping?: FilmMapping,
): Promise<void> => {
  const styles = getEffectiveStyles(styleOverrides);

  try {
    const bgImg = await loadImage(styles.backgroundImage);
    ctx.drawImage(bgImg, 0, 0, width, height);
  } catch {
    ctx.fillStyle = styles.background;
    ctx.fillRect(0, 0, width, height);
  }

  const weekdayKeys = ['day1', 'day2', 'day3'];
  const daySeancesArray: DaySeances[] = [];

  for (const dayKey of weekdayKeys) {
    const seances = collectDaySeances(scheduleData, dayKey, ageRatingMapping, pirateMapping);
    if (seances.length > 0) {
      daySeancesArray.push({ dayKey, dayName: dayKeyToDateName[dayKey], seances });
    }
  }

  const numSeancesPerDay = daySeancesArray.map(d => d.seances.length);
  const config = getLayoutConfig(numSeancesPerDay, styleOverrides);

  let currentY: number = styles.headerPadding;

  drawGlowText(ctx, 'РАСПИСАНИЕ', width / 2, currentY, styles);
  currentY += styles.headerFontSize + styles.headerPaddingBottom;

  for (const daySeances of daySeancesArray) {
    currentY = await drawDaySection(
      ctx, daySeances.dayName, daySeances.seances, currentY, config, styles, filmMapping,
    );
  }

  const footerY = height - styles.footerPadding - styles.footerFontSize;
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
  filmMapping?: FilmMapping,
): Promise<void> => {
  const styles = getEffectiveStyles(styleOverrides);

  try {
    const bgImg = await loadImage(styles.backgroundImage);
    ctx.drawImage(bgImg, 0, 0, width, height);
  } catch {
    ctx.fillStyle = styles.background;
    ctx.fillRect(0, 0, width, height);
  }

  const weekendKeys = ['day4', 'day5', 'day6', 'day0'];
  const daySeancesArray: DaySeances[] = [];

  for (const dayKey of weekendKeys) {
    const seances = collectDaySeances(scheduleData, dayKey, ageRatingMapping, pirateMapping);
    if (seances.length > 0) {
      daySeancesArray.push({ dayKey, dayName: dayKeyToDateName[dayKey], seances });
    }
  }

  const numSeancesPerDay = daySeancesArray.map(d => d.seances.length);
  const config = getLayoutConfig(numSeancesPerDay, styleOverrides);

  let currentY: number = styles.headerPadding;

  drawGlowText(ctx, 'РАСПИСАНИЕ', width / 2, currentY, styles);
  currentY += styles.headerFontSize + styles.headerPaddingBottom;

  for (const daySeances of daySeancesArray) {
    currentY = await drawDaySection(
      ctx, daySeances.dayName, daySeances.seances, currentY, config, styles, filmMapping,
    );
  }

  const footerY = height - styles.footerPadding - styles.footerFontSize;
  drawFooter(ctx, footerY, width);
};

export const generateWeekdayScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
  filmMapping?: FilmMapping,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    await drawWeekdaySchedule(
      ctx, scheduleData, ageRatingMapping,
      canvas.width, canvas.height, pirateMapping, styleOverrides, filmMapping,
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
  filmMapping?: FilmMapping,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    await drawWeekendSchedule(
      ctx, scheduleData, ageRatingMapping,
      canvas.width, canvas.height, pirateMapping, styleOverrides, filmMapping,
    );
    return canvas.toDataURL('image/jpeg') as string;
  }
  return '';
};

export const generateVerticalScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
  filmMapping?: FilmMapping,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (!ctx) return '';

  const isWeekday = ['day1', 'day2', 'day3'].includes(dayKey);

  if (isWeekday) {
    await drawWeekdaySchedule(
      ctx, scheduleData, ageRatingMapping,
      canvas.width, canvas.height, pirateMapping, styleOverrides, filmMapping,
    );
  } else {
    await drawWeekendSchedule(
      ctx, scheduleData, ageRatingMapping,
      canvas.width, canvas.height, pirateMapping, styleOverrides, filmMapping,
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
