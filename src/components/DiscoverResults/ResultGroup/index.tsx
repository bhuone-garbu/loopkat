import React from 'react';

import { GridWrapper, LeftPushed, Result, RightPushed, Wrapper } from './style';

interface Props {
  groupName: string;
  items: Array<object>;
}

const ResultGroup = ({ groupName, items }: Props) => {
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

export default ResultGroup;
