import { useRef, useState } from 'react';
import { EditingPanel } from './components/EditingPanel';
import { useFormatStyles } from './hooks/useFormatStyles';
import { StyleEditorPanel } from './components/StyleEditorPanel';
import { useScheduleDownload } from '../hooks/useScheduleDownload';
import { DaySelectionPanel } from './components/DaySelectionPanel';
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

export const ScheduleImageGeneratorHorizontal = ({
  scheduleData,
  filmMapping,
  ageRatingMapping,
  pirateMapping,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeFormatTab, setActiveFormatTab] = useState<'F2' | 'F3' | 'F4' | 'F5' | 'F6'>('F2');

  const {
    formatStates,
    updateFormatStyle,
    getStyleOverrides,
  } = useFormatStyles();
  const styleOverrides = getStyleOverrides();

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

  const currentFormatState = formatStates[activeFormatTab];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <DaySelectionPanel
          isGenerating={isGenerating}
          scheduleData={scheduleData}
          selectedDay={selectedDay}
          onDayChange={setSelectedDay}
          onDownloadAll={downloadAll}
          onDownloadDay={downloadDay}
          onDownloadWeekday={downloadWeekdaySchedules}
          onDownloadWeekend={downloadWeekendSchedules}
          onPreview={previewDay}
        />

        <EditingPanel
          activeFormat={activeFormatTab}
          onFormatChange={setActiveFormatTab}
        />
      </div>

      <StyleEditorPanel
        activeFormat={activeFormatTab}
        formatState={currentFormatState}
        onUpdate={(key, value) => updateFormatStyle(activeFormatTab, key, value)}
      />

      <canvas
        height={1080}
        ref={canvasRef}
        style={{ border: '1px solid #ccc', maxWidth: '100%', display: 'block' }}
        width={1920}
      />
    </div>
  );
};
