import { css } from 'styled-components';
import { FontConstT, SCREEN_WIDTH } from './constants';

export const makeDesktopTitlesFS = (FONT_CONST: FontConstT) => css`
  font-size: ${FONT_CONST.BASIC};
  @media ${SCREEN_WIDTH.BELOW_1200} {
    font-size: ${FONT_CONST.BELOW_1200};
  }
  @media ${SCREEN_WIDTH.BELOW_992} {
    font-size: ${FONT_CONST.BELOW_992};
  }
`;

export const makeDesktopParagraphsFS = () => css`
  font-size: 1.2rem;
  @media ${SCREEN_WIDTH.BELOW_1200} {
    font-size: 1.05rem;
  }
  @media ${SCREEN_WIDTH.BELOW_992} {
    font-size: 0.9rem;
  }
`;
