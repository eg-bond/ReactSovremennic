import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const container = style({
  gridColumn: '1/4',
  margin: '0 auto',
  padding: '20px',
  width: '100%',
  '@media': {
    [breakpoints.mobile]: { gridColumn: '1/5' },
  },
});

globalStyle(`${container} h1`, {
  textAlign: 'center',
  marginBottom: '20px',
  marginTop: 0,
  '@media': { [breakpoints.mobile]: { fontSize: '6vw' } },
} as Parameters<typeof globalStyle>[1]);

export const loading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
  fontSize: '18px',
});

export const spinner = style({
  width: '50px',
  height: '50px',
  border: '4px solid #f3f3f3',
  borderTop: '4px solid #ff0000',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
});

export const search = style({
  marginBottom: '20px',
});

export const searchInput = style({
  width: '100%',
  padding: '12px 20px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.3s',
  selectors: {
    '&:focus': { borderColor: '#ff0000' },
  },
});

export const count = style({
  marginBottom: '15px',
  color: '#666',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const countSpinner = style({
  width: '16px',
  height: '16px',
  border: '2px solid #f3f3f3',
  borderTop: '2px solid #ff0000',
  borderRadius: '50%',
  animation: `${spin} 0.8s linear infinite`,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  overflowY: 'auto',
  paddingRight: '10px',
  maxHeight: '950px',
  '@media': {
    [breakpoints.w1200]: { maxHeight: '700px' },
    [breakpoints.w992]: { maxHeight: '550px' },
    [breakpoints.mobile]: { maxHeight: '70vh', gap: '6px' },
  },
});

export const item = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '15px',
  padding: '8px 10px',
  background: '#f8f9fa',
  borderRadius: '6px',
  transition: 'background 0.2s',
  selectors: {
    '&:hover': { background: '#e9ecef' },
  },
  '@media': {
    [breakpoints.mobile]: { gridTemplateColumns: '1fr', gap: '5px', fontSize: '3.2vw' },
  },
});

export const artist = style({
  fontWeight: 600,
  color: '#333',
});

export const song = style({
  color: '#555',
});

export const loader = style({
  height: '20px',
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const loaderSpinner = style({
  width: '24px',
  height: '24px',
  border: '3px solid #f3f3f3',
  borderTop: '3px solid #ff0000',
  borderRadius: '50%',
  animation: `${spin} 0.8s linear infinite`,
});
