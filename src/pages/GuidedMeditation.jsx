import { useContext, useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

import { Soundtracks } from "../components/Soundtracks";
import { Timer } from "../components/Timer";
import { AudioManager } from "../components/AudioManager";
import { Alert } from "../components/Alert";

import TimerContext from "../context/timerContext";
import DataContext from "../context/dataContext";

export const GuidedMeditations = () => {
  const { isRunning, setTimer } = useContext(TimerContext);
  const { meditations } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMeditation, setSelectedMeditation] = useState({
    title: "",
    src: "",
    duration: 600,
  });

  const dropdownRef = useRef();

  const showMenu = (e) => {
    setIsOpen((prev) => !prev);
  };

  const closeMenuOnOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const meditationsElements = meditations.map((meditation) => (
    <div
      className="flex flex-row items-center"
      key={meditation.title}
      onClick={(e) => selectMeditation(e, meditation.src)}
    >
      <h3>{meditation.title}</h3>
      <p>{meditation.duration / 60} Min.</p>
    </div>
  ));

  const selectMeditation = (e, sound) => {
    let meditation = {
      title: `${
        e.target.tagName === "P"
          ? e.target.previousSibling.innerText
          : e.target.innerText
      }`,
      src: sound,
    };
    setSelectedMeditation((prev) => ({
      ...prev,
      title: meditation.title,
      src: meditation.src,
    }));
    setTimer(selectedMeditation.duration);
  };

  useEffect(() => {
    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Alert />
      <div
        className="select-meditation-dropdown flex flex-row items-center relative"
        onClick={showMenu}
        ref={dropdownRef}
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
      <Timer />
      <AudioManager
        audio={selectedMeditation.src}
        isPlaying={isRunning}
        componentFor={"meditation"}
      />
      <Soundtracks />
    </div>
  );
};
