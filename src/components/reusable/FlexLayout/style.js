import styled from 'styled-components';

export const FlexLayoutWrapper = styled.div`
  display: flex;
  flex-direction: ${p => p.flexDirection};
  flex-grow: ${p => p.stretchHeight && 1};
  justify-content: ${p => p.justifyContent};
  width: ${p => p.stretchWidth && '100%'};
  max-width: 1080px;
  padding: 1rem 2rem;
  margin: 0 auto;
`;
