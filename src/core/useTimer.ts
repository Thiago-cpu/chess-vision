import { useRef, useState } from "react";

export const useTimer = (initialSeconds = 30) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setSeconds(initialSeconds);
    intervalRef.current = setInterval(() => {
      setSeconds((p) => Math.max(p - 1, 0));
    }, 1000);
    setIsRunning(true);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
  };

  if (seconds === 0 && isRunning) stop();

  return { seconds, start, stop, isRunning };
};
