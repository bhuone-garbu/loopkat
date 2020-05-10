import React from 'react';

import { FlexLayout, Input, MultiBlockSelect, Select } from '../reusable';

import {
  ButtonContainer,
  ButtonStyled,
  FormStyled,
  FormTitle,
  QuestionWrapper,
  QuestionTitle,
  QuestionInputWrapper,
  ResponsiveAnchor,
} from './style';

const ShareJourney = () => {
  return (
    <FlexLayout stretchWidth>
      <FormStyled>
        <FormTitle>Let&apos;s start</FormTitle>
        <p>Your preferences will help make recommendations even better!</p>

        <QuestionWrapper>
          <QuestionTitle>Where are you going?</QuestionTitle>
          <QuestionInputWrapper>
            <Input name="tripPlace" placeholder="Country/city name" stretch />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>How long are you traveling?</QuestionTitle>
          <QuestionInputWrapper>
            <Input maxLength={2} name="tripLength" placeholder="10" type="number" />
            <Select
              name="tripUnit"
              options={[
                { label: 'Day(s)', value: 'days' },
                { label: 'Week(s)', value: 'weeks' },
                { label: 'Month(s)', value: 'months' },
              ]}
            />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>What are you most interested in?</QuestionTitle>
          <QuestionInputWrapper>
            <MultiBlockSelect
              options={[
                { label: 'Attractions', value: 'attractions' },
                { label: 'Nature', value: 'nature' },
                { label: 'Shopping', value: 'shopping' },
                { label: 'Local Scene', value: 'localscene' },
                { label: 'Nightlife', value: 'nightlife' },
                { label: 'Adventure', value: 'adventure' },
                { label: 'Food', value: 'food' },
              ]}
            />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <ButtonContainer>
          <ResponsiveAnchor href="/start/places">
            <ButtonStyled>Next</ButtonStyled>
          </ResponsiveAnchor>
        </ButtonContainer>
      </FormStyled>
    </FlexLayout>
  );
};

export default ShareJourney;
