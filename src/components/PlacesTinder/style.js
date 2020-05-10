import styled, { css } from 'styled-components';

export const CONTAINER_MAX_WIDTH = '65rem';
export const SQUARE_MAX_WIDTH = '45rem';

export const Wrapper = styled.section`
  width: 100%;
  max-width: ${CONTAINER_MAX_WIDTH};
  margin: 0 auto;
  text-align: center;
`;

export const SpanStyled = styled.span`
  color: ${p => p.theme.colors.primary};
`;

export const ParagraphStyled = styled.p`
  margin: 0;
`;

export const Title = styled.h2`
  margin-top: 0.5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 100%;
  padding: 1rem;
  overflow: hidden;
  text-align: left;
`;

export const DescriptionWrapper = styled.div`
  overflow-y: scroll;
`;

export const ImageWrapper = styled.div`
  flex: 3;
  overflow: hidden;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.fields.borderRadius} ${p => p.theme.fields.borderRadius} 0 0;
  /* transform: translateY(-50%); */
`;

export const LocationContentWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SquareCard = styled.div`
  width: 100%;
  max-width: ${SQUARE_MAX_WIDTH};
  margin: 0 auto;
`;

export const SquareMaker = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 115%; /* 4:3.5 ratio */
  background: ${p => p.theme.colors.greyLighter};
  border: 1px solid ${p => p.theme.colors.greyLight};
  border-radius: ${p => p.theme.fields.borderRadius};
  box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.2);
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
`;

export const ActionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${SQUARE_MAX_WIDTH};
  margin: 2.5rem auto 0;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.2rem;
  height: 7.2rem;
  padding: 2rem;
  color: ${p => p.theme.colors.white};
  background: ${p => p.bgColor};
  border-radius: 50%;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }

  &:active {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    transform: scale(0.95);
  }
`;

export const BackAction = styled(Action)`
  color: currentColor;
`;

export const ResponsiveAnchor = styled.a(
  p => css`
    display: inline-block;
    margin: 2rem auto;

    @media screen and (max-width: ${p.theme.breakpoints.mobileLarge.breakpoint}) {
      width: 100%;
    }
  `,
);
