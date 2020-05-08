import styled from 'styled-components';

import { typographyCursive } from '../../styles/mixins';

export const HeadingText = styled.span`
  margin: 0;
  font-size: 3.5rem;

  &:active {
    color: ${p => p.theme.colors.secondary};
    font-weight: bold;
  }
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
  /* background: ${p => p.theme.colors.background}; */
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;
