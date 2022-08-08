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
