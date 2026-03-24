import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const advSlider = style({
  borderRadius: vars.borderRadius.images,
  border: vars.borders.b1px,
  overflow: 'hidden',
  position: 'relative',
  cursor: 'grab',
  width: '100%',
  aspectRatio: '2/3',
});
