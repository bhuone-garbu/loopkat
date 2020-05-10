import React from 'react';
import PropTypes from 'prop-types';

import { ProgressBarWrapper, ProgressWrapper } from './style';

const ProgressBar = ({ maxWidth, percentage }) => {
  return (
    <ProgressWrapper maxWidth={maxWidth}>
      <ProgressBarWrapper percentage={percentage} />
    </ProgressWrapper>
  );
};

ProgressBar.propTypes = {
  maxWidth: PropTypes.string,
  percentage: PropTypes.number,
};

ProgressBar.defaultProps = {
  maxWidth: null,
  percentage: 0,
};

export default ProgressBar;
