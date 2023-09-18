import { useContext, useState } from "react";
import PathContext from "../context/context";
import { FaBars } from "react-icons/fa";

export const MobileMenu = ({ linkPresets }) => {
  const { pathName } = useContext(PathContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden relative">
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
