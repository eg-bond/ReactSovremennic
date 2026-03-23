import { globalStyle } from '@vanilla-extract/css';

// Shared transition on slide image (img uses global class swSlide__img)
globalStyle('.swSlide__img', {
  transition: 'all 0.3s',
  cursor: 'pointer',
});

// Image opacity on hover/focus (img stays as global class)
globalStyle('.swSlide__a:hover .swSlide__img', { opacity: 0.85 });
globalStyle('.swSlide__a:focus-visible .swSlide__img', { opacity: 0.85 });

// Splide global overrides
globalStyle('.splide__track', { transition: 'ease 200ms' });

globalStyle('.splide__arrow', {
  background: 'transparent',
  height: '3.5em',
  width: '3.5em',
});

globalStyle('.splide__arrow svg', {
  height: '3.5em',
  width: '3.5em',
});

globalStyle('.cinemaSlider .splide__arrow svg', {
  fill: 'var(--secondaryClr)',
});

globalStyle('.cinemaSlider .splide__arrow:focus', {
  outline: 'var(--secondaryClr) solid 2px',
});
