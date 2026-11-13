import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const zoomIn = keyframes({
  from: { opacity: 0, transform: 'scale(0.95)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  zIndex: 1000,
  animation: `${fadeIn} 0.2s ease-out`,
});

export const content = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  maxWidth: '90vw',
  maxHeight: '90vh',
  animation: `${zoomIn} 0.2s ease-out`,
});

export const video = style({
  display: 'block',
  width: 'auto',
  height: 'auto',
  maxWidth: '90vw',
  maxHeight: '80vh',
  backgroundColor: '#000',
  borderRadius: vars.borderRadius.images,
});

export const closeButton = style({
  position: 'absolute',
  top: '-40px',
  right: 0,
  width: '32px',
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.15)',
  color: '#fff',
  fontSize: '22px',
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  selectors: {
    '&:hover': { background: 'rgba(255, 255, 255, 0.3)' },
  },
});

export const dots = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
});

export const dot = style({
  width: '10px',
  height: '10px',
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.35)',
  cursor: 'pointer',
  transition: 'background 0.2s ease, transform 0.2s ease',
  selectors: {
    '&:hover': { background: 'rgba(255, 255, 255, 0.6)' },
  },
});

export const dotActive = style({
  background: '#fff',
  transform: 'scale(1.2)',
});
