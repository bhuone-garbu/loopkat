import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InputStyled } from './style';

const Input = ({ isDisabled, maxLength, name, placeholder, type, label, stretch, value }) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <InputStyled
      isDisabled={isDisabled}
      label={label}
      maxLength={maxLength}
      name={name}
      onChange={e => setCurrentValue(e.target.value)}
      placeholder={placeholder}
      stretch={stretch}
      type={type}
      value={currentValue}
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
  value: PropTypes.string,
};

Input.defaultProps = {
  isDisabled: false,
  label: null,
  maxLength: 50,
  placeholder: null,
  stretch: false,
  type: 'text',
  value: '',
};

export default Input;
