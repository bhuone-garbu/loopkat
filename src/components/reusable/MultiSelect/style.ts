import styled, { css } from 'styled-components';

import { resetButton } from '../../../styles/mixins';

export const Wrapper = styled.div(
  p => css`
    display: flex;
    flex-wrap: wrap;
    min-height: ${p.theme.fields.inputHeight};
    padding: 0 0 0.5rem 0.5rem;
    border: ${p.theme.fields.borderSize} solid ${p.theme.colors.greyLight};
    border-radius: ${p.theme.fields.borderRadius};
    cursor: pointer;

    &:hover {
      border-color: ${p.theme.colors.black};
    }

    &:active {
      border-color: ${p.theme.colors.primary};
    }
  `,
);

export const LabelStyled = styled.span`
  padding: 0 0.5rem;
  color: ${p => p.theme.colors.white};
`;

export const LabelCross = styled.button`
  ${resetButton};
  height: 100%;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  background: ${p => p.theme.colors.blue};

  &:hover {
    color: black;
    background: moccasin;
  }
`;

export const LabelWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  margin: 0.5rem 1.25rem 0 0;
  font-size: 0.8em;
  background: ${p => p.theme.colors.primary};
  border-radius: 2px;
`;

interface OptionWrapperProps {
  isVisible?: boolean;
}

export const OptionWrapper = styled.div<OptionWrapperProps>(
  p => css`
    height: ${!p.isVisible && '0px'};
    max-height: ${p.isVisible ? '20rem' : '0'};
    overflow-y: scroll;
    /* background: ${p.theme.colors.greyLighter}; */
    border: ${p.isVisible && '1px solid rgba(0, 0, 0, 0.2)'};
    border-radius: 2px 2px 5px 5px;
    transition: max-height 0.2s ease-in-out;
`,
);

interface OptionProps {
  isSelected?: boolean;
}

export const Option = styled.span<OptionProps>(
  p => css`
    display: block;
    padding: 1rem;
    color: ${p.isSelected && p.theme.colors.grey};
    font-size: 0.9em;
    cursor: pointer;

    &:hover {
      background: beige;
    }

    &:active {
      background: moccasin;
    }

    &:nth-of-type(n + 2) {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
  `,
);
