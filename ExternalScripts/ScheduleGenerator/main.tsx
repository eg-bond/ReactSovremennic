import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScheduleImageGeneratorBatch } from './ScheduleImageGeneratorBatch';
import {
  ageRatingMapping, filmMapping,
  pirateMapping, scheduleData,
} from './utils/mappings';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ScheduleImageGeneratorBatch
        ageRatingMapping={ageRatingMapping}
        filmMapping={filmMapping}
        pirateMapping={pirateMapping}
        scheduleData={scheduleData}
      />
    </React.StrictMode>,
  );
}
