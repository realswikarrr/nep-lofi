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

      <Player id={id} playing={playing} />

      <div className="grid place-items-center h-screen ">
        <div className="mainbg h-[90%] w-[90%] overflow-auto rounded-xl  shadow-2xl bg-cover bg-center border-2 border-[#674AB3] shadow-5xl">
          <div className="container mx-auto ">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Main), { ssr: false });
