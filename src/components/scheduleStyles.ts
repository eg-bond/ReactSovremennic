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
    3: {
      posterWidth: 560,
      posterHeight: 680,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 30, right: 30, top: 30 },
      topPadding: 0,
      bottomPadding: 0,
      fontSize: { title: 40, time: 28, price: 22 },
      margins: { titleTop: 45, seansTop: 55, seansBetween: 95 },
      seansBlockHeight: { time: 50, price: 25 },
      seansBlockWidth: 250,
    },
    4: {
      posterWidth: 450,
      posterHeight: 640,
      spacing: 20,
      sidePadding: 40,
      filmBlockPadding: { left: 0, right: 0, top: 0 },
      topPadding: 30,
      bottomPadding: 30,
      fontSize: { title: 30, time: 30, price: 22 },
      margins: { titleTop: 45, seansTop: 55, seansBetween: 105 },
      seansBlockHeight: { time: 55, price: 30 },
      seansBlockWidth: 250,
    },
    5: {
      posterWidth: 310,
      posterHeight: 460,
      spacing: 50,
      sidePadding: 40,
      filmBlockPadding: { left: 20, right: 20, top: 20 },
      topPadding: 40,
      bottomPadding: 40,
      fontSize: { title: 20, time: 18, price: 14 },
      margins: { titleTop: 30, seansTop: 40, seansBetween: 90 },
      seansBlockHeight: { time: 40, price: 35 },
      seansBlockWidth: 310,
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

  // Нижняя часть (цена) - желтый фон
  ctx.fillStyle = SCHEDULE_STYLES.accentColor;
  drawRoundedRect(ctx, x, y + timeHeight, width, priceHeight, radius);
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
  ctx.fillText(price, x + width / 2, y + timeHeight + priceHeight / 2 + fontSize.price / 3);
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
