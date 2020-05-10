import styled, { css } from 'styled-components';

export const SpanStyled = styled.span`
  color: ${p => p.theme.colors.primary};
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  max-height: 25rem;
  object-fit: cover;
  border-radius: 5px;
`;

export const SectionWrapper = styled.section`
  padding-top: 2rem;
  margin-top: 3rem;
`;

export const ColumnWrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`;

export const Column = styled.article`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  margin: 0 auto 2rem auto;

  ${p => css`
    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge.breakpoint}) {
      display: flex;
      width: 100%;
    }
  `}
`;

export const CardWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 1rem;
  text-align: left;
  border: 1px solid ${p => p.theme.colors.greyLight};
  border-radius: ${p => p.theme.fields.borderRadius};
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  /* ${p => css`
    @media screen and (max-width: ${p.theme.breakpoints.tablet.breakpoint}) {
      width: 20rem;
    }
  `} */

  ${p => css`
    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge.breakpoint}) {
      width: 100%;
      height: auto;
    }
  `}
`;

export const Main = styled.main`
  text-align: center;
`;
