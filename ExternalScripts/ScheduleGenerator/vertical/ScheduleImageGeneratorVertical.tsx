import { useRef, useState } from 'react';
import { useScheduleDownloadVertical } from '../hooks/useScheduleDownloadVertical';
import type { ScheduleData } from '../utils/transformSchedule';
import type { AgeRatingMapping, PirateMapping } from '../utils/mappings';

interface Props {
  ageRatingMapping?: AgeRatingMapping;
  pirateMapping?: PirateMapping;
  scheduleData: ScheduleData;
}

export const ScheduleImageGeneratorVertical = ({
  scheduleData,
  ageRatingMapping,
  pirateMapping,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [headerPaddingBottom, setHeaderPaddingBottom] = useState(80);
  const [sectionGap, setSectionGap] = useState(80);

  const handle3days = () => {
    setHeaderPaddingBottom(180);
    setSectionGap(140);
  };
  const handle4days = () => {
    setHeaderPaddingBottom(80);
    setSectionGap(80);
  };

  const styleOverrides = {
    headerPaddingBottom,
    sectionGap,
  };

  const {
    selectedDay,
    setSelectedDay,
    isGenerating,
    downloadDay,
    previewDay,
  } = useScheduleDownloadVertical(
    scheduleData,
    canvasRef,
    ageRatingMapping,
    pirateMapping,
    styleOverrides,
  );

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <h3>Стили</h3>
        <div style={{ marginBottom: '15px' }}>
          <button
            style={{ padding: '6px', marginRight: '15px' }}
            onClick={handle3days}
          >
            3 дня (пн-ср)
          </button>
          <button
            style={{ padding: '6px' }}
            onClick={handle4days}
          >
            4 дня (чт-вс)
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'max-content max-content',
            gap: '10px',
            fontSize: '20px',
          }}
        >
          <div>
            <label>Header Padding Bottom: </label>
            <input
              style={{ width: '100px', padding: '4px', fontSize: '18px' }}
              type="number"
              value={headerPaddingBottom}
              onChange={e => setHeaderPaddingBottom(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Section Gap: </label>
            <input
              style={{ width: '100px', padding: '4px', fontSize: '18px' }}
              type="number"
              value={sectionGap}
              onChange={e => setSectionGap(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

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
      </div>

      <canvas
        height={1920}
        ref={canvasRef}
        style={{ border: '1px solid #ccc', maxWidth: '100%', display: 'block' }}
        width={1080}
      />
    </div>
  );
};
