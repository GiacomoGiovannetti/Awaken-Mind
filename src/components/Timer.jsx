import { useState, useEffect, useRef, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FaPlay, FaStop, FaPause } from "react-icons/fa6";

import ding from "../assets/sounds/ding.mp3";

import TimerContext from "../context/timerContext";
import PathContext from "../context/pathContext";

export const Timer = () => {
  const {
    timerDuration,
    timerValue,
    isRunning,
    setTimerValue,
    setIsRunning,
    setAlertIsVisible,
    setTimer,
  } = useContext(TimerContext);

  const { pathName } = useContext(PathContext);

  const [timerPage, setTimerPage] = useState("");
  const [seconds, setSeconds] = useState("0" + 0);
  const [minutes, setMinutes] = useState(0);

  //Display durata meditazione dentro al cerchio
  const timeElement = ({ remainingTime }) => {
    return (
      <div>
        <span>
          <h3>{minutes} :</h3>
        </span>
        <span>
          <h3>{seconds}</h3>
        </span>
      </div>
    );
  };

  //Fa partire il timer e controlla che la durata sia diversa da 0
  const startTimer = (e) => {
    if (timerDuration === 0 && timerValue === 0) {
      setAlertIsVisible(true);
    } else {
      setIsRunning((prev) => !prev);
      setTimerPage(window.location.pathname);
    }
  };

  //ferma il timer e imposta i valori su 0
  const stopTimer = () => {
    setTimer(0);
    console.log("triggeri");
  };

  //aggiornare i valori di minutes e seconds
  const updateTimerDisplay = () => {
    let secondsValue = Math.floor(timerValue % 60);
    setSeconds(secondsValue < 10 ? "0" + secondsValue : secondsValue);
    setMinutes(Math.floor(timerValue / 60));
  };

  //ferma il timer al cambio di scheda del browser
  const onTabChange = () => {
    if (document.hidden && timerValue !== 0) {
      setIsRunning(false);
    }
  };

  //dichiaro riferimento per intervallo
  let intervalRef = useRef();

  //aggiorna il valore del timer
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        console.log("intervallo attivo: ", isRunning);
        setTimerValue((prevDuration) => prevDuration - 1);
        updateTimerDisplay();
      }, 1000);
    } else if (!isRunning) {
      clearInterval(intervalRef.current);
      console.log("intervallo disattivato : ", isRunning, timerDuration);
      updateTimerDisplay();
    }

    if (timerPage !== pathName && isRunning) {
      console.log("stoppatooooo");
      stopTimer();
    }

    onTabChange();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, timerValue, pathName]);

  return (
    <div className="flex flex-col items-center">
      <CountdownCircleTimer
        key={timerDuration}
        isPlaying={isRunning ? true : false}
        duration={timerDuration}
        trailColor="#FFFF"
        colors="#A30000"
        onComplete={() => {
          stopTimer();
          new Audio(ding).play();
        }}
      >
        {timeElement}
      </CountdownCircleTimer>
      <div className="stop-play flex flex-row">
        <button className="flex flex-row items-center" onClick={startTimer}>
          {isRunning ? (
            <>
              Pause <FaPause />
            </>
          ) : (
            <>
              Play <FaPlay />
            </>
          )}
        </button>
        <button className="flex flex-row items-center" onClick={stopTimer}>
          Stop <FaStop />
        </button>
      </div>
    </div>
  );
};
