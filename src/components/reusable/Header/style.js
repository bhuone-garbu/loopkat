import styled from 'styled-components';

import { typographyCursive, typographyHeading } from '../../../styles/mixins';

export const HeadingText = styled.span`
  ${typographyCursive};
  margin: 0;
  color: ${p => p.theme.colors.red};
  font-size: 3rem;

  &:active {
    color: ${p => p.theme.colors.primary};
    font-weight: bold;
  }
`;

export const ColoredText = styled.span`
  ${typographyHeading};
  /* color: ${p => p.theme.colors.primary}; */
  /* text-transform: uppercase; */
`;

export const Body = styled.header`
  ${typographyCursive};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.theme.colors.primary};
  font-weight: 700;
`;

export const HeaderContainer = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;
