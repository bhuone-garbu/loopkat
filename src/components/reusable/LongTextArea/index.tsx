import React from 'react';

import { TextAreaStyled } from './style';

interface Props {
  name: string;
  placeholder: string;
  rows: number;
}

const TextArea = ({ name, placeholder, rows }: Props) => (
  <TextAreaStyled name={name} placeholder={placeholder} rows={rows} />
);

TextArea.defaultProps = {
  placeholder: null,
  rows: 5,
};

export default TextArea;
