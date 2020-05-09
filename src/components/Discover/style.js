import styled, { css } from 'styled-components';

import { typographyHeading } from '../../styles/mixins';

export const FormStyled = styled.form`
  width: 100%;
  margin: 0 auto;

  /* ${p => css`
    @media only screen and (min-width: ${p.theme.breakpoints.desktop.breakpoint}) {
      width: ${p.theme.breakpoints.tablet.breakpoint};
    }
  `} */
`;

export const FormTitle = styled.h2`
  ${typographyHeading};
`;

export const QuestionWrapper = styled.section`
  margin: 6.5rem 0;
`;

export const QuestionTitle = styled.h3`
  margin-right: 1rem;
`;

export const HelpSubtitle = styled.p`
  color: ${p => p.theme.colors.greyLight};
  font-weight: 700;
`;

export const QuestionInputWrapper = styled.div`
  margin-top: 1rem;
`;
