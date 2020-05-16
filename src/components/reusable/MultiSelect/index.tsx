import React, { MouseEvent, useState, useEffect, useRef } from 'react';

import {
  LabelCross,
  LabelStyled,
  LabelWrapper,
  Option,
  OptionWrapper,
  Wrapper,
} from './style';

interface Option {
  label: string;
  value: string;
  selected?: boolean;
}

interface Props {
  options: Array<Option>;
}

type CEvent = ChangeEvent<HTMLInputElement>;

// TODO: code needs optimization
const MultiSelect = ({ options }: Props) => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [displayItems, setDisplayItems] = useState(options);
  const [selectedItems, setSelectedItems] = useState(
    options.filter(option => option.selected).map(option => option.label),
  );

  const optionRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLInputElement>(null);

  const invertOptionVisibility = ({ target }: Event) => {
    if (selectRef.current && selectRef.current.isSameNode(target)) {
      setIsOptionVisible(!isOptionVisible);
    }
  };

  const handleClickOutside = ({ target }: any) => {
    if (!target || target.innerText === 'x') return;
    if (
      (selectRef.current && selectRef.current.contains(target)) ||
      (optionRef.current && optionRef.current.contains(target))
    ) {
      setIsOptionVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const updateSelectedOption = (targetName: string, isSelected: boolean) => {
    setDisplayItems(
      displayItems.map(item =>
        item.label === targetName ? { ...item, selected: isSelected } : item,
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
      <Wrapper onClick={invertOptionVisibility} ref={selectRef}>
        {selectedItems.map(name => (
          <LabelWrapper key={name}>
            <LabelStyled>{name}</LabelStyled>
            <LabelCross onClick={() => updateSelectedOption(name, false)}>
              x
            </LabelCross>
          </LabelWrapper>
        ))}
      </Wrapper>
      <OptionWrapper isVisible={isOptionVisible} ref={optionRef}>
        {displayItems.map(item => (
          <Option
            isSelected={item.selected}
            key={item.label}
            onClick={() => updateSelectedOption(item.label, true)}
          >
            {item.label}
          </Option>
        ))}
      </OptionWrapper>
    </>
  );
};

export default MultiSelect;
