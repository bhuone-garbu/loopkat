import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Grid, GridItem } from './style';

const MultiBlock = ({ options }) => {
  return (
    <Grid>
      {options.map(option => (
        <GridItem key={option.label}>{option.label}</GridItem>
      ))}
    </Grid>
  );
};

MultiBlock.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MultiBlock;
