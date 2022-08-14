import React from "react";

const Alarm = React.forwardRef((_, ref: any) => {
  return (
    <audio ref={ref} preload="auto">
      <source src="/alarm.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
});

Alarm.displayName = "Alarm";

export default Alarm;
