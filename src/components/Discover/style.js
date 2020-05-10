import styled, { css } from 'styled-components';

import { typographyHeading, resetButton } from '../../styles/mixins';

export const FormStyled = styled.form`
  width: 100%;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  ${typographyHeading};
`;

export const QuestionWrapper = styled.section`
  margin: 6.5rem 0 0;
`;

export const QuestionTitle = styled.h3`
  margin-right: 1rem;
`;

export const QuestionInputWrapper = styled.div`
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
`;

export const ResponsiveAnchor = styled.a(
  p => css`
    display: inline-block;
    margin: 0 auto;

    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge.breakpoint}) {
      width: 100%;
    }
  `,
);

export const ButtonStyled = styled.button(
  p => css`
    ${resetButton};
    ${typographyHeading};
    padding: 1rem 4rem;
    margin: 4rem auto;
    color: white;
    font-weight: 700;
    text-align: center;
    background: ${p.theme.colors.blue};
    border-radius: ${p.theme.fields.borderRadius};
    cursor: pointer;

    &:active {
      background: ${p.theme.colors.primary};
    }

    &:hover {
      transform: scale(1.02);
    }
  `,
);
