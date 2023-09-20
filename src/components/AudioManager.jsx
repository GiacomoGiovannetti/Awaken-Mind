import { useEffect, useRef, useState } from "react";

export const AudioManager = ({ soundtrack, isPlaying }) => {
  //state audioEl. / volume
  const soundtrackRef = useRef();
  const [soundtrackVolume, setSoundtrackVolume] = useState(0.5);

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
    <>
      <audio ref={soundtrackRef} src={soundtrack} loop></audio>
      <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={soundtrackVolume}
        onChange={handleChange}
      ></input>
    </>
  );
};
