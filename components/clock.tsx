import { BsVolumeMuteFill } from "react-icons/bs";

const Clock = ({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  startTimer,
  isTimeUp,
  muteAlarm,
  resetTimer,
  setOpenSettings,
}: any) => {
  const options = ["Timer", "Short Break", "Long Break"];
  return (
    <div className="text-white mt-10 mx-auto flex flex-col gap-3 h-auto items-center  justify-center">
      <div className="flex gap-5 items-center">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={` ${
                index === stage ? "bg-[#674AB3] bg-opacity-30" : ""
              }  p-1 cursor-pointer transition-all rounded`}
              onClick={() => switchStage(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-8xl font-bold selecte-none m-0">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={startTimer}
          className="px-16 py-2 text-2xl rounded-md bg-[#674AB3] text-white uppercase font-bold"
        >
          {ticking ? "Pause" : "Start"}
        </button>
        {isTimeUp && (
          <BsVolumeMuteFill
            className="text-3xl text-white cursor-pointer"
            onClick={muteAlarm}
          />
        )}
      </div>
      {ticking && (
        <button
          className="uppercase text-white underline mt-2"
          onClick={resetTimer}
        >
          Reset
        </button>
      )}
      <div>
        <h1
          className="cursor-pointer"
          onClick={() => setOpenSettings((value: any) => !value)}
        >
          Open Setting
        </h1>
      </div>
    </div>
  );
};

export default Clock;
