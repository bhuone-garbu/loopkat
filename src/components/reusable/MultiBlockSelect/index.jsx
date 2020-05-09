import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, GridItem } from './style';

const MultiBlock = ({ options }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const updateSelectedOption = targetValue => {
    if (selectedItems.includes(targetValue)) {
      setSelectedItems(selectedItems.filter(item => item !== targetValue));
    } else {
      setSelectedItems(Array.from(new Set([...selectedItems, targetValue])));
    }
  };

  return (
    <Grid>
      {options.map(option => (
        <GridItem
          isSelected={selectedItems.includes(option.value)}
          key={option.label}
          onClick={() => updateSelectedOption(option.value)}
        >
          {option.label}
        </GridItem>
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
