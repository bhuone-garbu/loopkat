import styled, { css } from 'styled-components';

import { resetButton, typographyHeading } from '../../../styles/mixins';

export const ButtonContainer = styled.div`
  display: inline-block;
  width: ${p => p.stretch && '100%'};
  margin: 2rem auto;
`;

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
    color: white;
    font-weight: 700;

    text-align: center;
    background: ${p.theme.colors.blue};
    border-radius: ${p.theme.fields.borderRadius};
    cursor: pointer;

    &:active {
      background: ${p.theme.colors.primary};
    }
  `,
);
