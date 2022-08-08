import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nep Lofi HomePage" />
        <meta name="author" content="Swikar Adhikari" />
        <meta name="author" content="swikarr_" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:site_name" content="Swikar Adhikari" />
        <meta name="og:title" content="Swikar Adhikari" />
        <meta property="og:type" content="website" />
      </Head>

      <body className="bg-my-bg w-full h-screen bg-no-repeat bg-center bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
