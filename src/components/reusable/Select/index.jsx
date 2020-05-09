import React from 'react';
import PropTypes from 'prop-types';

import { Option, SelectStyled, Wrapper } from './style';

const Select = ({ options, stretch }) => {
  return (
    <Wrapper stretch={stretch}>
      <SelectStyled>
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectStyled>
    </Wrapper>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  stretch: PropTypes.bool,
};

Select.defaultProps = {
  stretch: false,
};

export default Select;
