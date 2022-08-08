import type { NextPage } from "next";
import Image from "next/image";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useState } from "react";

const Home: NextPage = ({
  playing,
  setPlaying,
  currentVideo,
  results,
  setCurrentVideo,
  loading,
}: any) => {
  const nextHandler = () => {
    const index = results.indexOf(currentVideo);
    const nextVideo = results[index + 1];
    if (nextVideo) {
      setPlaying(false);
      setCurrentVideo(nextVideo);
      setPlaying(true);
    }
  };

  const previousHandler = () => {
    const index = results.indexOf(currentVideo);
    const previousVideo = results[index - 1];
    if (previousVideo) {
      setPlaying(false);
      setCurrentVideo(previousVideo);
      setPlaying(true);
    }
  };
  // console.log(results.length);
  return (
    <div className="container mx-auto max-w-xs">
      <div className="flex items-center flex-col">
        <div>
          <div className="border rounded-full flex h-40 w-40">
            {playing ? (
              <Image
                src={currentVideo?.snippet.thumbnails.medium.url}
                alt={currentVideo?.snippet.title}
                width={200}
                height={200}
                className="animate-spin-slow rounded-full object-cover"
              />
            ) : (
              <Image
                src={currentVideo?.snippet.thumbnails.medium.url}
                alt={currentVideo?.snippet.title}
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="mt-4 text-justify">
          <h2 className="text-md font-medium  text-white">
            {currentVideo?.snippet.title}
          </h2>

          <div className="mt-4 flex items-center justify-center">
            <BiSkipPrevious
              onClick={previousHandler}
              className="h-10 w-10 text-[#674AB3] cursor-pointer"
            />
            {playing ? (
              <AiFillPauseCircle
                className="h-10 w-10 text-[#674AB3] cursor-pointer"
                onClick={() => {
                  setPlaying(!playing);
                }}
              />
            ) : (
              <AiFillPlayCircle
                className="h-10 w-10 text-[#674AB3] cursor-pointer "
                onClick={() => {
                  setPlaying(!playing);
                }}
              />
            )}
            <BiSkipNext
              onClick={nextHandler}
              className="h-10 w-10 text-[#674AB3] cursor-pointer"
            />
          </div>

          {loading ? (
            <div className="mt-4 text-center">
              <p className="text-white">Loading....</p>
            </div>
          ) : (
            <div>
              <p className="text-white">Now Playing</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
