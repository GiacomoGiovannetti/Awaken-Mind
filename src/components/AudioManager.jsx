import { useEffect, useRef, useState } from "react";

import { FaVolumeHigh, FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";

export const AudioManager = ({ audio, isPlaying, componentFor }) => {
  //state audioEl. / volume
  const soundtrackRef = useRef();
  const [soundtrackVolume, setSoundtrackVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);

  // funzione per impostare il volume delle soundtracks
  const handleChange = (e) => {
    let volume = e.target.value;
    setSoundtrackVolume(volume);
  };

  //verifica il component in cui si trova in modo da mostrare il testo corretto
  const componentVolumeName =
    componentFor === "soundtrack" ? "Soundtrack" : "Meditation";

  //in base al valore del volume mostra un icona diversa
  const showVolumeIcon =
    soundtrackVolume >= 0.5 ? (
      <FaVolumeHigh />
    ) : soundtrackVolume < 0.5 && soundtrackVolume > 0 ? (
      <FaVolumeLow />
    ) : (
      <FaVolumeXmark />
    );

  //per mostrare la barra volume
  const showVolumeBar = (e) => {
    e.stopPropagation();
    setShowVolume((prev) => !prev);
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
  }, [audio, isPlaying, soundtrackVolume]);

  return (
    <>
      <audio ref={soundtrackRef} src={audio} loop></audio>
      <div onMouseOver={showVolumeBar} onMouseOut={showVolumeBar}>
        <h3>
          {componentVolumeName} Volume {showVolumeIcon}
        </h3>
        {showVolume && (
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={soundtrackVolume}
            onChange={handleChange}
          ></input>
        )}
      </div>
    </>
  );
};
