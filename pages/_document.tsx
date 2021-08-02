import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const materialUiSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => materialUiSheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
        </>
      )
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Merienda:400,700&display=swap"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#353535" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
