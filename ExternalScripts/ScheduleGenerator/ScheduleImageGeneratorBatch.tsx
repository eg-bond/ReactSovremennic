import { useRef, useState } from 'react';
import { dayKeyToDateName } from './dateMapping';
import {
  drawDaySchedule,
  generateScheduleImage,
  downloadImage,
  type ScheduleData,
  type FilmMapping,
  type AgeRatingMapping,
  type PirateMapping,
} from './scheduleGenerator';

interface Props {
  ageRatingMapping?: AgeRatingMapping;
  filmMapping: FilmMapping;
  pirateMapping?: PirateMapping;
  scheduleData: ScheduleData;
}

export const ScheduleImageGeneratorBatch = ({
  scheduleData,
  filmMapping,
  ageRatingMapping,
  pirateMapping,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadDay = async () => {
    if (!selectedDay) return;
    setIsGenerating(true);
    try {
      const dataUrl = await generateScheduleImage(
        scheduleData,
        filmMapping,
        ageRatingMapping,
        selectedDay,
        pirateMapping,
      );
      const fileName = `${dayKeyToDateName[selectedDay]}.jpg`;
      downloadImage(dataUrl, fileName);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadAll = async () => {
    setIsGenerating(true);
    try {
      for (const dayKey of Object.keys(scheduleData)) {
        const dataUrl = await generateScheduleImage(
          scheduleData,
          filmMapping,
          ageRatingMapping,
          dayKey,
          pirateMapping,
        );
        const fileName = `${dayKeyToDateName[dayKey]}.jpg`;
        downloadImage(dataUrl, fileName);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWeekdaySchedules = async () => {
    setIsGenerating(true);
    try {
      const weekdayKeys = ['day1', 'day2', 'day3'];
      for (const dayKey of weekdayKeys) {
        if (scheduleData[dayKey]) {
          const dataUrl = await generateScheduleImage(
            scheduleData,
            filmMapping,
            ageRatingMapping,
            dayKey,
            pirateMapping,
          );
          const fileName = `${dayKeyToDateName[dayKey]}.jpg`;
          downloadImage(dataUrl, fileName);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWeekendSchedules = async () => {
    setIsGenerating(true);
    try {
      const weekendKeys = ['day4', 'day5', 'day6', 'day0'];
      for (const dayKey of weekendKeys) {
        if (scheduleData[dayKey]) {
          const dataUrl = await generateScheduleImage(
            scheduleData,
            filmMapping,
            ageRatingMapping,
            dayKey,
            pirateMapping,
          );
          const fileName = `${dayKeyToDateName[dayKey]}.jpg`;
          downloadImage(dataUrl, fileName);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const previewDay = async () => {
    if (!canvasRef.current || !selectedDay) return;
    setIsGenerating(true);
    try {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        await drawDaySchedule(
          ctx,
          scheduleData,
          filmMapping,
          ageRatingMapping,
          selectedDay,
          1920,
          1080,
          pirateMapping,
        );
      }
    } finally {
      setIsGenerating(false);
    }
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
            <option key={key} value={key}>
              {key}
            </option>
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
          style={{ marginRight: '10px', padding: '8px 16px' }}
          onClick={downloadWeekdaySchedules}
        >
          Скачать пн-ср
        </button>
        <button
          disabled={isGenerating}
          style={{ marginRight: '10px', padding: '8px 16px' }}
          onClick={downloadWeekendSchedules}
        >
          Скачать чт-вс
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
