import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  InputRangeStyled,
  LabelWrapper,
  SliderContainer,
  SlideListItem,
  SlideListStyled,
  ValueWrapper,
  Wrapper,
} from './style';

const SliderInput = ({ label, name, rangeMax, rangeMin, rangeStep }) => {
  const [value, setValue] = useState(1);

  const handleInputChange = ({ target: rangeInput }) => {
    setValue(rangeInput.value);
  };

  const range = rangeMax - rangeMin;
  const relativeValue = value - rangeMin;
  const percentComplete = (relativeValue / range) * 100;
  const stepValue = rangeStep || range / 100;

  return (
    <Wrapper>
      {/* <Wrapper> */}
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
      <ValueWrapper left={percentComplete}>{value}</ValueWrapper>
      {/* </Wrapper> */}
    </Wrapper>
  );
};

SliderInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  rangeMax: PropTypes.number,
  rangeMin: PropTypes.number,
  rangeStep: PropTypes.number,
};

SliderInput.defaultProps = {
  label: null,
  rangeMax: 5,
  rangeMin: 1,
  rangeStep: 1,
};

export default SliderInput;
