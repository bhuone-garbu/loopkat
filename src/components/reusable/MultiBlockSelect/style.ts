import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
`;

interface GridItemProps {
  isSelected?: boolean;
}

export const GridItem = styled.div<GridItemProps>(
  p => css`
    padding: 2rem;
    color: ${p.theme.colors.grey};
    font-size: 1.6rem;
    text-align: center;
    background: ${p.theme.colors.greyLighter};
    border: ${p.theme.fields.borderSize} solid ${p.theme.colors.greyLight};
    border-radius: ${p.theme.fields.borderRadius};
    box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: color 0.1s ease, border-color 0.2s ease, transform 0.2s ease;

    &:hover,
    &:focus {
      color: ${p.theme.colors.white};
      background: ${p.theme.colors.blue};
      transform: ${!p.isSelected && 'scale(1.02)'};
    }

    &:active {
      transform: ${!p.isSelected && 'scale(0.95)'};
    }

    ${p.isSelected &&
    css`
      color: ${p.theme.colors.white};
      background: ${p.theme.colors.blue};
      transform: scale(0.95);
    `};
  `,
);
