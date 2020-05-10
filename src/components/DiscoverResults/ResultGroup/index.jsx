import React from 'react';
import PropTypes from 'prop-types';

import { GridWrapper, LeftPushed, Result, RightPushed, Wrapper } from './style';

const ResultGroup = ({ groupName, items }) => {
  return (
    <Wrapper>
      <h2>
        {groupName} {!!items.length && `(${items.length})`}
      </h2>
      <GridWrapper>
        <LeftPushed>
          <i className="fas fa-chevron-circle-left fa-3x" />
        </LeftPushed>
        <Result>hello</Result>
        <RightPushed>
          <i className="fas fa-chevron-circle-right fa-3x" />
        </RightPushed>
      </GridWrapper>
    </Wrapper>
  );
};

ResultGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultGroup;
