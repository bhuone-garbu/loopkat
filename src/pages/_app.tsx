import React from 'react';
import { AppProps } from 'next/app';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

import theme from '../styles/theme';
import { typographyRegular, typographyHeading } from '../styles/mixins';
import withApollo from '../utils/withApollo';
import { MainLayout } from '../components';

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>(
  p => css`
    html {
      font-size: 62.5%;
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      border: none;
    }

    body {
      ${typographyRegular}
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.5;
      background: ${p.theme.colors.white};
    }

    a,
    ul,
    li {
      color: currentColor;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4 {
      ${typographyHeading};
      margin-top: 1rem;
      color: ${p.theme.colors.secondary};
    }

    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  `,
);

interface Props extends AppProps {
  apollo: ApolloClient<any>;
}

const MyApp = ({ apollo, Component, pageProps }: Props) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apollo}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  </ThemeProvider>
);

export default withApollo(MyApp);

/**
 * From Nextjs docs
 * Note that getStaticProps runs only on the server-side. It will never be run on the client-side.
 * It won’t even be included in the JS bundle for the browser.
 *
 * That means you can write code such as direct database queries without them being sent to browsers.
 * You should not fetch an API route from getStaticProps — instead, you can write the server-side code directly in getStaticProps.
 */
// MyApp.getStaticProps = async ctx => {
//   const appProps = await MyApp.getStaticProps(ctx);
//   return { ...appProps };
// };
