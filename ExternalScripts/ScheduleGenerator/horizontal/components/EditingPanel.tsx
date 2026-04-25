import { FormatTabs } from './FormatTabs';

type FormatKey = 'F2' | 'F3' | 'F4' | 'F5' | 'F6';

interface EditingPanelProps {
  activeFormat: FormatKey;
  onFormatChange: (format: FormatKey) => void;
}

export const EditingPanel = ({ activeFormat, onFormatChange }: EditingPanelProps) => (
  <div
    style={{
      flex: 1,
      borderBottom: '2px solid #ddd',
      paddingBottom: '10px',
    }}
  >
    <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
      Редактирование стилей
    </h3>
    <FormatTabs activeFormat={activeFormat} onFormatChange={onFormatChange} />
  </div>
);
