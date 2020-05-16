import React from 'react';
import { NextPage } from 'next';

import Metadata from '../components/reusable/Metadata';
import Start from '../components/Start';

const HomePage: NextPage = () => (
  <>
    <Metadata description="Your journey recommender" title="Home | Loopkat" />
    <Start />
  </>
);

export default HomePage;
