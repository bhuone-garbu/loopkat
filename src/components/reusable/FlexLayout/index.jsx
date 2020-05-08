import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FlexLayoutWrapper } from './style';

const FlexLayout = ({ children, flexDirection, justifyContent, stretchHeight, stretchWidth }) => (
  <FlexLayoutWrapper
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    stretchHeight={stretchHeight}
    stretchWidth={stretchWidth}
  >
    {children}
  </FlexLayoutWrapper>
);

FlexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  stretchHeight: PropTypes.bool,
  stretchWidth: PropTypes.bool,
};

FlexLayout.defaultProps = {
  flexDirection: 'column',
  justifyContent: null,
  stretchHeight: false,
  stretchWidth: false,
};

export default memo(FlexLayout);
