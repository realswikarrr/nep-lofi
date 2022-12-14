import Head from "next/head";
import React, { ReactNode } from "react";
import Player from "../player";
import dynamic from "next/dynamic";
import NavBar from "../navbar";

type Props = {
  children: ReactNode;
  id: string;
  playing: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const Main = ({ children, id, playing, loading, setLoading }: Props) => {
  return (
    <>
      <Player
        id={id}
        playing={playing}
        loading={loading}
        setLoading={setLoading}
      />

      <div className="grid place-items-center h-screen">
        <div className="mainbg h-[90%] w-[90%] overflow-hidden rounded-xl shadow-2xl bg-cover bg-center border-2 border-[#674AB3] shadow-5xl">
          <NavBar />

          {children}
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Main), { ssr: false });
