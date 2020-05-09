import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

export const GridItem = styled.div`
  border: 1px solid ${p => p.theme.colors.blue};
`;
