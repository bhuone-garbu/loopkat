import React from 'react';

import { FlexLayout } from '../reusable';

import {
  CardWrapper,
  GridItem,
  GridWrapper,
  ImageStyled,
  Main,
  SectionWrapper,
  SpanStyled,
} from './style';

const StartPage = () => {
  return (
    <FlexLayout justifyContent="center" stretchHeight stretchWidth>
      <Main>
        <h1>
          Welcome to <SpanStyled>Loopkat</SpanStyled>
        </h1>
        <p>
          <SpanStyled>Loopkat</SpanStyled> provides personalised and curated
          travel inspiration in one place.
        </p>
        <p>No more wading through reviews, blogposts or travel forums.</p>

        <SectionWrapper>
          <h2>How can we help you?</h2>
          <GridWrapper>
            <GridItem>
              <p>Wondering where to go?</p>
              <a href="/discover/preferences">
                <CardWrapper>
                  <h3>Discover &rarr;</h3>
                  <ImageStyled alt="earth" src="/images/earth.svg" />
                </CardWrapper>
              </a>
            </GridItem>
            <GridItem>
              <p>Have a place in mind?</p>
              <a href="/discover/preferences">
                <CardWrapper>
                  <h3>Plan &rarr;</h3>
                  <ImageStyled alt="earth" src="/images/trip-plan-2.svg" />
                </CardWrapper>
              </a>
            </GridItem>
          </GridWrapper>
        </SectionWrapper>
      </Main>
    </FlexLayout>
  );
};

export default StartPage;
