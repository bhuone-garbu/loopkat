import { css } from 'styled-components';

export default css`
  display: block;
  box-sizing: border-box;
  width: 100%;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: normal;
  letter-spacing: inherit;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  outline: none;
  box-shadow: none;
  appearance: none;

  &:focus {
    outline: none;
  }
  &[disabled] {
    cursor: default;
    pointer-events: none;
  }
`;
