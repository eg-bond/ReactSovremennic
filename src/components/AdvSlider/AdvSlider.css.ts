import { style, globalStyle } from '@vanilla-extract/css';
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

export const advSliderWide = style({
  aspectRatio: '16/9',
});

export const imgContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

globalStyle(`${imgContainer} img:hover`, {
  opacity: 0.85,
});

globalStyle(`${advSlider} .embla__container`, {
  display: 'flex',
  height: '100%',
});

globalStyle(`${advSlider} .embla__slide`, {
  flex: '0 0 100%',
  minWidth: 0,
  position: 'relative',
});

globalStyle(`${advSlider} .embla__slide > *`, {
  display: 'block',
  height: '100%',
});

export const img = style({
  borderRadius: vars.borderRadius.images,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const modalButton = style({
  background: 'none',
  border: 'none',
});
