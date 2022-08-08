/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Nep Lofi</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon/maskable.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nep Lofi HomePage" />
        <meta name="author" content="Swikar Adhikari" />
        <meta name="author" content="swikarr_" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <meta property="og:site_name" content="Swikar Adhikari" />
        <meta name="og:title" content="Swikar Adhikari" />
        <meta property="og:type" content="website" />
      </Head>

      <body className="bg-my-bg w-full h-screen bg-no-repeat bg-center bg-cover bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
