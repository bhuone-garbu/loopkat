import React from 'react';
import PropTypes from 'prop-types';

import { Button, FlexLayout, ProgressBar } from '../reusable';

import {
  ActionWrapper,
  DescriptionWrapper,
  ImageStyled,
  ImageWrapper,
  InfoWrapper,
  LocationContentWrapper,
  ParagraphStyled,
  SpanStyled,
  SquareCard,
  SquareMaker,
  SQUARE_MAX_WIDTH,
  Title,
  Wrapper,
} from './style';

const PlaceTinder = ({ activities, destination, totalDays }) => {
  const first = activities[0];
  const filledDays = 2;
  return (
    <FlexLayout justifyContent="center" stretchHeight stretchWidth>
      <Wrapper>
        <h1>
          Your trip to <SpanStyled>{destination}</SpanStyled>
        </h1>
        <ProgressBar maxWidth={SQUARE_MAX_WIDTH} percentage={50} />
        <ParagraphStyled>
          {filledDays}/{totalDays} days filled
        </ParagraphStyled>

        <SquareCard>
          <SquareMaker>
            <LocationContentWrapper>
              <ImageWrapper>
                <ImageStyled src={first.image} />
              </ImageWrapper>
              <InfoWrapper>
                <Title>{first.title}</Title>
                <DescriptionWrapper>
                  <p>{first.description}</p>
                </DescriptionWrapper>
              </InfoWrapper>
            </LocationContentWrapper>
          </SquareMaker>
        </SquareCard>

        <ActionWrapper>
          <p>Dislike</p>
          <p>Back</p>
          <p>Like</p>
        </ActionWrapper>

        <Button value="Done" />
      </Wrapper>
    </FlexLayout>
  );
};

PlaceTinder.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
  destination: PropTypes.string.isRequired,
  totalDays: PropTypes.number.isRequired,
};

export default PlaceTinder;
