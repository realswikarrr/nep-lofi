import AboutClock from "../components/aboutclock";
import Clock from "../components/clock";
import Layout from "../components/layout/article";

const Timer = () => {
  return (
    <Layout delay="0.7">
      <Clock />
      <AboutClock />
    </Layout>
  );
};

export default Timer;
