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
    },
    3: {
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
    },
    4: {
      posterWidth: 450,
      posterHeight: 640,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 5, right: 5, top: 15 },
      topPadding: 0,
      bottomPadding: 0,
      fontSize: { title: 32, time: 30, price: 26 },
      margins: { titleTop: 50, seansTop: 60, seansBetween: 112 },
      seansBlockHeight: { time: 55, price: 35 },
      seansBlockWidth: 430,
      seansLayout: 'vertical' as const,
      titleHeight: 0,
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
      titleHeight: 0,
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
      titleHeight: 0,
    },
  };
  return configs[filmCount as 3 | 4 | 5] || configs[4];
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
    price: number; time: number;
  },
  fontSize: {
    price: number; time: number;
  },
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
  ctx.quadraticCurveTo(x + width, y + timeHeight + priceHeight, x + width - radius, y + timeHeight + priceHeight);
  ctx.lineTo(x + radius, y + timeHeight + priceHeight);
  ctx.quadraticCurveTo(x, y + timeHeight + priceHeight, x, y + timeHeight + priceHeight - radius);
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
  ctx.font = `bold ${fontSize.time}px ${SCHEDULE_STYLES.seansFontFamily}`;
  ctx.textAlign = 'center';
  ctx.fillText(time, x + width / 2, y + timeHeight / 2 + fontSize.time / 3);

  // Цена (черный текст)
  ctx.fillStyle = SCHEDULE_STYLES.priceTextColor;
  ctx.font = `bold ${fontSize.price}px ${SCHEDULE_STYLES.seansFontFamily}`;
  const priceText = `2D / ${price} `;
  // const priceText = format ? `${price} ${format}` : price;
  ctx.fillText(priceText, x + width / 2, y + timeHeight + priceHeight / 2 + fontSize.price / 3);
};

export const drawFilmBackground = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  filmIndex: number,
  padding: {
    left: number; right: number; top: number;
  },
) => {
  const totalWidth = padding.left + width + padding.right;
  ctx.fillStyle = filmIndex % 2 === 0
    ? SCHEDULE_STYLES.filmBackgroundDark
    : SCHEDULE_STYLES.filmBackgroundLight;
  ctx.fillRect(x - padding.left - 10, y - padding.top - 10, totalWidth + 20, height + padding.top + 20);
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
