import { useRef, useEffect } from 'react';
import { SCHEDULE_STYLES, drawSeansBlock } from './scheduleStyles';

interface SeansItem {
  age: string;
  index: number;
  price: string;
  time: string;
  title: string;
}

interface DaySchedule {
  seansScedule: {
    [filmTitle: string]: [string, string, string, string, number][];
  };
  titles: string[];
}

interface ScheduleData {
  [dayKey: string]: DaySchedule;
}

interface Props {
  dayKey: string;
  filmIndex: number;
  scheduleData: ScheduleData;
}

export const ScheduleImageGenerator = ({
  scheduleData,
  dayKey,
  filmIndex,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const daySchedule = scheduleData[dayKey];
    const filmTitle = daySchedule.titles[filmIndex];
    const filmSeans = daySchedule.seansScedule[filmTitle];

    // Черный фон
    ctx.fillStyle = SCHEDULE_STYLES.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Название фильма желтым
    ctx.fillStyle = SCHEDULE_STYLES.titleColor;
    ctx.font = 'bold 32px Arial';
    ctx.fillText(filmTitle, 50, 80);

    // Сеансы
    let yOffset = 150;
    filmSeans.forEach(([time, , age, price]) => {
      drawSeansBlock(ctx, time, price, 50, yOffset - 30, 200, 75);
      yOffset += 100;
    });
  }, [scheduleData, dayKey, filmIndex]);

  const downloadImage = () => {
    if (!canvasRef.current) return;

    const link = document.createElement('a');
    link.download = `${dayKey}-${filmIndex}.jpg`;
    link.href = canvasRef.current.toDataURL('image/jpeg', 0.95);
    link.click();
  };

  return (
    <div>
      <canvas height={600} ref={canvasRef} width={800} />
      <button onClick={downloadImage}>Скачать JPG</button>
    </div>
  );
};
