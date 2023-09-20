import { useState } from "react";

const TIME_PRESETS = [
  { id: "5 minutes", value: 300 },
  { id: "10 minutes", value: 600 },
  { id: "15 minutes", value: 900 },
];

export const SetDurationButtons = ({ setTimer }) => {
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
  const timePresetsElements = TIME_PRESETS.map((preset) => {
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
