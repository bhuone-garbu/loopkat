import styled from 'styled-components';

export const SpanStyled = styled.span`
  color: ${p => p.theme.colors.red};
`;

export const ParagraphWrapper = styled.div`
  margin-top: 2rem;
`;

export const ImageStyled = styled.img`
  display: block;
  width: 70%;
  height: 70%;
  object-fit: cover;
  border-radius: 5px;
`;

export const CardWrapper = styled.article`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 30rem;
  padding: 1rem;
  margin: 2rem;
  text-align: left;
  border: 1px solid ${p => p.theme.colors.brown};
  border-radius: 1rem;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.grey};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  text-align: center;
`;
