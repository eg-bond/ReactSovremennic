import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '9/16',
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
});

export const video = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: vars.borderRadius.images,
});
