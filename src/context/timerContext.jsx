import { createContext, useState } from "react";

const TimerContext = createContext("");

export const TimerProvider = ({ children }) => {
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerValue, setTimerValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //imposta durata timer
  const setTimer = (value) => {
    setTimerDuration(value);
    setTimerValue(value);
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider
      value={{
        timerDuration,
        timerValue,
        isRunning,
        setIsRunning,
        setTimerValue,
        setTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
