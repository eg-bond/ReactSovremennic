import { dayKeyToDateName } from './utils/mappings';
import type { AgeRatingMapping } from './utils/mappings';
import type { ScheduleData } from './utils/transformSchedule';

const VERTICAL_STYLES = {
  background: '#ffffff',
  textColor: '#000000',
  accentColor: '#FFD700',
  timeColor: '#dc2626',
  fontFamily: 'Microsoft Sans Serif, Arial, sans-serif',
  headerFontSize: 32,
  dayFontSize: 28,
  cardTitleFontSize: 16,
  cardTimeFontSize: 18,
  cardPriceFontSize: 14,
  cardFormatFontSize: 12,
  cardAgeFontSize: 14,
  padding: 20,
  headerPadding: 30,
  dayPadding: 20,
  cardGap: 12,
  cardPadding: 12,
  cardBorderWidth: 2,
  cardBorderColor: '#cccccc',
} as const;

interface VerticalLayoutConfig {
  cardHeight: number;
  cardsPerRow: number;
  cardWidth: number;
  contentHeight: number;
  contentWidth: number;
}

const getVerticalLayoutConfig = (dayKey: string): VerticalLayoutConfig => {
  // day1, day2, day3 = 3 дня (пн-ср)
  // day4, day5, day6, day0 = 4 дня (чт-вс)
  const isWeekday = ['day1', 'day2', 'day3'].includes(dayKey);
  const cardsPerRow = isWeekday ? 5 : 4; // 5 карточек для 3 дней, 4 для 4 дней

  const contentWidth = 1080 - VERTICAL_STYLES.padding * 2;
  const cardGap = VERTICAL_STYLES.cardGap;
  const cardWidth = (contentWidth - cardGap * (cardsPerRow - 1)) / cardsPerRow;
  const cardHeight = cardWidth * 1.3; // Высота больше ширины для вертикальной карточки

  return {
    cardWidth,
    cardHeight,
    cardsPerRow,
    contentWidth,
    contentHeight: 1920,
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
) => {
  ctx.fillStyle = color;
  ctx.font = `${fontSize}px ${VERTICAL_STYLES.fontFamily}`;
  ctx.textAlign = align;
  ctx.textBaseline = 'top';

  if (maxWidth) {
    const words = text.split(' ');
    let line = '';
    let lineY = y;
    const lineHeight = fontSize + 4;

    words.forEach((word, idx) => {
      const testLine = line + (line ? ' ' : '') + word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line) {
        ctx.fillText(line, x, lineY);
        line = word;
        lineY += lineHeight;
      } else {
        line = testLine;
      }
    });
    if (line) {
      ctx.fillText(line, x, lineY);
    }
  } else {
    ctx.fillText(text, x, y);
  }
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
) => {
  const padding = VERTICAL_STYLES.cardPadding;
  const borderWidth = VERTICAL_STYLES.cardBorderWidth;

  // Draw border
  ctx.strokeStyle = VERTICAL_STYLES.cardBorderColor;
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(x, y, width, height);

  // Draw title (top, centered)
  const titleY = y + padding;
  drawText(
    ctx,
    filmTitle.replace(/\s*2D\s*|\s*3D\s*/g, ' ').trim(),
    x + width / 2,
    titleY,
    VERTICAL_STYLES.cardTitleFontSize,
    VERTICAL_STYLES.textColor,
    'center',
    width - padding * 2,
  );

  // Draw time (red, centered, below title)
  const timeY = titleY + VERTICAL_STYLES.cardTitleFontSize + 8;
  drawText(
    ctx,
    time,
    x + width / 2,
    timeY,
    VERTICAL_STYLES.cardTimeFontSize,
    VERTICAL_STYLES.timeColor,
    'center',
  );

  // Draw price (centered, below time)
  const priceY = timeY + VERTICAL_STYLES.cardTimeFontSize + 6;
  drawText(
    ctx,
    `${price} ₽`,
    x + width / 2,
    priceY,
    VERTICAL_STYLES.cardPriceFontSize,
    VERTICAL_STYLES.textColor,
    'center',
  );

  // Draw format (2D/3D) - bottom left
  const formatY = y + height - padding - VERTICAL_STYLES.cardFormatFontSize;
  drawText(
    ctx,
    format,
    x + padding,
    formatY,
    VERTICAL_STYLES.cardFormatFontSize,
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
      VERTICAL_STYLES.cardAgeFontSize,
      VERTICAL_STYLES.accentColor,
      'right',
    );
  }
};

export const drawVerticalSchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
  width: number,
  height: number,
) => {
  // White background
  ctx.fillStyle = VERTICAL_STYLES.background;
  ctx.fillRect(0, 0, width, height);

  const config = getVerticalLayoutConfig(dayKey);
  const daySchedule = scheduleData[dayKey];

  if (!daySchedule) return;

  let currentY = VERTICAL_STYLES.headerPadding;

  // Draw header "КИНОТЕАТР "СОВРЕМЕННИК""
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

  // Draw day name (red)
  const dayName = dayKeyToDateName[dayKey];
  drawText(
    ctx,
    dayName,
    width / 2,
    currentY,
    VERTICAL_STYLES.dayFontSize,
    VERTICAL_STYLES.timeColor,
    'center',
  );

  currentY += VERTICAL_STYLES.dayFontSize + VERTICAL_STYLES.dayPadding;

  // Collect all seances
  const allSeances: Array<{
    ageRating?: string;
    filmTitle: string;
    format: string;
    price: string;
    time: string;
  }> = [];

  for (const filmTitle of daySchedule.titles) {
    const seances = daySchedule.seansScedule[filmTitle];
    for (const [time, , , price] of seances) {
      allSeances.push({
        filmTitle,
        time,
        price,
        format: filmTitle.includes('3D') ? '3D' : '2D',
        ageRating: ageRatingMapping?.[filmTitle],
      });
    }
  }

  // Draw seance cards in grid
  const contentX = VERTICAL_STYLES.padding;
  const cardGap = VERTICAL_STYLES.cardGap;
  const cardsPerRow = config.cardsPerRow;

  allSeances.forEach((seance, idx) => {
    const row = Math.floor(idx / cardsPerRow);
    const col = idx % cardsPerRow;

    const cardX = contentX + col * (config.cardWidth + cardGap);
    const cardY = currentY + row * (config.cardHeight + cardGap);

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
    );
  });
};

export const generateVerticalScheduleImage = async (
  scheduleData: ScheduleData,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    await drawVerticalSchedule(
      ctx,
      scheduleData,
      ageRatingMapping,
      dayKey,
      canvas.width,
      canvas.height,
    );
    return canvas.toDataURL('image/jpeg', 0.95);
  }
  return '';
};

export const downloadImage = (dataUrl: string, filename: string) => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
};
