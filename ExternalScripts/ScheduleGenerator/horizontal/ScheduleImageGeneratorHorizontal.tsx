import { useRef, useState } from 'react';
import { useScheduleDownload } from '../hooks/useScheduleDownload';
import {
  type AgeRatingMapping,
  type FilmMapping,
  type PirateMapping,
} from '../utils/mappings';
import type { StyleOverrides } from './scheduleGenerator';
import type { ScheduleData } from '../utils/transformSchedule';

interface Props {
  ageRatingMapping?: AgeRatingMapping;
  filmMapping: FilmMapping;
  pirateMapping?: PirateMapping;
  scheduleData: ScheduleData;
}

export const ScheduleImageGeneratorHorizontal = ({
  scheduleData,
  filmMapping,
  ageRatingMapping,
  pirateMapping,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Style overrides state for each format
  const [topPaddingF2, setTopPaddingF2] = useState(0);
  const [bottomPaddingF2, setBottomPaddingF2] = useState(0);
  const [posterHeightF2, setPosterHeightF2] = useState(855);

  const [topPaddingF3, setTopPaddingF3] = useState(0);
  const [bottomPaddingF3, setBottomPaddingF3] = useState(0);
  const [posterHeightF3, setPosterHeightF3] = useState(855);

  const [topPaddingF4, setTopPaddingF4] = useState(45);
  const [bottomPaddingF4, setBottomPaddingF4] = useState(45);
  const [posterHeightF4, setPosterHeightF4] = useState(640);

  const [topPaddingF5, setTopPaddingF5] = useState(0);
  const [bottomPaddingF5, setBottomPaddingF5] = useState(0);
  const [posterHeightF5, setPosterHeightF5] = useState(506);

  const [topPaddingF6, setTopPaddingF6] = useState(0);
  const [bottomPaddingF6, setBottomPaddingF6] = useState(0);
  const [posterHeightF6, setPosterHeightF6] = useState(450);

  const [activeFormatTab, setActiveFormatTab] = useState<'F2' | 'F3' | 'F4' | 'F5' | 'F6'>('F2');

  const styleOverrides: StyleOverrides = {
    F2: { topPadding: topPaddingF2, bottomPadding: bottomPaddingF2, posterHeight: posterHeightF2 },
    F3: { topPadding: topPaddingF3, bottomPadding: bottomPaddingF3, posterHeight: posterHeightF3 },
    F4: { topPadding: topPaddingF4, bottomPadding: bottomPaddingF4, posterHeight: posterHeightF4 },
    F5: { topPadding: topPaddingF5, bottomPadding: bottomPaddingF5, posterHeight: posterHeightF5 },
    F6: { topPadding: topPaddingF6, bottomPadding: bottomPaddingF6, posterHeight: posterHeightF6 },
  };

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
    styleOverrides,
  );

  const formatTabs: Array<'F2' | 'F3' | 'F4' | 'F5' | 'F6'> = ['F2', 'F3', 'F4', 'F5', 'F6'];

  const renderFormatTab = () => {
    const tabConfig = {
      F2: {
        topPadding: topPaddingF2,
        setTopPadding: setTopPaddingF2,
        bottomPadding: bottomPaddingF2,
        setBottomPadding: setBottomPaddingF2,
        posterHeight: posterHeightF2,
        setPosterHeight: setPosterHeightF2,
      },
      F3: {
        topPadding: topPaddingF3,
        setTopPadding: setTopPaddingF3,
        bottomPadding: bottomPaddingF3,
        setBottomPadding: setBottomPaddingF3,
        posterHeight: posterHeightF3,
        setPosterHeight: setPosterHeightF3,
      },
      F4: {
        topPadding: topPaddingF4,
        setTopPadding: setTopPaddingF4,
        bottomPadding: bottomPaddingF4,
        setBottomPadding: setBottomPaddingF4,
        posterHeight: posterHeightF4,
        setPosterHeight: setPosterHeightF4,
      },
      F5: {
        topPadding: topPaddingF5,
        setTopPadding: setTopPaddingF5,
        bottomPadding: bottomPaddingF5,
        setBottomPadding: setBottomPaddingF5,
        posterHeight: posterHeightF5,
        setPosterHeight: setPosterHeightF5,
      },
      F6: {
        topPadding: topPaddingF6,
        setTopPadding: setTopPaddingF6,
        bottomPadding: bottomPaddingF6,
        setBottomPadding: setBottomPaddingF6,
        posterHeight: posterHeightF6,
        setPosterHeight: setPosterHeightF6,
      },
    };

    const config = tabConfig[activeFormatTab];

    return (
      <div
        style={{
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          marginBottom: '20px',
        }}
      >
        <h3 style={{ marginTop: 0 }}>
          Формат
          {' '}
          {activeFormatTab}
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '15px',
            width: '1900px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
              }}
            >
              Top Padding:
              {' '}
              {config.topPadding}
            </label>
            <input
              max="100"
              min="0"
              style={{ width: '600px' }}
              type="range"
              value={config.topPadding}
              onChange={e => config.setTopPadding(Number(e.target.value))}
            />
            <input
              style={{ width: '600px', marginTop: '5px', padding: '4px' }}
              type="number"
              value={config.topPadding}
              onChange={e => config.setTopPadding(Number(e.target.value))}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
              }}
            >
              Bottom Padding:
              {' '}
              {config.bottomPadding}
            </label>
            <input
              max="100"
              min="0"
              style={{ width: '600px' }}
              type="range"
              value={config.bottomPadding}
              onChange={e => config.setBottomPadding(Number(e.target.value))}
            />
            <input
              style={{ width: '600px', marginTop: '5px', padding: '4px' }}
              type="number"
              value={config.bottomPadding}
              onChange={e => config.setBottomPadding(Number(e.target.value))}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
              }}
            >
              Poster Height:
              {' '}
              {config.posterHeight}
            </label>
            <input
              max="1000"
              min="300"
              style={{ width: '600px' }}
              type="range"
              value={config.posterHeight}
              onChange={e => config.setPosterHeight(Number(e.target.value))}
            />
            <input
              style={{ width: '600px', marginTop: '5px', padding: '4px' }}
              type="number"
              value={config.posterHeight}
              onChange={e => config.setPosterHeight(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    );
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

      <div
        style={{
          marginBottom: '20px',
          borderBottom: '2px solid #ddd',
          paddingBottom: '10px',
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
          Редактирование стилей
        </h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {formatTabs.map(format => (
            <button
              style={{
                padding: '8px 16px',
                backgroundColor:
                  activeFormatTab === format ? '#007bff' : '#e0e0e0',
                color: activeFormatTab === format ? 'white' : 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: activeFormatTab === format ? 'bold' : 'normal',
              }}
              key={format}
              type="button"
              onClick={() => setActiveFormatTab(format)}
            >
              {format}
            </button>
          ))}
        </div>
      </div>

      {renderFormatTab()}

      <canvas
        height={1080}
        ref={canvasRef}
        style={{ border: '1px solid #ccc', maxWidth: '100%', display: 'block' }}
        width={1920}
      />
    </div>
  );
};
