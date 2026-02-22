import { useRef, useState } from 'react';
import { SCHEDULE_STYLES, drawSeansBlock, drawFilmBorder } from './scheduleStyles';

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

interface Props {
  filmMapping: FilmMapping;
  scheduleData: ScheduleData;
}

export const ScheduleImageGeneratorBatch = ({ scheduleData, filmMapping }: Props) => {
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

  const getLayoutConfig = (filmCount: number) => {
    const configs = {
      3: { posterWidth: 480, posterHeight: 710, spacing: 100, padding: 60 },
      4: { posterWidth: 380, posterHeight: 560, spacing: 70, padding: 50 },
      5: { posterWidth: 310, posterHeight: 460, spacing: 50, padding: 40 },
    };
    return configs[filmCount as 3 | 4 | 5] || configs[4];
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

    // Черный фон
    ctx.fillStyle = SCHEDULE_STYLES.background;
    ctx.fillRect(0, 0, width, height);

    const config = getLayoutConfig(filmCount);
    const { posterWidth, posterHeight, spacing, padding } = config;
    const startX = (width - (posterWidth * filmCount + spacing * (filmCount - 1))) / 2;
    const posterY = padding;

    for (let i = 0; i < filmCount; i++) {
      const filmTitle = films[i];
      const x = startX + i * (posterWidth + spacing);

      // Граница фильма
      const filmSeans = daySchedule.seansScedule[filmTitle];
      const seansCount = filmSeans.length;
      const filmHeight = posterHeight + 150 + seansCount * 80;
      drawFilmBorder(ctx, x, posterY, posterWidth, filmHeight);

      // Загрузка и отрисовка постера
      const imagePath = filmMapping[filmTitle];
      if (imagePath) {
        try {
          const img = await loadImage(imagePath);
          ctx.drawImage(img, x, posterY, posterWidth, posterHeight);
        } catch (e) {
          // Заглушка если изображение не загрузилось
          ctx.fillStyle = '#e0e0e0';
          ctx.fillRect(x, posterY, posterWidth, posterHeight);
        }
      }

      // Название фильма желтым
      ctx.fillStyle = SCHEDULE_STYLES.titleColor;
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      const titleY = posterY + posterHeight + 30;
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
      let seansY = lineY + 40;

      filmSeans.forEach(([time, , , price]) => {
        const centerX = x + posterWidth / 2;
        drawSeansBlock(ctx, time, price, centerX - 100, seansY - 25, 200, 75);
        seansY += 90;
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
