import React, { ChangeEvent, useState } from 'react';

import { InputStyled } from './style';

type InputType = 'email' | 'number' | 'search' | 'text' | 'password';

interface Props {
  isDisabled: boolean;
  label: string;
  maxLength: number;
  name: string;
  placeholder: string;
  stretch: boolean;
  type: InputType;
  value: string;
}

const Input = ({
  isDisabled,
  maxLength,
  name,
  placeholder,
  type,
  label,
  stretch,
  value,
}: Props) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <InputStyled
      isDisabled={isDisabled}
      label={label}
      maxLength={maxLength}
      name={name}
      onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
        setCurrentValue(target.value)
      }
      placeholder={placeholder}
      stretch={stretch}
      type={type}
      value={currentValue}
    />
  );
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
