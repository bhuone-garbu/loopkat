import React from 'react';
import PropTypes from 'prop-types';

import { TextAreaStyled } from './style';

const TextArea = ({ name, placeholder, rows }) => (
  <TextAreaStyled name={name} placeholder={placeholder} rows={rows} />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  placeholder: null,
  rows: 5,
};

export default TextArea;
