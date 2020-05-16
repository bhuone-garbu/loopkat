import React from 'react';

import { Content, Wrapper } from './style';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default Layout;
