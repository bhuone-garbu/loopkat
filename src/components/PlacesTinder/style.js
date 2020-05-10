import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 65rem;
  margin: 0 auto;
  text-align: center;
`;

export const DescriptionWrapper = styled.p`
  text-align: left;
`;

export const ParagraphStyled = styled.p`
  margin: 0;
`;

export const Title = styled.h2`
  margin-top: 3.5rem;
  color: ${p => p.theme.colors.primary};
`;

export const ImageStyled = styled.img`
  position: absolute;
  top: 50%;
  display: block;
  width: 100%;
  padding: 1rem;
  object-fit: cover;
  transform: translateY(-50%);
`;

export const Square = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto 3.5rem;
`;

export const PictureCardWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 1rem;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  ${p => css`
    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge.breakpoint}) {
      width: 100%;
    }
  `}
`;
