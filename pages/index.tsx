import type { NextPage } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Player from "../components/player";

const Home: NextPage = ({ id, playing, setPlaying }: any) => {
  return (
    <div>
      <button className="text-white" onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}{" "}
      </button>

      <Link className="text-white" href="/track">
        Tracks
      </Link>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });

// export async function getStaticProps() {
//   return {
//     props: {
//       results: results.items,
//     },
//     revalidate: 10,
//   };
// }
