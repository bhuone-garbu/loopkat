import styled from 'styled-components';

export const CONTAINER_MAX_WIDTH = '65rem';
export const SQUARE_MAX_WIDTH = '45rem';

export const Wrapper = styled.section`
  width: 100%;
  max-width: ${CONTAINER_MAX_WIDTH};
  margin: 0 auto;
  text-align: center;
`;

export const SpanStyled = styled.span`
  color: ${p => p.theme.colors.primary};
`;

export const ParagraphStyled = styled.p`
  margin: 0;
`;
