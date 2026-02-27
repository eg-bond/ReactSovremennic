import { SCHEDULE_STYLES, drawSeansBlock, drawFilmBackground, drawAgeRating, getLayoutConfig } from './scheduleStyles';

export interface DaySchedule {
  seansScedule: {
    [filmTitle: string]: [string, string, string, string, number][];
  };
  titles: string[];
}

export interface ScheduleData {
  [dayKey: string]: DaySchedule;
}

export interface FilmMapping {
  [title: string]: string;
}

export interface AgeRatingMapping {
  [title: string]: string;
}

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const drawBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const gradient = ctx.createLinearGradient(0, height, width, 0);
  gradient.addColorStop(0, SCHEDULE_STYLES.background);
  gradient.addColorStop(1, SCHEDULE_STYLES.backgroundGradientEnd);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
};

const drawFilmTitle = (
  ctx: CanvasRenderingContext2D,
  title: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight: number,
) => {
  ctx.fillStyle = SCHEDULE_STYLES.accentColor;
  ctx.font = `bold ${fontSize}px ${SCHEDULE_STYLES.fontFamily}`;
  ctx.textAlign = 'center';

  const words = title.split(' ');
  let line = '';
  let lineY = y;

  words.forEach((word, idx) => {
    const testLine = line + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && idx > 0) {
      ctx.fillText(line, x, lineY);
      line = word + ' ';
      lineY += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, lineY);
  return lineY;
};

const normalizeFilmTitle = (title: string): string => {
  // Remove "(предс. обсл.)" suffix with any surrounding whitespace variations
  const normalized = title.replace(/\s*\(предс\.\s*обсл\.\)\s*$/g, '');
  // Only trim if we actually removed the suffix (title changed)
  return normalized !== title ? normalized.trim() : normalized;
};

export const drawDaySchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  filmMapping: FilmMapping,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
  width: number,
  height: number,
) => {
  const daySchedule = scheduleData[dayKey];
  const films = daySchedule.titles;
  const filmCount = films.length;

  drawBackground(ctx, width, height);

  const config = getLayoutConfig(filmCount);
  const {
    posterWidth,
    posterHeight,
    spacing,
    sidePadding,
    filmBlockPadding,
    topPadding,
    bottomPadding,
    fontSize,
    margins,
    seansBlockHeight,
    seansBlockWidth,
    seansLayout,
    seansGridColumns,
    seansGridGap,
    titleHeight,
    titleLineHeight,
  } = config;
  const filmBlockWidth = filmBlockPadding.left + posterWidth + filmBlockPadding.right;
  const availableWidth = width - sidePadding * 2;
  const totalContentWidth = filmBlockWidth * filmCount + spacing * (filmCount - 1);
  const startX = sidePadding + (availableWidth - totalContentWidth) / 2;
  const posterY = topPadding;
  const filmBlockHeight = height - topPadding - bottomPadding;

  for (let i = 0; i < filmCount; i++) {
    const filmTitle = films[i];
    const blockX = startX + i * (filmBlockWidth + spacing);
    const x = blockX + filmBlockPadding.left;
    const posterYWithPadding = posterY + filmBlockPadding.top;

    drawFilmBackground(ctx, x, posterYWithPadding, posterWidth, filmBlockHeight - filmBlockPadding.top, i, filmBlockPadding);

    const normalizedTitle = normalizeFilmTitle(filmTitle);
    const imagePath = filmMapping[normalizedTitle];
    if (imagePath) {
      try {
        const img = await loadImage(imagePath);
        ctx.drawImage(img, x, posterYWithPadding, posterWidth, posterHeight);
      } catch (e) {
        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(x, posterYWithPadding, posterWidth, posterHeight);
      }
    }

    if (ageRatingMapping?.[normalizedTitle]) {
      drawAgeRating(ctx, ageRatingMapping[normalizedTitle], x + 10, posterYWithPadding + 10);
    }

    const titleY = posterYWithPadding + posterHeight + margins.titleTop;
    drawFilmTitle(ctx, filmTitle.replace(/\s*2D\s*/g, ' ').trim(), x + posterWidth / 2, titleY, posterWidth - 10, fontSize.title, titleLineHeight);

    const filmSeans = daySchedule.seansScedule[filmTitle];
    const seansStartY = posterYWithPadding + posterHeight + margins.titleTop + titleHeight + margins.seansTop;

    if (seansLayout === 'grid' && seansGridColumns && seansGridGap !== undefined) {
      const cols = seansGridColumns;
      const gap = seansGridGap;
      const blockWidth = (posterWidth - gap * (cols - 1)) / cols;

      filmSeans.forEach(([time, , , price], idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const blockX = x + col * (blockWidth + gap);
        const blockY = seansStartY - 25 + row * (seansBlockHeight.time + seansBlockHeight.price + gap);
        drawSeansBlock(ctx, time, price, blockX, blockY, blockWidth, seansBlockHeight, fontSize);
      });
    } else {
      let seansY = seansStartY;
      filmSeans.forEach(([time, , , price]) => {
        const blockX = x + (posterWidth - seansBlockWidth) / 2;
        drawSeansBlock(ctx, time, price, blockX, seansY - 25, seansBlockWidth, seansBlockHeight, fontSize);
        seansY += margins.seansBetween;
      });
    }
  }
};

export const generateScheduleImage = async (
  scheduleData: ScheduleData,
  filmMapping: FilmMapping,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    await drawDaySchedule(ctx, scheduleData, filmMapping, ageRatingMapping, dayKey, canvas.width, canvas.height);
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
