import React, { ChangeEvent, useState } from 'react';

import { RadioInputStyled, LabelStyled, CustomCircle, Wrapper } from './style';

interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  options: Array<Option>;
}

const RadioSelect = ({ name, options }: Props) => {
  const [selectedValue, setSelectedValue] = useState('');

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setSelectedValue(target.value);

  return (
    <Wrapper>
      {options.map(option => (
        <div key={option.value}>
          <LabelStyled isSelected={selectedValue === option.value}>
            <CustomCircle isSelected={selectedValue === option.value} />
            {option.label}
            <RadioInputStyled
              name={name}
              onChange={onChange}
              value={option.value}
            />
          </LabelStyled>
        </div>
      ))}
    </Wrapper>
  );
};

export default RadioSelect;
