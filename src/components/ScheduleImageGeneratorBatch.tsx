import { useRef, useState } from 'react';
import { SCHEDULE_STYLES, drawSeansBlock, drawFilmBackground, drawAgeRating, getLayoutConfig } from './scheduleStyles';

interface DaySchedule {
  seansScedule: {
    [filmTitle: string]: [string, string, string, string, number][];
  };
  titles: string[];
}

interface ScheduleData {
  [dayKey: string]: DaySchedule;
}

interface FilmMapping {
  [title: string]: string;
}

interface AgeRatingMapping {
  [title: string]: string;
}

interface Props {
  filmMapping: FilmMapping;
  ageRatingMapping?: AgeRatingMapping;
  scheduleData: ScheduleData;
}

export const ScheduleImageGeneratorBatch = ({ scheduleData, filmMapping, ageRatingMapping }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const drawDaySchedule = async (
    ctx: CanvasRenderingContext2D,
    dayKey: string,
    width: number,
    height: number,
  ) => {
    const daySchedule = scheduleData[dayKey];
    const films = daySchedule.titles;
    const filmCount = films.length;

    // Градиентный фон от левого нижнего угла к верхнему правому
    const gradient = ctx.createLinearGradient(0, height, width, 0);
    gradient.addColorStop(0, SCHEDULE_STYLES.background);
    gradient.addColorStop(1, SCHEDULE_STYLES.backgroundGradientEnd);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const config = getLayoutConfig(filmCount);
    const { posterWidth, posterHeight, spacing, sidePadding, filmBlockPadding, topPadding, bottomPadding, fontSize, margins, seansBlockHeight, seansBlockWidth } = config;
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

      // Фон фильма на всю допустимую высоту
      drawFilmBackground(ctx, x, posterYWithPadding, posterWidth, filmBlockHeight - filmBlockPadding.top, i, filmBlockPadding);

      // Загрузка и отрисовка постера
      const imagePath = filmMapping[filmTitle];
      if (imagePath) {
        try {
          const img = await loadImage(imagePath);
          ctx.drawImage(img, x, posterYWithPadding, posterWidth, posterHeight);
        } catch (e) {
          // Заглушка если изображение не загрузилось
          ctx.fillStyle = '#e0e0e0';
          ctx.fillRect(x, posterYWithPadding, posterWidth, posterHeight);
        }
      }

      // Возрастное ограничение
      if (ageRatingMapping && ageRatingMapping[filmTitle]) {
        drawAgeRating(ctx, ageRatingMapping[filmTitle], x + 10, posterYWithPadding + 10);
      }

      // Название фильма красным
      ctx.fillStyle = SCHEDULE_STYLES.accentColor;
      ctx.font = `bold ${fontSize.title}px ${SCHEDULE_STYLES.fontFamily}`;
      ctx.textAlign = 'center';
      const titleY = posterYWithPadding + posterHeight + margins.titleTop;
      const maxWidth = posterWidth - 10;
      const words = filmTitle.split(' ');
      let line = '';
      let lineY = titleY;

      words.forEach((word, idx) => {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && idx > 0) {
          ctx.fillText(line, x + posterWidth / 2, lineY);
          line = word + ' ';
          lineY += 25;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, x + posterWidth / 2, lineY);

      // Сеансы
      const filmSeans = daySchedule.seansScedule[filmTitle];
      let seansY = lineY + margins.seansTop;

      filmSeans.forEach(([time, , , price]) => {
        const blockX = x + (posterWidth - seansBlockWidth) / 2;
        drawSeansBlock(ctx, time, price, blockX, seansY - 25, seansBlockWidth, seansBlockHeight, fontSize);
        seansY += margins.seansBetween;
      });
    }
  };

  const generateImage = async (dayKey: string): Promise<string> => {
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      await drawDaySchedule(ctx, dayKey, canvas.width, canvas.height);
      return canvas.toDataURL('image/jpeg', 0.95);
    }
    return '';
  };

  const downloadDay = async () => {
    if (!selectedDay) return;
    setIsGenerating(true);

    const dataUrl = await generateImage(selectedDay);
    const link = document.createElement('a');
    link.download = `schedule-${selectedDay}.jpg`;
    link.href = dataUrl;
    link.click();

    setIsGenerating(false);
  };

  const downloadAll = async () => {
    setIsGenerating(true);

    for (const dayKey of Object.keys(scheduleData)) {
      const dataUrl = await generateImage(dayKey);
      const link = document.createElement('a');
      link.download = `schedule-${dayKey}.jpg`;
      link.href = dataUrl;
      link.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setIsGenerating(false);
  };

  const previewDay = async () => {
    if (!canvasRef.current || !selectedDay) return;
    setIsGenerating(true);

    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      await drawDaySchedule(ctx, selectedDay, 1920, 1080);
    }

    setIsGenerating(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <select
          disabled={isGenerating}
          style={{ marginRight: '10px', padding: '8px' }}
          value={selectedDay}
          onChange={e => setSelectedDay(e.target.value)}
        >
          <option value="">Выберите день</option>
          {Object.keys(scheduleData).map(key => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>

        <button
          disabled={!selectedDay || isGenerating}
          style={{ marginRight: '10px', padding: '8px 16px' }}
          onClick={previewDay}
        >
          {isGenerating ? 'Генерация...' : 'Предпросмотр'}
        </button>
        <button
          disabled={!selectedDay || isGenerating}
          style={{ marginRight: '10px', padding: '8px 16px' }}
          onClick={downloadDay}
        >
          Скачать день
        </button>
        <button
          disabled={isGenerating}
          style={{ padding: '8px 16px' }}
          onClick={downloadAll}
        >
          Скачать все дни
        </button>
      </div>

      <canvas
        height={1080}
        ref={canvasRef}
        style={{ border: '1px solid #ccc', maxWidth: '100%', display: 'block' }}
        width={1920}
      />
    </div>
  );
};
