import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
`;

export const GridItem = styled.div`
  padding: 2rem;
  color: ${p => p.theme.colors.grey};
  /* font-size: 0.95em; */
  background: ${p => p.theme.colors.greyLighter};
  border: ${p => p.theme.fields.borderSize} solid ${p => p.theme.colors.greyLight};
  border-radius: ${p => p.theme.fields.borderRadius};
  box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: color 0.1s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.blue};
    transform: ${p => !p.isSelected && 'scale(1.02)'};
  }

  &:active {
    transform: ${p => !p.isSelected && 'scale(0.95)'};
  }

  ${p =>
    p.isSelected &&
    css`
      color: ${p.theme.colors.white};
      background: ${p.theme.colors.blue};
      transform: scale(0.95);
    `};
`;
