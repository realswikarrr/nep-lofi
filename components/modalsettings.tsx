import { FiX } from "react-icons/fi";
import Layout from "./layout/article";

const ModalSettings = ({
  timerRef,
  shortBreakRef,
  longBreakRef,
  openSettings,
  setOpenSettings,
  updateTimeDefaultValue,
}: any) => {
  const inputs = [
    {
      value: "Timer",
      ref: timerRef,
      defaultValue: 40,
    },
    {
      value: "Short Break",
      ref: shortBreakRef,
      defaultValue: 10,
    },
    {
      value: "Long Break",
      ref: longBreakRef,
      defaultValue: 30,
    },
  ];

  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
          openSettings ? "" : "hidden"
        }`}
        onClick={() => setOpenSettings(false)}
      ></div>

      <div
        className={`max-w-xl bg-gradient-to-l from-[#000] to-[#11111198] backdrop-blur-md border border-[#674AB3] -ml-0.5 absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md ${
          openSettings ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="text-gray-400 flex justify-between items-center">
          <h1 className="uppercase font-bold tracking-wider">Time Setting</h1>
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setOpenSettings(false)}
          />
        </div>
        <div className="h-1 w-full bg-gray-400 mt-5 mb-5"></div>
        <div className="flex gap-5">
          {inputs.map((input, index) => {
            return (
              <div key={index}>
                <h1 className="text-gray-400 text-sm">{input.value}</h1>
                <input
                  defaultValue={input.defaultValue}
                  type="number"
                  className="w-full bg-gra-400 bg-opacity-30 py-2 rounded outline-none text-center"
                  ref={input.ref}
                />
              </div>
            );
          })}
        </div>
        <button
          className="bg-[#674AB3] uppercase w-full mt-5 text-white rounded py-2"
          onClick={updateTimeDefaultValue}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ModalSettings;
