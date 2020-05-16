import styled, { css } from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;
  margin: 0 auto;
`;

export const QuestionTitle = styled.h3`
  margin-right: 1rem;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
`;

export const QuestionWrapper = styled.section`
  margin: 4rem 0;
`;

export const QuestionInputWrapper = styled.div`
  margin-top: 0.5rem;
`;

export const ResponsiveAnchor = styled.a(
  p => css`
    display: inline-block;
    margin: 2rem auto;

    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge
        .breakpoint}) {
      width: 100%;
    }
  `,
);
