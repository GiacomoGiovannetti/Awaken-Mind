import { Timer } from "../components/Timer";
import { Soundtracks } from "../components/Soundtracks";
import { SetDurationButtons } from "../components/SetDurationButtons";
import { Alert } from "../components/Alert";

export const CustomMeditations = () => {
  return (
    <div className="flex flex-col items-center">
      <Alert />
      <Timer />
      <SetDurationButtons />
      <Soundtracks />
    </div>
  );
};
