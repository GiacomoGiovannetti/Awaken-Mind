import { useState, useContext } from "react";
import DataContext from "../context/dataContext";
import { AudioManager } from "./AudioManager";

export const Soundtracks = () => {
  const { soundtracks } = useContext(DataContext);

  //state soundtracks
  const [soundtrack, setSoundtrack] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="soundtracks flex flex-row justify-center">
      {soundtrackItems}
      <AudioManager audio={soundtrack} isPlaying={isPlaying} />
    </div>
  );
};
