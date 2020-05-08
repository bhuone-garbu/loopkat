import { css } from 'styled-components';

export default css`
  display: block;
  width: 100%;
  color: inherit;
  font-weight: normal;
  font-size: inherit;
  font-family: inherit;
  line-height: normal;
  letter-spacing: inherit;
  white-space: nowrap;
  background-color: transparent;
  background-image: none;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  appearance: none;
  user-select: none;
  &::-ms-value {
    color: inherit;
    background: transparent;
  }
  &::-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
  }
  &:-moz-focusring {
    color: currentColor;
  }
  &[disabled] {
    cursor: default;
    pointer-events: none;
  }
  option {
    color: currentColor;
    background-color: transparent;
    &:disabled {
      color: currentColor;
      text-shadow: none;
      background-color: transparent;
    }
  }
`;
