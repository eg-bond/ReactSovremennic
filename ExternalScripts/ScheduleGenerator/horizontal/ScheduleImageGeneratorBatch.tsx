import { useRef } from 'react';
import { useScheduleDownload } from '../hooks/useScheduleDownload';
import {
  type AgeRatingMapping,
  type FilmMapping,
  type PirateMapping,
} from '../utils/mappings';
import type { ScheduleData } from '../utils/transformSchedule';

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

  const {
    selectedDay,
    setSelectedDay,
    isGenerating,
    downloadDay,
    downloadAll,
    downloadWeekdaySchedules,
    downloadWeekendSchedules,
    previewDay,
  } = useScheduleDownload(
    scheduleData,
    filmMapping,
    canvasRef,
    ageRatingMapping,
    pirateMapping,
  );

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
