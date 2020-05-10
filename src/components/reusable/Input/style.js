import styled from 'styled-components';

import { resetInput } from '../../../styles/mixins';

export const InputStyled = styled.input.attrs(p => ({
  inputmode: p.type === 'number' ? 'numeric' : null,
  maxLength: p.maxLength,
  pattern: p.type === 'number' ? '[0-9]*' : null,
  type: p.type,
}))`
  ${resetInput};
  display: inline-block;
  width: auto;
  width: ${p => p.stretch && '100%'};
  min-height: ${p => p.theme.fields.inputHeight};
  padding: 0 1rem;
  font-size: 1.8rem;
  border: ${p => p.theme.fields.borderSize} solid ${p => p.theme.colors.greyLight};
  border-radius: ${p => p.theme.fields.borderRadius};
  opacity: ${p => p.isDisabled && '0.5'};

  &:hover {
    border-color: ${p => p.theme.colors.black};
  }

  &:nth-of-type(n + 2) {
    margin-top: 1rem;
  }
`;
