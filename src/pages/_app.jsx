import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../styles/theme';
import { typographyRegular, typographyHeading } from '../styles/mixins';

import { Header, MainLayout } from '../components/reusable';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
  }

  body {
    ${typographyRegular}
    color: ${p => p.theme.colors.blue};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.5;
    /* background: ${p => p.theme.colors.yellow}; */
    /* background-image: ${p =>
      `radial-gradient(${p.theme.colors.white}, ${p.theme.colors.yellow})`}; */
  }

  a, ul, li {
    color: ${p => p.theme.colors.primary};
    text-decoration: none;
  }

  h1, h2, h3 {
    ${typographyHeading};
    margin-top: 1.5rem;
    font-weight: normal;
    line-height: 1.15;
  }

  p {
    margin-top: 1.5rem;
    color: ${p => p.theme.colors.grey};
    font-size: 1.8rem;
  }


  h1 {
    font-size: 2.6rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MainLayout>
      <Header />
      <Component {...pageProps} />
    </MainLayout>
  </ThemeProvider>
);

/**
 * From Nextjs docs
 * Note that getStaticProps runs only on the server-side. It will never be run on the client-side.
 * It won’t even be included in the JS bundle for the browser.
 *
 * That means you can write code such as direct database queries without them being sent to browsers.
 * You should not fetch an API route from getStaticProps — instead, you can write the server-side code directly in getStaticProps.
 */
MyApp.getStaticProps = async ctx => {
  const appProps = await MyApp.getStaticProps(ctx);
  return { ...appProps };
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape(),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
