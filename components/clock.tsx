const Clock = ({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  setTicking,
}: any) => {
  const options = ["Timer", "Short Break", "Long Break"];
  return (
    <div className="text-white mx-auto flex flex-col gap-3 h-auto items-center  justify-center">
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

      <button
        onClick={() => setTicking((ticking: any) => !ticking)}
        className="px-16 py-2 text-2xl rounded-md bg-[#674AB3] text-white uppercase font-bold"
      >
        {ticking ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Clock;
