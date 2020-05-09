import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1rem 0;
`;

export const RadioInputStyled = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

export const CustomCircle = styled.span`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  margin-right: 1rem;
  background: ${p => p.theme.colors.greyLighter};
  background: ${p => p.isSelected && p.theme.colors.primary};
  background-clip: content-box;
  border: 3px solid ${p => p.theme.colors.blue};
  border-color: ${p => p.isSelected && p.theme.colors.primary};
  border-radius: 50%;
`;

export const LabelStyled = styled.label`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-height: 4rem;
  color: ${p => p.theme.colors.blue};
  cursor: pointer;
  opacity: ${p => (p.isSelected ? 1 : 0.8)};
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */

  &:hover {
    opacity: 1;
  }
`;
