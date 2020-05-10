import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
`;

export const GridItem = styled.div`
  padding: 2rem;
  font-size: 2rem;
  border: ${p => p.theme.fields.borderSize} solid ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.fields.borderRadius};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: color 0.1s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    border-color: ${p => !p.isSelected && p.theme.colors.grey};
    transform: ${p => !p.isSelected && 'scale(1.02)'};
  }

  &:active {
    transform: ${p => !p.isSelected && 'scale(0.95)'};
  }

  ${p =>
    p.isSelected &&
    css`
      color: ${p.theme.colors.white};
      font-weight: 700;
      background: ${p.theme.colors.primary};
      transform: scale(0.95);
    `};
`;
