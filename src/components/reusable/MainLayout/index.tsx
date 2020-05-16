import React, { ReactNode } from 'react';

import { Container } from './style';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => <Container>{children}</Container>;

export default MainLayout;
