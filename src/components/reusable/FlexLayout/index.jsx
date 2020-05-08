import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FlexLayoutWrapper } from './style';

const MainContainer = ({ children, flexDirection, stretchHeight, stretchWidth }) => (
  <FlexLayoutWrapper
    flexDirection={flexDirection}
    stretchHeight={stretchHeight}
    stretchWidth={stretchWidth}
  >
    {children}
  </FlexLayoutWrapper>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.string,
  stretchHeight: PropTypes.bool,
  stretchWidth: PropTypes.bool,
};

MainContainer.defaultProps = {
  flexDirection: 'column',
  stretchHeight: false,
  stretchWidth: false,
};

export default memo(MainContainer);
