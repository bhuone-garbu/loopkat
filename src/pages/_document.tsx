import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

import { APP_NAME } from '../config/app';

class MyDocument extends Document<any> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => {
            return sheet.collectStyles(<App {...props} />);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          {/* Browser */}
          <meta charSet="utf-8" />
          <meta content={APP_NAME} name="application-name" />
          <meta content={APP_NAME} name="apple-mobile-web-app-title" />

          {/* Viewport */}
          <meta
            content="width=device-width, height=device-height, initial-scale=1"
            name="viewport"
          />

          {/* App */}
          <meta content="#0AD2A0" name="theme-color" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="black" name="apple-mobile-web-app-status-bar-style" />

          {/* Meta Icons */}
          <link href="/images/32.png" rel="icon" sizes="32x32" />
          <link href="/images/128.png" rel="icon" sizes="128x128" />
          <link href="/images/192.png" rel="icon" sizes="192x192" />

          {/* PWA */}
          <link href="/manifest.json" rel="manifest" />

          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
