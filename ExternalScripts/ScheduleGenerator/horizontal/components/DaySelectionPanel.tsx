import type { ScheduleData } from '../../utils/transformSchedule';

interface DaySelectionPanelProps {
  isGenerating: boolean;
  onDayChange: (day: string) => void;
  onDownloadAll: () => void;
  onDownloadDay: () => void;
  onDownloadWeekday: () => void;
  onDownloadWeekend: () => void;
  onPreview: () => void;
  scheduleData: ScheduleData;
  selectedDay: string;
}

const BUTTON_STYLE = {
  marginRight: '20px',
  padding: '16px 32px',
  fontSize: '26px',
  cursor: 'pointer',
} as const;

// const LAST_BUTTON_STYLE = {
//   padding: '16px 32px',
//   fontSize: '26px',
//   cursor: 'pointer',
// } as const;

const SELECT_STYLE = {
  marginRight: '20px',
  padding: '16px',
  fontSize: '26px',
} as const;

export const DaySelectionPanel = ({
  isGenerating,
  onDayChange,
  // onDownloadAll,
  onDownloadDay,
  onDownloadWeekday,
  onDownloadWeekend,
  onPreview,
  scheduleData,
  selectedDay,
}: DaySelectionPanelProps) => (
  <div style={{ flex: 1 }}>
    <select
      disabled={isGenerating}
      style={SELECT_STYLE}
      value={selectedDay}
      onChange={e => onDayChange(e.target.value)}
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
      style={BUTTON_STYLE}
      onClick={onPreview}
    >
      {isGenerating ? 'Генерация...' : 'Предпросмотр'}
    </button>
    <button
      disabled={!selectedDay || isGenerating}
      style={BUTTON_STYLE}
      onClick={onDownloadDay}
    >
      Скачать день
    </button>
    <button
      disabled={isGenerating}
      style={BUTTON_STYLE}
      onClick={onDownloadWeekday}
    >
      Скачать пн-ср
    </button>
    <button
      disabled={isGenerating}
      style={BUTTON_STYLE}
      onClick={onDownloadWeekend}
    >
      Скачать чт-вс
    </button>
    {/* <button
      disabled={isGenerating}
      style={LAST_BUTTON_STYLE}
      onClick={onDownloadAll}
    >
      Скачать все дни
    </button> */}
  </div>
);
