import { Helmet } from 'react-helmet-async';
import { Alert } from '../components/Alert';
import { MenuGuidedMeditations } from '../components/MenuGuidedMeditations';
import { Soundtracks } from '../components/Soundtracks';
import { Timer } from '../components/Timer';

export const GuidedMeditations = ({ darkMode }) => {
  return (
    <div className='flex flex-col items-center'>
      <Helmet>
        <title>Guided Meditation - Awaken Mind</title>
      </Helmet>
      <Alert />
      <MenuGuidedMeditations />
      <Timer darkMode={darkMode} />
      <Soundtracks />
    </div>
  );
};
