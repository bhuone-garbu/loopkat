import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { LabelCross, LabelStyled, LabelWrapper, Option, OptionWrapper, Wrapper } from './style';

// TODO: code needs optimization
const MultiSelect = ({ options }) => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [displayItems, setDisplayItems] = useState(options);
  const [selectedItems, setSelectedItems] = useState(
    options.filter(option => option.selected).map(option => option.name),
  );

  const optionRef = useRef(null);
  const selectRef = useRef(null);

  const invertOptionVisibility = ({ target }) => {
    if (selectRef.current && selectRef.current.isSameNode(target)) {
      setIsOptionVisible(!isOptionVisible);
    }
  };

  const handleClickOutside = ({ target }) => {
    if (target.innerText === 'x') return;
    if (!(selectRef.current.contains(target) || optionRef.current.contains(target))) {
      setIsOptionVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const updateSelectedOption = (targetName, isSelected) => {
    setDisplayItems(
      displayItems.map(item =>
        item.name === targetName ? { ...item, selected: isSelected } : item,
      ),
    );

    if (isSelected) {
      setSelectedItems(Array.from(new Set([...selectedItems, targetName])));
    } else {
      setSelectedItems(selectedItems.filter(item => item !== targetName));
    }
  };

  return (
    <>
      <Wrapper name="multiWrapper" onClick={invertOptionVisibility} ref={selectRef}>
        {selectedItems.map(name => (
          <LabelWrapper key={name}>
            <LabelStyled>{name}</LabelStyled>
            <LabelCross onClick={() => updateSelectedOption(name, false)}>x</LabelCross>
          </LabelWrapper>
        ))}
      </Wrapper>
      <OptionWrapper isVisible={isOptionVisible} ref={optionRef}>
        {displayItems.map(item => (
          <Option
            isSelected={item.selected}
            key={item.name}
            onClick={() => updateSelectedOption(item.name, true)}
          >
            {item.name}
          </Option>
        ))}
      </OptionWrapper>
    </>
  );
};

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MultiSelect;
