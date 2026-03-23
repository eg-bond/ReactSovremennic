import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const imgContainer = style({
  position: 'relative',
  width: '100%',
  border: 'solid 1px var(--secondaryClr)',
  borderRadius: vars.borderRadius.images,
  overflow: 'hidden',
  selectors: {
    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  },
});
