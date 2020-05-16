import React from 'react';

import {
  Button,
  FlexLayout,
  Input,
  MultiBlockSelect,
  Select,
} from '../reusable';

import {
  FormStyled,
  GridWrapper,
  QuestionWrapper,
  QuestionTitle,
  QuestionInputWrapper,
  ResponsiveAnchor,
} from './stylet';

const ShareJourney = () => {
  return (
    <FlexLayout stretchWidth>
      <FormStyled>
        <h1>Let&apos;s start</h1>
        <p>Your preferences will help make recommendations even better!</p>

        <QuestionWrapper>
          <GridWrapper>
            <div>
              <QuestionTitle>Where are you going?</QuestionTitle>
              <QuestionInputWrapper>
                <Input name="tripPlace" placeholder="Country/city name" />
              </QuestionInputWrapper>
            </div>

            <div>
              <QuestionTitle>How long are you traveling?</QuestionTitle>
              <QuestionInputWrapper>
                <Input
                  maxLength={2}
                  name="tripLength"
                  placeholder="10"
                  type="number"
                />
                <Select
                  name="tripUnit"
                  options={[
                    { label: 'Day(s)', value: 'days' },
                    { label: 'Week(s)', value: 'weeks' },
                    { label: 'Month(s)', value: 'months' },
                  ]}
                />
              </QuestionInputWrapper>
            </div>
          </GridWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>What are you most interested in?</QuestionTitle>
          <p>Select multiple options</p>
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
      </FormStyled>

      <ResponsiveAnchor href="/discover/places">
        <Button stretch value="Next" />
      </ResponsiveAnchor>
    </FlexLayout>
  );
};

export default ShareJourney;
