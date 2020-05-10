import React from 'react';
import PropTypes from 'prop-types';

import { Button, FlexLayout, ProgressBar } from '../reusable';

import ResultGroup from './ResultGroup';

import { SQUARE_MAX_WIDTH, Wrapper, SpanStyled, ParagraphStyled } from './style';

const DiscoverResult = ({ destination, totalDays }) => {
  return (
    <FlexLayout stretchHeight stretchWidth>
      <Wrapper>
        <h1>
          Your trip to <SpanStyled>{destination}</SpanStyled>
        </h1>
        <ProgressBar maxWidth={SQUARE_MAX_WIDTH} percentage={100} />
        <ParagraphStyled>
          {totalDays}/{totalDays} days filled
        </ParagraphStyled>

        <ResultGroup groupName="Eat and Drink" items={[{ image: 'blah' }]} />
        <ResultGroup groupName="Spots to see" items={[{ image: 'blah' }]} />
        <ResultGroup groupName="Activities to do" items={[{ image: 'blah' }]} />

        <Button value="Finalize and Save" />
      </Wrapper>
    </FlexLayout>
  );
};

DiscoverResult.propTypes = {
  destination: PropTypes.string.isRequired,
  totalDays: PropTypes.number.isRequired,
};

export default DiscoverResult;
