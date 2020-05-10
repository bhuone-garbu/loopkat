import React from 'react';
import PropTypes from 'prop-types';

import { Button, FlexLayout, ProgressBar } from '../reusable';

import colors from '../../styles/theme/colors';

import {
  Action,
  ActionWrapper,
  BackAction,
  DescriptionWrapper,
  ImageStyled,
  ImageWrapper,
  InfoWrapper,
  LocationContentWrapper,
  ParagraphStyled,
  ResponsiveAnchor,
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
    <FlexLayout stretchHeight stretchWidth>
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
          <Action bgColor={colors.redLight}>
            <i className="fas fa-thumbs-down fa-3x" />
          </Action>
          <BackAction bgColor={colors.greyLighter}>
            <i className="fas fa-step-backward fa-2x" />
          </BackAction>
          <Action bgColor={colors.green}>
            <i className="fas fa-thumbs-up fa-3x" />
          </Action>
        </ActionWrapper>

        <ResponsiveAnchor href="/discover/results">
          <Button value="Done" />
        </ResponsiveAnchor>
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
