import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonStyled, SpanStyled } from './style';

const Button = ({ stretch, type, value }) => {
  return (
    <ButtonContainer stretch={stretch}>
      <ButtonStyled stretch={stretch} type={type}>
        <SpanStyled>{value}</SpanStyled>
      </ButtonStyled>
    </ButtonContainer>
  );
};

Button.propTypes = {
  stretch: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  stretch: false,
  type: 'button',
};

export default Button;
