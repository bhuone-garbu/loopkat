import React from 'react';
import PropTypes from 'prop-types';

import { FlexLayout, Meta } from '../reusable';

import { CardWrapper, ImageStyled, Main, ParagraphWrapper, SpanStyled } from './style';

const StartPage = ({ description, title }) => {
  return (
    <FlexLayout justifyContent="center" stretchHeight stretchWidth>
      <Meta description={description} title={title} />
      <Main>
        <h1>
          Welcome to <SpanStyled>Loopkat</SpanStyled>
        </h1>
        <ParagraphWrapper>
          <p>How can we help you?</p>
        </ParagraphWrapper>
        <CardWrapper>
          <h2>Discover</h2>
          <ImageStyled alt="earth" src="/images/earth.svg" />
        </CardWrapper>
        <CardWrapper>
          <h2>Plan</h2>
          <ImageStyled alt="earth" src="/images/trip-plan.svg" />
        </CardWrapper>
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
