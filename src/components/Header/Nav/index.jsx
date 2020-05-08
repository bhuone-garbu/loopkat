import React from 'react';
import Link from 'next/link';

import { ListItem, ListWrapper } from './style';

const Nav = () => (
  <nav>
    <ListWrapper>
      <Link href="/share-your-journey">
        <a>
          <ListItem>Share</ListItem>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <ListItem>Login</ListItem>
        </a>
      </Link>
    </ListWrapper>
  </nav>
);

export default Nav;
