import { useState, useEffect, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FaPlay, FaStop, FaPause } from "react-icons/fa6";
import { SetDurationButtons } from "./SetDurationButtons";
import ding from "../assets/sounds/ding.mp3";

export const Timer = () => {
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerValue, setTimerValue] = useState(0);
  const [seconds, setSeconds] = useState("0" + 0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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

  //imposta durata timer
  const setTimer = (value) => {
    setTimerDuration(value);
    setTimerValue(value);
  };

  //Fa partire il timer
  const startTimer = (e) => {
    if (timerValue === 0) {
      e.preventDefault;
    } else {
      setIsRunning((prev) => !prev);
    }
  };

  //ferma il timer e imposta i valori su 0
  const stopTimer = () => {
    setIsRunning(false);
    setTimer(0);
    new Audio(ding).play();
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

    onTabChange();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, timerValue]);

  return (
    <div className="flex flex-col items-center">
      <CountdownCircleTimer
        key={timerDuration}
        isPlaying={isRunning ? true : false}
        duration={timerDuration}
        trailColor="#FFFF"
        colors="#A30000"
        onComplete={stopTimer}
      >
        {timeElement}
      </CountdownCircleTimer>
      <SetDurationButtons setTimer={setTimer} />
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
