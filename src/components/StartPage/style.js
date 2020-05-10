import styled, { css } from 'styled-components';

export const SpanStyled = styled.span`
  color: ${p => p.theme.colors.primary};
`;

export const ImageStyled = styled.img`
  width: 60%;
  max-width: 25rem;
  height: 70%;
  max-height: 25rem;
  object-fit: cover;
  border-radius: 5px;
`;

export const SectionWrapper = styled.section`
  padding-top: 2rem;
  margin-top: 3rem;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(20rem, 1fr));
  gap: 4rem;
  margin: 0 auto;

  ${p => css`
    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge.breakpoint}) {
      display: block;
      width: 100%;
    }
  `}
`;

export const GridItem = styled.article`
  width: 100%;
  margin: 0 auto 2rem auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 1rem;
  text-align: left;
  background: ${p => p.theme.colors.greyLighter};
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
    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge.breakpoint}) {
      width: 100%;
      height: auto;
    }
  `} */
`;

export const Main = styled.main`
  text-align: center;
`;
