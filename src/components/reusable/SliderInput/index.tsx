import React, { ChangeEvent, useState } from 'react';

import {
  InputRangeStyled,
  LabelWrapper,
  SliderContainer,
  SlideListItem,
  SlideListStyled,
  ValueWrapper,
  Wrapper,
} from './style';

interface Props {
  label: string;
  name: string;
  rangeMax: number;
  rangeMin: number;
  rangeStep: number;
}

const SliderInput = ({ label, name, rangeMax, rangeMin, rangeStep }: Props) => {
  const [value, setValue] = useState(1);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(target.value, 10));
  };

  const range = rangeMax - rangeMin;
  const relativeValue = value - rangeMin;
  const percentComplete = (relativeValue / range) * 100;
  const stepValue = rangeStep || range / 100;

  return (
    <Wrapper>
      {label && <LabelWrapper>{label}</LabelWrapper>}
      <SliderContainer>
        <InputRangeStyled
          max={rangeMax}
          min={rangeMin}
          name={name}
          onChange={handleInputChange}
          percentComplete={percentComplete}
          step={stepValue}
          type="range"
          value={value}
        />
        <SlideListStyled>
          {[...Array(rangeMax / stepValue).keys()].map(n => (
            <SlideListItem complete={n < value} key={n} />
          ))}
        </SlideListStyled>
      </SliderContainer>
      <ValueWrapper>{value}</ValueWrapper>
    </Wrapper>
  );
};

SliderInput.defaultProps = {
  label: null,
  rangeMax: 5,
  rangeMin: 1,
  rangeStep: 1,
};

export default SliderInput;
