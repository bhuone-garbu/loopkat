import React from 'react';
import { NextPage } from 'next';

import Metadata from '../components/Metadata';

const HomePage: NextPage = () => (
  <>
    <Metadata title="Home" />
    <h2>Hello</h2>
  </>
);

export default HomePage;
