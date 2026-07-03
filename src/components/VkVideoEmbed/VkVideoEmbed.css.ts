import { style } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const embedResponsive = style({
  position: 'relative',
  border: 'solid 1px var(--secondaryClr)',
  borderRadius: '10px',
  overflow: 'hidden',
  marginBottom: '2%',
  width: '100%',
  paddingTop: '55%',
  '@media': {
    [breakpoints.mobile]: { margin: '2% 0 2% 0' },
  },
});

export const embedResponsiveItem = style({
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '100%',
  border: '0',
  borderRadius: '10px',
});
