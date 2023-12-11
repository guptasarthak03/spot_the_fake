import React from 'react';
import useCountdown from '../../library/hooks/useCountdown';

function Countdown({
  time = {
    hours: 0,
    minutes: 0,
    seconds: 10,
  },
}) {
  const { timerString } = useCountdown(time);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h1>{timerString} </h1>
    </div>
  );
}

export default Countdown;
