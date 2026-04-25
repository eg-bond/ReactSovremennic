type FormatKey = 'F2' | 'F3' | 'F4' | 'F5' | 'F6';

interface FormatTabsProps {
  activeFormat: FormatKey;
  onFormatChange: (format: FormatKey) => void;
}

const FORMATS: FormatKey[] = ['F2', 'F3', 'F4', 'F5', 'F6'];

export const FormatTabs = ({ activeFormat, onFormatChange }: FormatTabsProps) => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    {FORMATS.map(format => (
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: activeFormat === format ? '#007bff' : '#e0e0e0',
          color: activeFormat === format ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: activeFormat === format ? 'bold' : 'normal',
        }}
        key={format}
        type="button"
        onClick={() => onFormatChange(format)}
      >
        {format}
      </button>
    ))}
  </div>
);
