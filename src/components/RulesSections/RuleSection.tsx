import React from 'react';
import styled from 'styled-components';
import { RuleSectionT } from './data';
import { RulesParagraph, RulesSubTitle } from './RulesSections';

export const RuleSection: React.FC<{
  section: RuleSectionT;
}> = ({ section }) => {
  return (
    <>
      <RulesSubTitle>{section.title}</RulesSubTitle>
      <RulesParagraph>
        {section.content.map((item, index) => (
          <React.Fragment key={index}>
            &bull;
            <Spacer>.</Spacer>
            {item.text}
            {item.subitems && (
              <>
                <br />
                {item.subitems.map((subitem, subIndex) => (
                  <React.Fragment key={subIndex}>
                    &nbsp; &bull;
                    <Spacer>.</Spacer>
                    {subitem}
                    <br />
                  </React.Fragment>
                ))}
              </>
            )}
            {!item.subitems && <br />}
          </React.Fragment>
        ))}
      </RulesParagraph>
    </>
  );
};

const Spacer = styled.span`
  white-space: nowrap;
  opacity: 0;
`;
