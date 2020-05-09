import React from 'react';
import PropTypes from 'prop-types';

import { InputStyled } from './style';

const Input = ({ isDisabled, maxLength, name, placeholder, type, label, stretch }) => {
  return (
    <InputStyled
      isDisabled={isDisabled}
      label={label}
      maxLength={maxLength}
      name={name}
      placeholder={placeholder}
      stretch={stretch}
      type={type}
    />
  );
};

Input.propTypes = {
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  stretch: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'search', 'text']),
};

Input.defaultProps = {
  isDisabled: false,
  label: null,
  maxLength: 50,
  placeholder: null,
  stretch: false,
  type: 'text',
};

export default Input;
