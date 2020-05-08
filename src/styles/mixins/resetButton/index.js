import { css } from 'styled-components';

export default css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  appearance: none;
  user-select: none;

  &[disabled] {
    text-shadow: none;
    cursor: default;
    pointer-events: none;
  }
`;
