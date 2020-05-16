import React from 'react';

import { Option, SelectStyled, Wrapper } from './style';

interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  options: Array<Option>;
  stretch: boolean;
}

const Select = ({ name, options, stretch }: Props) => {
  return (
    <Wrapper stretch={stretch}>
      <SelectStyled name={name}>
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectStyled>
    </Wrapper>
  );
};

Select.defaultProps = {
  stretch: false,
};

export default Select;
