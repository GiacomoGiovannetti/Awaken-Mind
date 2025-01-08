import { Helmet } from 'react-helmet-async';
import { Alert } from '../components/Alert';
import { SetDurationButtons } from '../components/SetDurationButtons';
import { Soundtracks } from '../components/Soundtracks';
import { Timer } from '../components/Timer';

export const CustomMeditations = ({ darkMode }) => {
  return (
    <div className='flex flex-col items-center'>
      <Helmet>
        <title>Custom Meditation - Awaken Mind</title>
      </Helmet>
      <Alert />
      <Timer darkMode={darkMode} />
      <SetDurationButtons />
      <Soundtracks />
    </div>
  );
};
