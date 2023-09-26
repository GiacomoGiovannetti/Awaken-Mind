import { useContext, useEffect, useState, useRef } from "react";
import PathContext from "../context/pathContext";
import { FaBars } from "react-icons/fa";

export const MobileMenu = ({ linkPresets }) => {
  const { pathName } = useContext(PathContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  //chiude il menu quando si clicca fuori di esso
  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="lg:hidden relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="active:rotate-180 active:transition-transform active:duration-250"
      >
        <FaBars className="text-xl" />
      </button>
      {isOpen && (
        <div className="absolute right-0 flex flex-col w-34 rounded-lg text-lg font-semibold bg-amber-400">
          {pathName === "/custom-meditations"
            ? linkPresets.customMed
            : pathName === "/guided-meditations"
            ? linkPresets.guidedMed
            : pathName === "/first-steps"
            ? linkPresets.firstSteps
            : ""}
        </div>
      )}
    </div>
  );
};
