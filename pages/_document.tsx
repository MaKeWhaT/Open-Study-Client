import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="assets/fonts/NotoSansKR-Light-Hestia.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="assets/fonts/NotoSansKR-Regular-Hestia.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="assets/fonts/NotoSansKR-Medium-Hestia.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="assets/fonts/NotoSansKR-Bold-Hestia.woff"
            as="font"
            type="font/woff"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
