import Link from "next/link";
import {
  BsFillChatSquareTextFill,
  BsMusicNoteList,
  BsFillMusicPlayerFill,
} from "react-icons/bs";
import { BiTimer } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className="py-2.5 pb-0 mb-0 rounded bg-white-900 backdrop-blur-sm lg:bg-none md:backdrop-blur-0 lg:backdrop-blur-none">
      <div className="container flex flex-wrap lg:justify-between md:justify-between items-center mx-auto justify-center">
        <Link href="/" className="flex items-center ">
          <span className="flex gap-2 items-center self-center text-xl font-semibold whitespace-nowrap text-white ml-2  cursor-pointer">
            <BsFillMusicPlayerFill />
            NepLofi
          </span>
        </Link>

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
              <Link href="/timer">
                <span className="text-lg cursor-pointer flex items-center gap-2">
                  <BiTimer className="text-2xl" />
                  Timer
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

        {/* Mobile Menu */}
        <div
          className="w-full lg:hidden md:hidden text-white"
          id="navbar-default"
        >
          <ul className="flex justify-evenly flex-row mt-2 bg-white-900 backdrop-blur-sm ">
            <li>
              <Link href="/chat" aria-current="page">
                <span className="cursor-pointer flex items-center gap-2 hover:text-indigo-700">
                  <BsFillChatSquareTextFill /> Chat
                </span>
              </Link>
            </li>
            <li>
              <Link href="/timer">
                <span className="cursor-pointer flex items-center gap-2 hover:text-indigo-700">
                  <BiTimer className="text-2xl" /> Timer
                </span>
              </Link>
            </li>
            <li>
              <Link href="/track">
                <span className=" cursor-pointer flex items-center gap-2 hover:text-indigo-700">
                  <BsMusicNoteList /> Tracks
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
