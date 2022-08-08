import Head from "next/head";
import React, { ReactNode } from "react";
import Player from "../player";
import dynamic from "next/dynamic";
import NavBar from "../navbar";

type Props = {
  children: ReactNode;
  id: string;
  playing: boolean;
};

const Main = ({ children, id, playing }: Props) => {
  return (
    <>
      <Head>
        <title>Nep Lofi</title>
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

      <Player id={id} playing={playing} />

      <div className="grid place-items-center h-screen">
        <div className="mainbg h-[90%] w-[90%] overflow-hidden rounded-xl shadow-2xl bg-cover bg-center border-2 border-[#674AB3] shadow-5xl">
          <NavBar />
          <div className="flex items-center justify-center flex-col h-[85%]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Main), { ssr: false });
