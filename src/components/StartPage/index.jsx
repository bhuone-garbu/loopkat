import React from 'react';
import PropTypes from 'prop-types';

import { FlexLayout, Meta } from '../reusable';

import {
  CardWrapper,
  Column,
  ColumnWrapper,
  ImageStyled,
  Main,
  SectionWrapper,
  SpanStyled,
} from './style';

const StartPage = ({ description, title }) => {
  return (
    <FlexLayout justifyContent="center" stretchHeight stretchWidth>
      <Meta description={description} title={title} />
      <Main>
        <h1>
          Welcome to <SpanStyled>Loopkat</SpanStyled>
        </h1>
        <p>
          <SpanStyled>Loopkat</SpanStyled> provides personalised and curated travel inspiration in
          one place.
        </p>
        <p>No more wading through reviews, blogposts or travel forums.</p>

        <SectionWrapper>
          <h2>How can we help you?</h2>
          <ColumnWrapper>
            <Column>
              <p>Wondering where to go?</p>
              <a href="/start/discover">
                <CardWrapper>
                  <h3>Discover &rarr;</h3>
                  <ImageStyled alt="earth" src="/images/earth.svg" />
                </CardWrapper>
              </a>
            </Column>
            <Column>
              <p>Have a place in mind?</p>
              <a href="/start/discover">
                <CardWrapper>
                  <h3>Plan &rarr;</h3>
                  <ImageStyled alt="earth" src="/images/trip-plan-2.svg" />
                </CardWrapper>
              </a>
            </Column>
          </ColumnWrapper>
        </SectionWrapper>
      </Main>
    </FlexLayout>
  );
};

StartPage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

StartPage.defaultProps = {
  description: null,
};

export default StartPage;
