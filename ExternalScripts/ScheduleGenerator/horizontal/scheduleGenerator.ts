import { ScheduleData } from '../utils/transformSchedule';
import {
  SCHEDULE_STYLES,
  getLayoutConfig,
} from './scheduleStyles';
import { AgeRatingMapping, FilmMapping, PirateMapping } from '../utils/mappings';

export interface StyleOverrides {
  F2?: {
    bottomPadding?: number; posterHeight?: number; topPadding?: number;
  };
  F3?: {
    bottomPadding?: number; posterHeight?: number; topPadding?: number;
  };
  F4?: {
    bottomPadding?: number; posterHeight?: number; topPadding?: number;
  };
  F5?: {
    bottomPadding?: number; posterHeight?: number; topPadding?: number;
  };
  F6?: {
    bottomPadding?: number; posterHeight?: number; topPadding?: number;
  };
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

const drawBackground = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
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

export const drawSeansBlock = (
  ctx: CanvasRenderingContext2D,
  time: string,
  price: string,
  x: number,
  y: number,
  width: number,
  blockHeight: {
    price: number;
    time: number;
  },
  timeFontSize: number,
  priceFontSize: number,
  // fontSize: {
  //   price: number;
  //   time: number;
  // },
) => {
  const radius = SCHEDULE_STYLES.borderRadius;
  const timeHeight = blockHeight.time;
  const priceHeight = blockHeight.price;
  const totalHeight = timeHeight + priceHeight;

  // Нижняя часть (цена) - желтый фон без скругления сверху
  ctx.fillStyle = SCHEDULE_STYLES.accentColor;
  ctx.beginPath();
  ctx.moveTo(x, y + timeHeight);
  ctx.lineTo(x + width, y + timeHeight);
  ctx.lineTo(x + width, y + timeHeight + priceHeight - radius);
  ctx.quadraticCurveTo(
    x + width,
    y + timeHeight + priceHeight,
    x + width - radius,
    y + timeHeight + priceHeight,
  );
  ctx.lineTo(x + radius, y + timeHeight + priceHeight);
  ctx.quadraticCurveTo(
    x,
    y + timeHeight + priceHeight,
    x,
    y + timeHeight + priceHeight - radius,
  );
  ctx.lineTo(x, y + timeHeight);
  ctx.closePath();
  ctx.fill();

  // Желтая граница
  ctx.strokeStyle = SCHEDULE_STYLES.accentColor;
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, x, y, width, totalHeight, radius);
  ctx.stroke();

  // Время (желтый текст)
  ctx.fillStyle = SCHEDULE_STYLES.accentColor;
  ctx.font = `bold ${timeFontSize}px ${SCHEDULE_STYLES.seansFontFamily}`;
  ctx.textAlign = 'center';
  ctx.fillText(time, x + width / 2, y + timeHeight / 2 + timeFontSize / 3);

  // Цена (черный текст)
  ctx.fillStyle = SCHEDULE_STYLES.priceTextColor;
  ctx.font = `bold ${priceFontSize}px ${SCHEDULE_STYLES.seansFontFamily}`;
  const priceText = `2D / ${price} `;
  // const priceText = format ? `${price} ${format}` : price;
  ctx.fillText(
    priceText,
    x + width / 2,
    y + timeHeight + priceHeight / 2 + priceFontSize / 3,
  );
};

export const drawFilmBackground = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  filmIndex: number,
  padding: {
    left: number;
    right: number;
    top: number;
  },
) => {
  const totalWidth = padding.left + width + padding.right;
  ctx.fillStyle =
    filmIndex % 2 === 0
      ? SCHEDULE_STYLES.filmBackgroundDark
      : SCHEDULE_STYLES.filmBackgroundLight;
  ctx.fillRect(
    x - padding.left - 10,
    y - padding.top - 10,
    totalWidth + 20,
    height + padding.top + 20,
  );
};

export const drawAgeRating = (
  ctx: CanvasRenderingContext2D,
  ageRating: string,
  x: number,
  y: number,
) => {
  const padding = 10;
  const fontSize = 26;
  const radius = 5;

  ctx.font = `bold ${fontSize}px ${SCHEDULE_STYLES.fontFamily}`;
  const textWidth = ctx.measureText(ageRating).width;
  const boxWidth = textWidth + padding * 2;
  const boxHeight = fontSize + padding * 2;

  // Желтый фон со скругленными углами
  ctx.fillStyle = SCHEDULE_STYLES.accentColor;
  drawRoundedRect(ctx, x, y, boxWidth, boxHeight, radius);
  ctx.fill();

  // Черный текст
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(ageRating, x + padding, y + padding);

  // Сбрасываем настройки
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
};

export const drawPirateBanner = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  fontSize: number = 14,
) => {
  const bannerText = 'ДЕМОНСТРИРУЕТСЯ ДОПОЛНИТЕЛЬНО ПЕРЕД СЕАНСОМ ФИЛЬМА "СНЕГУР"';
  const padding = 4;
  const paddingTop = 12;
  const maxWidth = width - padding * 2;
  const lineHeight = fontSize + 10;

  // Red background
  ctx.fillStyle = '#dc2626';
  ctx.fillRect(x, y, width, height);

  // White text with wrapping
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${fontSize}px ${SCHEDULE_STYLES.fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  // Split text into words and wrap to fit width
  const words = bannerText.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  words.forEach((word) => {
    const testLine = currentLine + (currentLine ? ' ' : '') + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) {
    lines.push(currentLine);
  }

  // Draw lines centered vertically in the banner with top padding
  const totalTextHeight = lines.length * lineHeight;
  let startY = y + paddingTop + (height - totalTextHeight - paddingTop) / 2;

  lines.forEach((line) => {
    ctx.fillText(line, x + width / 2, startY);
    startY += lineHeight;
  });
};

export const drawDaySchedule = async (
  ctx: CanvasRenderingContext2D,
  scheduleData: ScheduleData,
  filmMapping: FilmMapping,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
  width: number,
  height: number,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
) => {
  const daySchedule = scheduleData[dayKey];
  const films = daySchedule.titles;
  const filmCount = films.length;

  drawBackground(ctx, width, height);

  const config = getLayoutConfig(filmCount);

  // Merge styleOverrides with config based on filmCount
  const formatKey = `F${filmCount}` as keyof StyleOverrides;
  const overrides = styleOverrides?.[formatKey];

  const {
    posterWidth,
    posterHeight: configPosterHeight,
    spacing,
    sidePadding,
    filmBlockPadding,
    topPadding: configTopPadding,
    bottomPadding: configBottomPadding,
    // fontSize,
    titleFontSize,
    timeFontSize,
    priceFontSize,
    margins,
    seansBlockHeight,
    seansBlockWidth,
    seansLayout,
    seansGridColumns,
    seansGridGap,
    titlePaddingBottom,
    titleLineHeight,
    pirateBannerHeight,
    pirateBannerFontSize,
  } = config;

  // Apply style overrides
  const topPadding = overrides?.topPadding ?? configTopPadding;
  const bottomPadding = overrides?.bottomPadding ?? configBottomPadding;
  const posterHeight = overrides?.posterHeight ?? configPosterHeight;

  const filmBlockWidth =
    filmBlockPadding.left + posterWidth + filmBlockPadding.right;
  const availableWidth = width - sidePadding * 2;
  const totalContentWidth =
    filmBlockWidth * filmCount + spacing * (filmCount - 1);
  const startX = sidePadding + (availableWidth - totalContentWidth) / 2;
  const posterY = topPadding;
  const filmBlockHeight = height - topPadding - bottomPadding;

  for (let i = 0; i < filmCount; i++) {
    const filmTitle = films[i];
    const blockX = startX + i * (filmBlockWidth + spacing);
    const x = blockX + filmBlockPadding.left;
    const posterYWithPadding = posterY + filmBlockPadding.top;

    drawFilmBackground(
      ctx,
      x,
      posterYWithPadding,
      posterWidth,
      filmBlockHeight - filmBlockPadding.top,
      i,
      filmBlockPadding,
    );

    const normalizedTitle = normalizeFilmTitle(filmTitle);
    const imagePath = filmMapping[normalizedTitle];
    if (imagePath) {
      try {
        const img = await loadImage(imagePath);
        ctx.drawImage(img, x, posterYWithPadding, posterWidth, posterHeight);
      } catch {
        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(x, posterYWithPadding, posterWidth, posterHeight);
      }
    }

    if (ageRatingMapping?.[normalizedTitle]) {
      drawAgeRating(
        ctx,
        ageRatingMapping[normalizedTitle],
        x + 10,
        posterYWithPadding + 10,
      );
    }

    const titleY =
      posterYWithPadding + posterHeight + margins.titleTop;
    drawFilmTitle(
      ctx,
      filmTitle.replace(/\s*2D\s*/g, ' ').trim(),
      x + posterWidth / 2,
      titleY,
      posterWidth - 10,
      titleFontSize,
      titleLineHeight,
    );

    const filmSeans = daySchedule.seansScedule[filmTitle];
    const seansStartY =
      posterYWithPadding +
      posterHeight +
      margins.titleTop +
      titlePaddingBottom +
      margins.seansTop;

    if (seansLayout === 'grid' && seansGridColumns && seansGridGap !== undefined) {
      const cols = seansGridColumns;
      const gap = seansGridGap;
      const blockWidth = (posterWidth - gap * (cols - 1)) / cols;

      filmSeans.forEach(([time, , , price], idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const blockX = x + col * (blockWidth + gap);
        const blockY =
          seansStartY -
          25 +
          row * (seansBlockHeight.time + seansBlockHeight.price + gap);
        drawSeansBlock(
          ctx,
          time,
          price,
          blockX,
          blockY,
          blockWidth,
          seansBlockHeight,
          timeFontSize,
          priceFontSize,
        );
      });
    } else {
      let seansY = seansStartY;
      filmSeans.forEach(([time, , , price]) => {
        const blockX = x + (posterWidth - seansBlockWidth) / 2;
        drawSeansBlock(
          ctx,
          time,
          price,
          blockX,
          seansY - 25,
          seansBlockWidth,
          seansBlockHeight,
          timeFontSize,
          priceFontSize,
        );
        seansY += margins.seansBetween;
      });
    }

    // Draw pirate banner last (on top of everything)
    if (pirateMapping?.[normalizedTitle]) {
      drawPirateBanner(
        ctx,
        x,
        posterYWithPadding + posterHeight - pirateBannerHeight,
        posterWidth,
        pirateBannerHeight,
        pirateBannerFontSize,
      );
    }
  }
};

export const generateScheduleImage = async (
  scheduleData: ScheduleData,
  filmMapping: FilmMapping,
  ageRatingMapping: AgeRatingMapping | undefined,
  dayKey: string,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    await drawDaySchedule(
      ctx,
      scheduleData,
      filmMapping,
      ageRatingMapping,
      dayKey,
      canvas.width,
      canvas.height,
      pirateMapping,
      styleOverrides,
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
