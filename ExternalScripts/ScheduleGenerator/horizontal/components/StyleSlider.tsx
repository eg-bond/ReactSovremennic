interface StyleSliderProps {
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  value: number;
}

export const StyleSlider = ({
  label,
  value,
  min,
  max,
  onChange,
}: StyleSliderProps) => (
  <div>
    <label
      style={{
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
      }}
    >
      {label}
      :
      {' '}
      {value}
    </label>
    <input
      max={max}
      min={min}
      style={{ width: '500px' }}
      type="range"
      value={value}
      onChange={e => onChange(Number(e.target.value))}
    />
    <input
      style={{ width: '500px', marginTop: '5px', padding: '4px' }}
      type="number"
      value={value}
      onChange={e => onChange(Number(e.target.value))}
    />
  </div>
);
