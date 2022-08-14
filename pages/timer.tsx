import AboutClock from "../components/aboutclock";
import Clock from "../components/clock";
import Layout from "../components/layout/article";
import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(40);
  const [shortBreak, setShortBreak] = useState(10);
  const [longBreak, setLongBreak] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [ticking, setTicking] = useState(false);

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

  const updateMinute = () => {
    const updateStage: any = {
      0: setTimer,
      1: setShortBreak,
      2: setLongBreak,
    };

    return updateStage[stage];
  };

  const resetTimer = () => {
    setTicking(false);
    setTimer(40);
    setShortBreak(10);
    setLongBreak(30);
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      resetTimer();
    } else if (seconds === 0) {
      setMinutes((minute: any) => minute - 1);
      setSeconds(59);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (ticking) {
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, timer, shortBreak, longBreak, ticking]);

  return (
    <Layout delay="0.7">
      <div className=" overflow-y-auto scrollbar-hide">
        <Clock
          stage={stage}
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds}
          ticking={ticking}
          setTicking={setTicking}
        />
        <AboutClock />
      </div>
    </Layout>
  );
};

export default Timer;
