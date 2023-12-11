import { useEffect, useRef, useState } from 'react';

/**
 * @param {Number} userTimeInput
 * @returns {Object}
 */

function useCountdown(userTimeInput) {
  const [timer, setTimer] = useState(userTimeInput);
  const [isTimerFinished, setTimerFinished] = useState(false);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(runTimer, 1000);
    return () => clearInterval(intervalIdRef.current);
  }, [timer]);

  const updateTimer = input => {
    setTimer(input);
    setTimerFinished(false);
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
  };

  function runTimer() {
    // setter fn has access to most updated state
    setTimer(prevTimer => {
      if (prevTimer - 1000 <= 0) {
        clearInterval(intervalIdRef.current);
        setTimerFinished(true);
        return 0;
      }

      return prevTimer - 1000;
    });
  }

  return { timer, updateTimer, stopTimer, isTimerFinished };
}

export default useCountdown;
