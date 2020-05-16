import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

import theme from '../styles/theme';
import { typographyRegular, typographyHeading } from '../styles/mixins';
import { MainLayout, Header } from '../components/reusable';

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
      color: ${p.theme.colors.blue};
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
    }

    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  `,
);

// interface Props extends AppProps {
//   apollo: ApolloClient<any>;
// }

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MainLayout>
      <Header />
      <Component {...pageProps} />
    </MainLayout>
  </ThemeProvider>
);

export default MyApp;

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
