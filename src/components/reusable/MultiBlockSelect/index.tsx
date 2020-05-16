import React, { useState } from 'react';

import { Grid, GridItem } from './style';

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Array<Option>;
}

const MultiBlock = ({ options }: Props) => {
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  const updateSelectedOption = (targetValue: string) => {
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

export default MultiBlock;
