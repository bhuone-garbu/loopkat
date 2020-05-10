import styled, { css } from 'styled-components';

import { resetSelect } from '../../../styles/mixins';

export const Wrapper = styled.div(
  p => css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    min-height: ${p.theme.fields.inputHeight};
    margin-left: 1rem;
    border: ${p.theme.fields.borderSize} solid ${p.theme.colors.greyLight};
    border-radius: ${p.theme.fields.borderRadius};

    ${p.stretch &&
      css`
        width: 100%;
        margin: 0;
      `}

    &:hover {
      border-color: ${p.theme.colors.black};
    }

    &:active {
      border-color: ${p.theme.colors.primary};
    }

    &:nth-of-type(n + 2) {
      margin-top: 1rem;
    }
  `,
);

export const SelectStyled = styled.select`
  ${resetSelect};
  flex-grow: 1;
  padding: 0 1rem;
  color: ${p => p.theme.colors.grey};
  font-size: 1.8rem;
`;

export const Option = styled.option`
  color: inherit;
`;
