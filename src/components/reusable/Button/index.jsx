import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled, SpanStyled } from './style';

const Button = ({ stretch, type, value }) => {
  return (
    <ButtonStyled stretch={stretch} type={type}>
      <SpanStyled>{value}</SpanStyled>
    </ButtonStyled>
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
