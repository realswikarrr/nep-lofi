const Clock = ({ stage, switchStage, getTickingTime }: any) => {
  const options = ["Timer", "Short Break", "Long Break"];
  return (
    <div className="text-white mx-auto flex flex-col gap-3 h-auto  justify-center">
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
          {getTickingTime()}:00
        </h1>
      </div>

      <button className="px-16 py-2 text-2xl rounded-md bg-[#674AB3] text-white uppercase font-bold">
        Start
      </button>
    </div>
  );
};

export default Clock;
