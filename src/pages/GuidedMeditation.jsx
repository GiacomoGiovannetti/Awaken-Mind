import { useContext, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

import { Soundtracks } from "../components/Soundtracks";
import { Timer } from "../components/Timer";
import { AudioManager } from "../components/AudioManager";

import breathMeditation from "../assets/guided-meditations/breath-meditation.mp3";
import sleepMeditation from "../assets/guided-meditations/sleep-meditation.mp3";
import gratitudeMeditation from "../assets/guided-meditations/gratitude-meditation.mp3";

import TimerContext from "../context/timerContext";

const meditations = [
  {
    title: "Breath Awareness Meditation",
    duration: 600,
    src: breathMeditation,
  },
  {
    title: "Sleep Meditation",
    duration: 600,
    src: sleepMeditation,
  },
  {
    title: "Gratitude Meditation",
    duration: 600,
    src: gratitudeMeditation,
  },
];

export const GuidedMeditations = () => {
  const { isRunning, setTimer } = useContext(TimerContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMeditation, setSelectedMeditation] = useState({
    title: "",
    src: "",
    duration: 600,
  });

  const closeSelection = () => {
    setIsOpen((prev) => !prev);
  };

  const meditationsElements = meditations.map((meditation) => (
    <div
      className="flex flex-row items-center"
      key={meditation.title}
      onClick={(e) => handleClick(e, meditation.src)}
    >
      <h3>{meditation.title}</h3>
      <p>{meditation.duration / 60} Min.</p>
    </div>
  ));

  const handleClick = (e, sound) => {
    let meditation = {
      title: `${
        e.target.tagName === "P"
          ? e.target.previousSibling.innerText
          : e.target.innerText
      }`,
      src: sound,
    };

    console.log(meditation.title, e.target);
    setSelectedMeditation((prev) => ({
      ...prev,
      title: meditation.title,
      src: meditation.src,
    }));
    setTimer(selectedMeditation.duration);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="select-meditation-dropdown flex flex-row items-center relative"
        onClick={closeSelection}
      >
        <h1>
          {selectedMeditation.title === ""
            ? "Select guided Meditation"
            : selectedMeditation.title}
        </h1>
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        {isOpen && (
          <div className="menu absolute top-8 right-0 z-10 w-48 bg-amber-400 rounded-xl">
            {meditationsElements}
          </div>
        )}
      </div>
      <AudioManager audio={selectedMeditation.src} isPlaying={isRunning} />
      <Timer />
      <Soundtracks />
    </div>
  );
};
