import { Timer } from "../components/Timer";
import { Soundtracks } from "../components/Soundtracks";
import { SetDurationButtons } from "../components/SetDurationButtons";

export const CustomMeditations = () => {
  return (
    <div className="flex flex-col items-center">
      <Timer />
      <SetDurationButtons />
      <Soundtracks />
    </div>
  );
};
