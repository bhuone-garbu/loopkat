import React from 'react';

import { ProgressBarWrapper, ProgressWrapper } from './style';

interface Props {
  maxWidth: string;
  percentage: number;
}

const ProgressBar = ({ maxWidth, percentage }: Props) => {
  return (
    <ProgressWrapper maxWidth={maxWidth}>
      <ProgressBarWrapper percentage={percentage} />
    </ProgressWrapper>
  );
};

ProgressBar.defaultProps = {
  maxWidth: '100%',
  percentage: 0,
};

export default ProgressBar;
