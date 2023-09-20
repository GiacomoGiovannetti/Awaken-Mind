import { useContext, useState } from "react";
import TimerContext from "../context/timerContext";
import DataContext from "../context/dataContext";

export const SetDurationButtons = () => {
  const { timePresets } = useContext(DataContext);
  const { setTimer } = useContext(TimerContext);
  const [customDuration, setCustomDuration] = useState("");

  //gestione onChange per input
  const handleChange = (e) => {
    let value = e.target.value;
    let reg = /^[0-9]+$/;
    if (reg.test(value) || value === "") {
      let intValue = parseInt(value);
      setCustomDuration(value);
      console.log("sono solo numeri", intValue);
    }
  };

  //gestione Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customDuration != "") {
      setTimer(customDuration * 60);
      console.log("invio");
    }
  };

  //creazione pulsanti per preset durata
  const timePresetsElements = timePresets.map((preset) => {
    return (
      <button
        value={preset.value}
        key={preset.id}
        onClick={() => setTimer(preset.value)}
      >
        {preset.id}
      </button>
    );
  });

  return (
    <div>
      <div className="time-presets">{timePresetsElements}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="duration-amount">Minutes :</label>
        <input
          type="text"
          name="duration-amount"
          id="duration-amount"
          placeholder="Type in desired duration"
          value={customDuration}
          onChange={handleChange}
        ></input>
        <button type="submit">Set</button>
      </form>
    </div>
  );
};
