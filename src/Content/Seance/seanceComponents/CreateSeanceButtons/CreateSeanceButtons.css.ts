import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from '@/styles/theme.css';

export const seanceButtons = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '0.4rem',
});

globalStyle(`${seanceButtons} > button`, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  border: '2px solid',
  outline: 'none',
  padding: '7px 10px',
  fontSize: '1rem',
  '@media': {
    [breakpoints.w1200]: { fontSize: '0.8rem' },
    [breakpoints.w992]: { fontSize: '0.6rem', padding: '3px 8px', border: '1px solid' },
  },
});

globalStyle(`${seanceButtons} > button > span`, {
  alignSelf: 'center',
});

globalStyle(`${seanceButtons} .active`, {
  color: 'var(--mainClr)',
  backgroundColor: 'var(--secondaryClr)',
});

export const seanceButtonsDefault = style({
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
});

globalStyle(`${seanceButtonsDefault} > button`, {
  flexBasis: '14%',
});

export const seanceButtonsSpecial = style({
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
});
