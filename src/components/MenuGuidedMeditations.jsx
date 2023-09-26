import { useContext, useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

import TimerContext from "../context/timerContext";
import DataContext from "../context/dataContext";

import { AudioManager } from "../components/AudioManager";

export const MenuGuidedMeditations = () => {
  const { isRunning, setTimer } = useContext(TimerContext);
  const { meditations } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMeditation, setSelectedMeditation] = useState({
    title: "",
    src: "",
    duration: 600,
  });

  const dropdownRef = useRef();

  //funzione che al click apre il dropdown menu
  const showMenu = (e) => {
    setIsOpen((prev) => !prev);
  };

  //funzione per chiudere il menu quando si verifica un clikc fuori di esso
  const closeMenuOnOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  //funzione per creare gli elementi del menu
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

  //funzione per impostare la meditazione selezionata
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
    <div>
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
      <AudioManager
        audio={selectedMeditation.src}
        isPlaying={isRunning}
        componentFor={"meditation"}
      />
    </div>
  );
};
