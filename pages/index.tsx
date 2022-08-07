import type { NextPage } from "next";
import Image from "next/image";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

const Home: NextPage = ({ playing, setPlaying, currentVideo }: any) => {
  return (
    <div className="p-5 mt-44 mx-auto max-w-xs mb-10 lg:max-w-2xl items-center justify-center rounded-xl flex ring ">
      <div className="flex items-center flex-col">
        <div className="flex flex-col items-center gap-1">
          <div className="border rounded-full flex h-40 w-40">
            {playing ? (
              <Image
                src={currentVideo?.snippet.thumbnails.maxres.url}
                alt={currentVideo?.snippet.title}
                width={200}
                height={200}
                className="object-cover animate-spin-slow rounded-full"
              />
            ) : (
              <Image
                src={currentVideo?.snippet.thumbnails.maxres.url}
                alt={currentVideo?.snippet.title}
                width={200}
                height={200}
                className="object-cover rounded-full"
              />
            )}
          </div>
        </div>

        <div className="mt-4 text-justify">
          <h2 className="text-md font-medium  text-white">
            {currentVideo?.snippet.title}
          </h2>

          <div className="mt-4 flex items-center justify-center">
            <BiSkipPrevious className="h-10 w-10 text-[#674AB3]" />
            {playing ? (
              <AiFillPauseCircle
                className="h-10 w-10 text-[#674AB3] "
                onClick={() => setPlaying(!playing)}
              />
            ) : (
              <AiFillPlayCircle
                className="h-10 w-10 text-[#674AB3] "
                onClick={() => setPlaying(!playing)}
              />
            )}
            <BiSkipNext className="h-10 w-10 text-[#674AB3]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
