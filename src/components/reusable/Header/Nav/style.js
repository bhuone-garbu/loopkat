import styled from 'styled-components';

export const ListItem = styled.li`
  list-style: none;

  &:active {
    color: ${p => p.theme.colors.blue};
    font-weight: 700;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;

  a:nth-of-type(n + 2) {
    margin-left: 2rem;
  }
`;
