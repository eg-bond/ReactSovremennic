import { style, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const zoomIn = keyframes({
  from: { opacity: 0, transform: 'scale(0.95)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  animation: `${fadeIn} 0.2s ease-out`,
});

export const modalContent = style({
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  animation: `${zoomIn} 0.2s ease-out`,
});

export const modalImage = style({
  display: 'block',
  maxWidth: '100%',
  maxHeight: '90vh',
  objectFit: 'contain',
});
