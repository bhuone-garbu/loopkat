import styled from 'styled-components';

import { resetInput } from '../../../styles/mixins';

export const TextAreaStyled = styled.textarea.attrs(p => ({
  placeholder: p.placeholder,
  rows: p.rows,
}))`
  ${resetInput};
  width: 100%;
  padding: 1rem;
  border: ${p => p.theme.fields.borderSize} solid
    ${p => p.theme.colors.greyLight};
  border-radius: ${p => p.theme.fields.borderRadius};
  resize: vertical;

  &:hover {
    border-color: ${p => p.theme.colors.primary};
  }
`;
