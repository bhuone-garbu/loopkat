import React from 'react';
import PropTypes from 'prop-types';

import { FlexLayout, ProgressBar } from '../reusable';

import {
  DescriptionWrapper,
  ImageStyled,
  ParagraphStyled,
  PictureCardWrapper,
  Square,
  Title,
  Wrapper,
} from './style';

const PlaceTinder = ({ activities, destination, totalDays }) => {
  const first = activities[0];
  const filledDays = 2;
  return (
    <FlexLayout justifyContent="center" stretchHeight stretchWidth>
      <Wrapper>
        <h1>Your trip to {destination}</h1>
        <ProgressBar maxWidth="40rem" percentage={50} />
        <ParagraphStyled>
          {filledDays}/{totalDays} days filled
        </ParagraphStyled>

        <Title>{first.title}</Title>
        <Square>
          <PictureCardWrapper>
            <ImageStyled src={first.image} />
          </PictureCardWrapper>
        </Square>

        <DescriptionWrapper>{first.description}</DescriptionWrapper>
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
