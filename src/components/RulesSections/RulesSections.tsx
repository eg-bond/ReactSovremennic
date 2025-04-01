import styled from 'styled-components';
import {
  H1_FS, H2_FS, makeDesktopParagraphsFS, makeDesktopTitlesFS,
  MOBILE_P_FS, MOBILE_TITLE_FS, SCREEN_WIDTH,
} from '@/utils';
import { RULES_DATA } from './data';
import { RuleSection } from './RuleSection';

export const RulesSections = () => {
  return (
    <>
      <RulesMainTitle>
        Правила Кинотеатра «Современник»
      </RulesMainTitle>

      <RulesParagraph>
        &bull; Настоящие правила разработаны в соответствии с Законом РФ «О защите прав
        потребителя» №2300-1 от 07.02.1992г., Постановлением Правительства РФ
        №1264 от 17.11.1994г. «Об утверждении Правил по кинообслуживанию и
        Постановлением Правительства РФ № 1036 от 15 августа 1997 г. «Об
        утверждении Правил оказания услуг общественного питания».
      </RulesParagraph>

      {RULES_DATA.map((section, index) => (
        <RuleSection key={index} section={section} />
      ))}
    </>
  );
};

const BaseTitle = styled.h1`  
  text-align: center;
  
  @media ${SCREEN_WIDTH.BELOW_768} {
    margin: 1vw 0;
  }
`;

const RulesMainTitle = styled(BaseTitle)`
  margin-top: 0;
  ${makeDesktopTitlesFS(H1_FS)}
  
  @media ${SCREEN_WIDTH.BELOW_768} {
    font-size: ${MOBILE_TITLE_FS.H1};
  }
`;

export const RulesSubTitle = styled(BaseTitle).attrs({ as: 'h2' })`
  ${makeDesktopTitlesFS(H2_FS)}
  
  @media ${SCREEN_WIDTH.BELOW_768} {
    font-size: ${MOBILE_TITLE_FS.H2};
  }
`;

export const RulesParagraph = styled.p`  
  text-align: justify;
  ${makeDesktopParagraphsFS()}
  
  @media ${SCREEN_WIDTH.BELOW_768} {
    font-size: ${MOBILE_P_FS};
  }  
`;
