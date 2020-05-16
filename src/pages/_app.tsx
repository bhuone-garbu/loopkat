import { AppProps } from 'next/app';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import theme from '../styles/theme';
import withApollo from '../utils/withApollo';

interface Props extends AppProps {
  apollo: ApolloClient<any>;
}

const MyApp = ({ apollo, Component, pageProps }: Props) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  </ThemeProvider>
);

export default withApollo(MyApp);
