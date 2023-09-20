import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { Soundtracks } from "../components/Soundtracks";
import { Timer } from "../components/Timer";

export const GuidedMeditations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMeditation, setSelectedMeditation] = useState("");

  const closeSelection = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    let meditation = e.target.innerText;
    setSelectedMeditation(meditation);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="select-meditation-dropdown flex flex-row items-center relative"
        onClick={closeSelection}
      >
        <h1>
          {selectedMeditation === ""
            ? "Select guided Meditation"
            : selectedMeditation}
        </h1>
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        {isOpen && (
          <div
            className="menu absolute top-8 right-0 z-10 bg-amber-400 rounded-xl"
            onClick={handleClick}
          >
            <p>Gratitude Meditation --- 10 Minutes</p>
            <p>Breath awareness Meditation --- 10 Minutes</p>
            <p>Sleep Meditation --- 10 Minutes</p>
            <p>Sensation recognition Meditation --- 10 Minutes</p>
            <p>Law of Attraction meditation --- 10 Minutes</p>
          </div>
        )}
      </div>

      <Timer />
      <Soundtracks />
    </div>
  );
};
