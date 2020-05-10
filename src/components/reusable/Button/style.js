import styled, { css } from 'styled-components';

import { resetButton, typographyHeading } from '../../../styles/mixins';

export const SpanStyled = styled.span`
  height: 1.8rem;
  line-height: 1.8rem;
`;

export const ButtonStyled = styled.button(
  p => css`
    ${resetButton};
    ${typographyHeading};
    width: ${p.stretch && '100%'};
    padding: 1rem 8rem;
    margin: 2rem auto;
    color: white;
    font-weight: 700;

    text-align: center;
    background: ${p.theme.colors.blue};
    border-radius: ${p.theme.fields.borderRadius};
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:active {
      background: ${p.theme.colors.primary};
    }
  `,
);
