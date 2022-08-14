import AboutClock from "../components/aboutclock";
import Clock from "../components/clock";
import Layout from "../components/layout/article";
import { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(40);
  const [shortBreak, setShortBreak] = useState(10);
  const [longBreak, setLongBreak] = useState(30);
  const [seconds, setSeconds] = useState(0);

  //  Setting the stage of the timer such as navigation
  const [stage, setStage] = useState<any>(0);

  //  Function to switch the stage of the timer
  const switchStage = (index: any) => {
    setStage(index);
  };

  //  Function to get the time of specfic timer stage
  const getTickingTime = () => {
    const timeStage: any = {
      0: timer,
      1: shortBreak,
      2: longBreak,
    };

    return timeStage[stage];
  };

  return (
    <Layout delay="0.7">
      <Clock
        stage={stage}
        switchStage={switchStage}
        getTickingTime={getTickingTime}
        seconds={seconds}
      />
      <AboutClock />
    </Layout>
  );
};

export default Timer;
