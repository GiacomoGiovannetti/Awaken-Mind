import { useContext, useState } from "react";
import PathContext from "../context";
import { FaBars } from "react-icons/fa";

export const MobileMenu = ({ linkPresets }) => {
  const { pathName } = useContext(PathContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="active:animate-spin"
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className="absolute">
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
