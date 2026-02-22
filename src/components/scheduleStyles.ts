export const SCHEDULE_STYLES = {
  background: '#000000',
  titleColor: '#FFD700',
  blockBackground: '#333333',
  textColor: '#ffffff',
  borderColor: '#444444',
  borderRadius: 5,
} as const;

export const drawSeansBlock = (
  ctx: CanvasRenderingContext2D,
  time: string,
  price: string,
  x: number,
  y: number,
  width: number,
  totalHeight: number,
) => {
  const radius = SCHEDULE_STYLES.borderRadius;
  
  // Объединенный прямоугольник со скругленными углами
  ctx.fillStyle = SCHEDULE_STYLES.blockBackground;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + totalHeight - radius);
  ctx.quadraticCurveTo(x + width, y + totalHeight, x + width - radius, y + totalHeight);
  ctx.lineTo(x + radius, y + totalHeight);
  ctx.quadraticCurveTo(x, y + totalHeight, x, y + totalHeight - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();

  // Время
  ctx.fillStyle = SCHEDULE_STYLES.textColor;
  ctx.font = 'bold 22px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(time, x + width / 2, y + 28);

  // Цена
  ctx.font = '18px Arial';
  ctx.fillText(price, x + width / 2, y + 58);
};

export const drawFilmBorder = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  ctx.strokeStyle = SCHEDULE_STYLES.borderColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 10, y - 10, width + 20, height + 20);
};
