import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '3/4',
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  containerType: 'size',
});

export const img = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

export const imgLoaded = style({
  opacity: 1,
});

export const ageRating = style({
  position: 'absolute',
  top: '4cqw',
  left: '4cqw',
  backgroundColor: 'rgba(222, 5, 5, 0.832)',
  color: 'white',
  padding: '2cqw 3cqw',
  fontSize: '7cqw',
  borderRadius: '4px',
  fontWeight: '500',
});

export const pirateBanner = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: '#dc2626',
  color: 'white',
  padding: '1.8cqw 1cqw 1cqw 1cqw',
  fontSize: '6.2cqw',
  lineHeight: '1',
  textAlign: 'center',
  width: '100%',
  fontWeight: '600',
});
