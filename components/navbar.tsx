import Link from "next/link";
import { useState } from "react";
import {
  BsFillChatSquareTextFill,
  BsMusicNoteList,
  BsFillMusicPlayerFill,
} from "react-icons/bs";
import { BiGame } from "react-icons/bi";

const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className=" sm:px-4 py-2.5 rounded bg-white-900 backdrop-blur-sm lg:bg-none md:backdrop-blur-0 lg:backdrop-blur-none">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center ">
          <span className="flex gap-2 items-center self-center text-xl font-semibold whitespace-nowrap text-white ml-2 lg:ml-0 cursor-pointer">
            <BsFillMusicPlayerFill />
            NepLofi
          </span>
        </Link>
        <button
          onClick={() => setActive(!active)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="mr-2 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full text-white md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <Link href="/chat" aria-current="page">
                <span className="text-lg cursor-pointer flex items-center gap-2">
                  <BsFillChatSquareTextFill /> Chat
                </span>
              </Link>
            </li>
            <li>
              <Link href="/game">
                <span className="text-lg cursor-pointer flex items-center gap-2">
                  <BiGame />
                  Games
                </span>
              </Link>
            </li>
            <li>
              <Link href="/track">
                <span className="text-lg cursor-pointer flex items-center gap-2">
                  <BsMusicNoteList />
                  Tracks
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {active ? (
          <div className="w-full text-white" id="navbar-default">
            <ul className="flex justify-evenly flex-row p-2  bg-white-900 backdrop-blur-sm ">
              <li>
                <Link href="/chat" aria-current="page">
                  <span className="cursor-pointer flex items-center gap-2 hover:text-indigo-700">
                    <BsFillChatSquareTextFill /> Chat
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/game">
                  <span className="cursor-pointer flex items-center gap-2 hover:text-indigo-700">
                    <BiGame />
                    Games
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/track">
                  <span className=" cursor-pointer flex items-center gap-2 hover:text-indigo-700">
                    <BsMusicNoteList />
                    Tracks
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
