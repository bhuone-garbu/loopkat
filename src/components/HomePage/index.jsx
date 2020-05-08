import React from 'react';
import PropTypes from 'prop-types';

import { FlexLayout, Meta } from '../reusable';

import { Main, ParagraphWrapper, SpanStyled } from './style';

const HomePage = ({ description, title }) => {
  return (
    <FlexLayout stretchHeight stretchWidth>
      <Meta description={description} title={title} />
      <Main>
        <h1>
          Welcome to <SpanStyled>Loopkat</SpanStyled>
        </h1>
        <ParagraphWrapper>
          <p>How can we help you?</p>
          <img alt="earth" src="/images/earth.svg" />
          <img alt="earth" src="/images/trip-plan.svg" />
        </ParagraphWrapper>
      </Main>
    </FlexLayout>
  );
};

HomePage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

HomePage.defaultProps = {
  description: null,
};

export default HomePage;
