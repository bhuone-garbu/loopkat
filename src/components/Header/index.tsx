import React from 'react';
import Link from 'next/link';

import FlexLayout from '../FlexLayout';

import { Body, HeaderContainer, HeadingText } from './style';

const Header = () => (
  <HeaderContainer>
    <FlexLayout stretchWidth>
      <Body>
        <Link href="/" replace>
          <a>
            <HeadingText>Journey</HeadingText>
          </a>
        </Link>
      </Body>
    </FlexLayout>
  </HeaderContainer>
);

export default Header;
