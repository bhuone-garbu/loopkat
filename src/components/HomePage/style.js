import styled from 'styled-components';

export const SpanStyled = styled.span`
  color: ${p => p.theme.colors.red};
`;

export const ParagraphWrapper = styled.div`
  margin-top: 2rem;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
