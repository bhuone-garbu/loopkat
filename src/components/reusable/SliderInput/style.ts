import styled, { css } from 'styled-components';

import { resetInput } from '../../../styles/mixins';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelWrapper = styled.span`
  min-width: 90px;
  height: 100%;
  margin-right: 1rem;
  color: ${p => p.theme.colors.grey};
  font-weight: 700;
`;

const thumb = css`
  z-index: 50;
  width: 2.5rem;
  height: 2.5rem;
  background: ${p => p.theme.colors.blue};
  border: 0.5rem solid ${p => p.theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
`;

interface InputProps {
  percentComplete: number;
}

export const InputRangeStyled = styled.input<InputProps>(
  p => css`
    ${resetInput};
    position: absolute;
    z-index: 50;
    height: 0.2rem;
    background: linear-gradient(
      to right,
      ${p.theme.colors.primary} 0%,
      ${p.theme.colors.primary} ${p.percentComplete}%,
      ${p.theme.colors.greyLight} ${p.percentComplete}%,
      ${p.theme.colors.greyLight} 100%
    );
    border-radius: ${p.theme.fields.borderRadius};
    outline: none;
    cursor: pointer;

    &::-moz-focus-outer {
      border: 0;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${thumb};
    }

    &::-moz-range-thumb {
      ${thumb};
    }

    &::-ms-thumb {
      ${thumb};
    }
  `,
);

export const ValueWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0 2rem;
  margin-left: 1rem;
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  background: ${p => p.theme.colors.primary};
  border-radius: 5px;
`;

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  opacity: 0.8;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SlideListStyled = styled.ul`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface SlideListProps {
  complete?: boolean;
}

export const SlideListItem = styled.li<SlideListProps>(
  p => css`
    width: 2.25rem;
    height: 2.25rem;
    list-style: none;
    background: ${p.theme.colors.greyLight};
    background: ${p.complete && p.theme.colors.primary};
    border-radius: 50%;
  `,
);
