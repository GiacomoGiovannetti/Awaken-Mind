import { useEffect, useRef, useState, useContext } from "react";
import { Timer } from "../components/Timer";
import DataContext from "../context/dataContext";

export const CustomMeditations = () => {
  const { soundtracks } = useContext(DataContext);

  //state soundtracks
  const [soundtrack, setSoundtrack] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  //state audioEl. / volume
  const soundtrackRef = useRef();
  const [soundtrackVolume, setSoundtrackVolume] = useState(0.5);

  //creazione elementi soundtracks
  const soundtrackItems = soundtracks.map((soundtrack) => (
    <div key={soundtrack.id}>
      <button onClick={() => handleClick(soundtrack.src)}>
        {soundtrack.icon}
      </button>
      <p>{soundtrack.id}</p>
    </div>
  ));

  //funzione per far partire la soundtrack e fermarla
  const handleClick = (sound) => {
    setSoundtrack(sound);
    if (soundtrack === sound || !isPlaying) {
      setIsPlaying((prev) => !prev);
    }
  };

  // funzione per impostare il volume delle soundtracks
  const handleChange = (e) => {
    let volume = e.target.value;
    setSoundtrackVolume(volume);
  };

  //gestione aggiornamenti state relativi alle soundtracks
  useEffect(() => {
    const audioElement = soundtrackRef.current;
    if (isPlaying) {
      audioElement.play();
      audioElement.volume = soundtrackVolume;
    } else if (!isPlaying) {
      audioElement.pause();
    }
  }, [soundtrack, isPlaying, soundtrackVolume]);

  return (
    <div>
      <div className="timer-buttons flex flex-col items-center">
        <Timer />
      </div>
      <div className="soundtracks flex flex-row justify-center">
        {soundtrackItems}
        <audio ref={soundtrackRef} src={soundtrack} loop></audio>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={soundtrackVolume}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};
