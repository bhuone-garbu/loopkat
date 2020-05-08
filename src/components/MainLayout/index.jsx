import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

const MainLayout = ({ children }) => <Container>{children}</Container>;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
