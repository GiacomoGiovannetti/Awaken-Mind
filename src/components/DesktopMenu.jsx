import { useContext } from "react";
import PathContext from "../context/pathContext";

export const DesktopMenu = ({ linkPresets }) => {
  const { pathName } = useContext(PathContext);

  return (
    <div className="hidden lg:block ">
      {pathName === "/custom-meditations"
        ? linkPresets.customMed
        : pathName === "/guided-meditations"
        ? linkPresets.guidedMed
        : pathName === "/first-steps"
        ? linkPresets.firstSteps
        : ""}
    </div>
  );
};
