import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { RadioInputStyled, LabelStyled, CustomCircle, Wrapper } from './style';

const RadioSelect = ({ name, options }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const onChange = ({ target }) => setSelectedValue(target.value);

  return (
    <Wrapper>
      {options.map(option => (
        <div key={option.value}>
          <LabelStyled isSelected={selectedValue === option.value}>
            <CustomCircle isSelected={selectedValue === option.value} />
            {option.label}
            <RadioInputStyled name={name} onChange={onChange} value={option.value} />
          </LabelStyled>
        </div>
      ))}
    </Wrapper>
  );
};

RadioSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RadioSelect;
