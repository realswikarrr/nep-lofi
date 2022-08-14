import AboutClock from "../components/aboutclock";
import Clock from "../components/clock";
import Layout from "../components/layout/article";
import { useEffect, useRef, useState } from "react";
import Alarm from "../components/alarm";

const Timer = () => {
  const [timer, setTimer] = useState(40);
  const [shortBreak, setShortBreak] = useState(10);
  const [longBreak, setLongBreak] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [consumedSecond, setConsumedSecond] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const alarmRef = useRef<any>();

  //  Setting the stage of the timer such as navigation
  const [stage, setStage] = useState<any>(0);

  //  Function to switch the stage of the timer
  const switchStage = (index: any) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm("Are you sure you want to switch ?")
        : false;

    if (isYes) {
      resetTimer();
      setStage(index);
    } else if (!consumedSecond) {
      setStage(index);
    }
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
    setConsumedSecond(0);
    setTicking(false);
    setSeconds(0);
    setTimer(40);
    setShortBreak(10);
    setLongBreak(30);
  };

  const timeUp = () => {
    resetTimer();
    setIsTimeUp(true);
    alarmRef.current.play();
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute: any) => minute - 1);
      setSeconds(59);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  };

  const muteAlarm = () => {
    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  };

  const startTimer = () => {
    setIsTimeUp(false);
    muteAlarm();
    setTicking((ticking: any) => !ticking);
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? "Show warning" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1);
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
          startTimer={startTimer}
          muteAlarm={muteAlarm}
          isTimeUp={isTimeUp}
          resetTimer={resetTimer}
        />
        <AboutClock />
        <Alarm ref={alarmRef} />
      </div>
    </Layout>
  );
};

export default Timer;
