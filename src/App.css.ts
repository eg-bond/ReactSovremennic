import { style } from '@vanilla-extract/css';
import { breakpoints } from './styles/theme.css';

const backImgHeight = '335px';
const backImgHeight1200 = '275px';
const backImgHeight992 = '213px';

export const mainContainer = style({
  backgroundSize: `100% calc(${backImgHeight} + 1px), 100%`,
  height: '100%',
  backgroundColor: 'var(--mainClr)',
  '@media': {
    [breakpoints.w1200]: {
      backgroundSize: `100% calc(${backImgHeight1200} + 1px), 100%`,
    },
    [breakpoints.w992]: {
      backgroundSize: `110% calc(${backImgHeight992} + 1px), 100%`,
    },
    [breakpoints.mobile]: { backgroundImage: 'none' },
  },
});

export const mainContainerDefault = style({
  backgroundColor: '#b8b8b8',
});

export const flexWrapper = style({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const wrapper = style({
  height: '100%',
  minHeight: '85vh',
  borderTop: 'none !important',
  borderBottom: 'none !important',
  backgroundColor: 'var(--mainClr)',
  border: 'solid 5px var(--secondaryClr)',
  '@media': {
    [breakpoints.w992]: { border: 'solid 3px var(--secondaryClr)' },
    [breakpoints.mobile]: { borderWidth: '0', minHeight: '90vh' },
  },
});

export const mainContainerContent = style({
  display: 'grid',
  gridTemplate: '100% / repeat(4, 1fr)',
});
