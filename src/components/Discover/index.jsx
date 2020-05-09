import React from 'react';

import {
  FlexLayout,
  Input,
  MultiBlockSelect,
  MultiSelect,
  Select,
  SliderInput,
  RadioSelect,
  LongTextArea,
} from '../reusable';

import {
  FormStyled,
  FormTitle,
  HelpSubtitle,
  QuestionWrapper,
  QuestionTitle,
  QuestionInputWrapper,
} from './style';

const ShareJourney = () => {
  return (
    <FlexLayout stretchWidth>
      <FormStyled>
        <FormTitle>Share a Journey</FormTitle>
        <HelpSubtitle>
          Your input is invaluable to us and helps make travel even better!
        </HelpSubtitle>

        <QuestionWrapper>
          <QuestionTitle>Where are you going?</QuestionTitle>
          <QuestionInputWrapper>
            <Input name="tripPlace" placeholder="Country/city name" stretch />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>How long are you traveling?</QuestionTitle>
          <QuestionInputWrapper>
            <Input maxLength={2} name="tripPlace" placeholder="10" type="number" />
            <Select
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

        <QuestionWrapper>
          <QuestionTitle>When did you travel and for how long?</QuestionTitle>
          <QuestionInputWrapper>
            <Select
              options={[
                { label: 'January', value: 'january' },
                { label: 'Febraury', value: 'febraury' },
                { label: 'March', value: 'march' },
                { label: 'April', value: 'april' },
                { label: 'May', value: 'may' },
                { label: 'June', value: 'june' },
                { label: 'July', value: 'july' },
                { label: 'August', value: 'august' },
                { label: 'September', value: 'september' },
                { label: 'October', value: 'october' },
                { label: 'November', value: 'november' },
                { label: 'December', value: 'december' },
              ]}
              stretch
            />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>How much did you enjoy your trip overall?</QuestionTitle>
          <QuestionInputWrapper>
            <SliderInput name="tripOverallRating" />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>And, how would you rate the place for the following?</QuestionTitle>
          <HelpSubtitle>
            This could be restaurants, museums, parks, famous attractions, etc.
          </HelpSubtitle>
          <QuestionInputWrapper>
            <SliderInput label="Safety" name="tripSafetyRating" />
          </QuestionInputWrapper>
          <QuestionInputWrapper>
            <SliderInput label="Food" name="tripFoodRating" />
          </QuestionInputWrapper>
          <QuestionInputWrapper>
            <SliderInput label="Commute" name="tripFoodRating" />
          </QuestionInputWrapper>
          <QuestionInputWrapper>
            <SliderInput label="Food" name="tripFoodRating" />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>How touristy did you find the place?</QuestionTitle>
          <QuestionInputWrapper>
            <RadioSelect
              name="tripTouristy"
              options={[
                { label: 'Very Touristy', value: 'veryTouristy' },
                { label: 'Touristy', value: 'touristy' },
                { label: 'Good Balance', value: 'goodBalance' },
                { label: 'Hidden Gem', value: 'hiddenGem' },
              ]}
            />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>What were the most memorable places you visited?</QuestionTitle>
          <HelpSubtitle>
            This could be restaurants, museums, parks, famous attractions, etc.
          </HelpSubtitle>
          <QuestionInputWrapper>
            <MultiSelect
              options={[
                { name: 'museum' },
                { name: 'restaurant' },
                { name: 'cafe' },
                { name: 'central-station' },
                { name: 'library' },
                { name: 'garden' },
              ]}
            />
          </QuestionInputWrapper>
        </QuestionWrapper>

        <QuestionWrapper>
          <QuestionTitle>Finally,</QuestionTitle>
          <QuestionInputWrapper>
            <LongTextArea
              name="tripSumary"
              placeholder="Are there any tips, suggestions or advice you would like to share with other travellers?"
              rows={10}
            />
          </QuestionInputWrapper>
        </QuestionWrapper>
      </FormStyled>
    </FlexLayout>
  );
};

export default ShareJourney;
