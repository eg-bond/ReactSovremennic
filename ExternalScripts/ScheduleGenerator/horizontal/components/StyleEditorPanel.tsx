import { StyleSlider } from './StyleSlider';

type FormatKey = 'F2' | 'F3' | 'F4' | 'F5' | 'F6';

interface FormatState {
  topPadding: number;
  bottomPadding: number;
  posterHeight: number;
  seansTop: number;
}

interface StyleEditorPanelProps {
  activeFormat: FormatKey;
  formatState: FormatState;
  onUpdate: (key: keyof FormatState, value: number) => void;
}

export const StyleEditorPanel = ({
  activeFormat,
  formatState,
  onUpdate,
}: StyleEditorPanelProps) => (
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
      {activeFormat}
    </h3>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '15px',
        width: '1900px',
      }}
    >
      <StyleSlider
        label="Top Padding"
        max={300}
        min={0}
        value={formatState.topPadding}
        onChange={value => onUpdate('topPadding', value)}
      />
      <StyleSlider
        label="Bottom Padding"
        max={300}
        min={0}
        value={formatState.bottomPadding}
        onChange={value => onUpdate('bottomPadding', value)}
      />
      <StyleSlider
        label="Poster Height"
        max={1000}
        min={300}
        value={formatState.posterHeight}
        onChange={value => onUpdate('posterHeight', value)}
      />
      <StyleSlider
        label="Seance Top"
        max={300}
        min={0}
        value={formatState.seansTop}
        onChange={value => onUpdate('seansTop', value)}
      />
    </div>
  </div>
);
