import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// from nextjs docs
class MyDocument extends Document<any> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
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
          <meta
            content="width=device-width, height=device-height, initial-scale=1"
            name="viewport"
          />
          <meta charSet="utf-8" />
          <link href="/favicon.png" rel="shortcut icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Baloo+2:400|Biryani:400,700|Montserrat:500,700&display=swap"
            rel="stylesheet"
          />
          <script
            crossOrigin="anonymous"
            src="https://kit.fontawesome.com/802a2035bb.js"
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
