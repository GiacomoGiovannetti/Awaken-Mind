import { Soundtracks } from "../components/Soundtracks";
import { Timer } from "../components/Timer";

export const GuidedMeditations = () => {
  return (
    <div>
      <div className="select-meditation-dropdown">
        <h1>Select guided Meditation </h1>
      </div>

      <Timer />
      <Soundtracks />
    </div>
  );
};
