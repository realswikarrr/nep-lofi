import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nep Lofi</title>
        <meta name="description" content="Nep Lofi HomePage" />
        <meta name="author" content="Swikar Adhikari" />
        <meta name="author" content="swikarr_" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Swikar Adhikari" />
        <meta name="og:title" content="Swikar Adhikari" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="grid place-items-center h-screen">{children}</div>
    </>
  );
};

export default Main;
