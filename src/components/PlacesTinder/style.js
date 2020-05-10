import styled from 'styled-components';

const CONTAINER_MAX_WIDTH = '65rem';
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

export const ActionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: ${SQUARE_MAX_WIDTH};
  margin: 0 auto;
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
  margin: 0 auto 3.5rem;
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
