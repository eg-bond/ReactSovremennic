import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import { ScheduleImageGeneratorVertical } from './vertical/ScheduleImageGeneratorVertical';
import { ScheduleImageGeneratorHorizontal } from './horizontal/ScheduleImageGeneratorHorizontal';
import {
  ageRatingMapping,
  fetchScheduleData,
  filmMapping,
  pirateMapping,
} from './utils/mappings';
import type { ScheduleData } from './utils/transformSchedule';

const App = () => {
  const [activeTab, setActiveTab] = useState<'horizontal' | 'vertical'>('horizontal');
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  const [dayKeyToDateName, setDayKeyToDateName] = useState<Record<string, string> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchScheduleData()
      .then(({ scheduleData: data, dayKeyToDateName: names }) => {
        setScheduleData(data);
        setDayKeyToDateName(names);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, []);

  const tabStyle: React.CSSProperties = {
    padding: '10px 20px',
    marginRight: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    borderBottom: '3px solid transparent',
    fontSize: '16px',
    fontWeight: 'normal',
  };

  const activeTabStyle: React.CSSProperties = {
    ...tabStyle,
    backgroundColor: '#ffffff',
    borderBottom: '3px solid #0066cc',
    fontWeight: 'bold',
  };

  if (error) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
        <h2>Ошибка загрузки расписания</h2>
        <p>{error}</p>
        <p>Убедитесь, что файл schedule.json существует в папке public.</p>
      </div>
    );
  }

  if (!scheduleData || !dayKeyToDateName) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Загрузка расписания...</h2>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
        <button
          style={activeTab === 'horizontal' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('horizontal')}
        >
          Горизонтальный формат
        </button>
        <button
          style={activeTab === 'vertical' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('vertical')}
        >
          Вертикальный формат
        </button>
      </div>

      {activeTab === 'horizontal' && (
        <ScheduleImageGeneratorHorizontal
          ageRatingMapping={ageRatingMapping}
          dayKeyToDateName={dayKeyToDateName}
          filmMapping={filmMapping}
          pirateMapping={pirateMapping}
          scheduleData={scheduleData}
        />
      )}

      {activeTab === 'vertical' && (
        <ScheduleImageGeneratorVertical
          ageRatingMapping={ageRatingMapping}
          dayKeyToDateName={dayKeyToDateName}
          filmMapping={filmMapping}
          pirateMapping={pirateMapping}
          scheduleData={scheduleData}
        />
      )}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
