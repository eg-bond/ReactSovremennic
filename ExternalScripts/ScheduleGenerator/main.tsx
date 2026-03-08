import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ScheduleImageGeneratorBatch } from './horizontal/ScheduleImageGeneratorBatch';
import { ScheduleImageGeneratorVertical } from './vertical/ScheduleImageGeneratorVertical';
import {
  ageRatingMapping, filmMapping,
  pirateMapping, scheduleData,
} from './utils/mappings';

const App = () => {
  const [activeTab, setActiveTab] = useState<'horizontal' | 'vertical'>('horizontal');

  const tabStyle = {
    padding: '10px 20px',
    marginRight: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    borderBottom: '3px solid transparent',
    fontSize: '16px',
    fontWeight: activeTab === 'horizontal' ? 'bold' : 'normal',
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: '#ffffff',
    borderBottom: '3px solid #0066cc',
  };

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
        <ScheduleImageGeneratorBatch
          ageRatingMapping={ageRatingMapping}
          filmMapping={filmMapping}
          pirateMapping={pirateMapping}
          scheduleData={scheduleData}
        />
      )}

      {activeTab === 'vertical' && (
        <ScheduleImageGeneratorVertical
          ageRatingMapping={ageRatingMapping}
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
