import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

import { CustomMeditations } from './pages/CustomMeditations';
import { FirstSteps } from './pages/FirstSteps';
import { GuidedMeditations } from './pages/GuidedMeditation';
import { Home } from './pages/Home';

import { DataProvider } from './context/dataContext';
import { PathProvider } from './context/pathContext';
import { TimerProvider } from './context/timerContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  ReactGA.initialize('G-X30TL20ZZS');

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <PathProvider>
      <DataProvider>
        <TimerProvider>
          <Router>
            <meta
              name='keywords'
              content='meditation, mindfulness, meditation app, awaken mind, guided meditation'
            />
            <meta
              name='description'
              content='Awaken Mind is a Web App used to practice meditation by setting up a custom timer or by following a guided meditation.'
            />
            <meta
              name='google-site-verification'
              content='y4sP0qNnRc1AWh_q7FJ_c8e3fKKiQ-fqoqhcRHUD4eI'
            />
            <meta property='og:title' content='Awaken Mind' />
            <meta property='og:image' content='/logo-favicon.svg' />
            <meta property='og:image:type' content='image/svg' />
            <meta
              property='og:url'
              content='https://awaken-mind.netlify.app/'
            />
            <meta
              property='og:description'
              content='Awaken Mind is a Web App used to
                practice meditation by setting up a custom timer or by following a guided
                meditation.'
            />
            <div className={`${darkMode ? 'dark' : ''}`}>
              <main className='flex flex-col font-Mooli h-auto min-h-screen text-slate-800 bg-gradient-to-b from-amber-500  via-yellow-400 to-blue-300 dark:from-slate-900 dark:via-slate-900  dark:to-slate-800 dark:text-amber-500'>
                <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                  <Route exact path='/' element={<Home />}></Route>
                  <Route
                    path='/custom-meditations'
                    element={<CustomMeditations darkMode={darkMode} />}
                  ></Route>
                  <Route
                    path='/guided-meditations'
                    element={<GuidedMeditations darkMode={darkMode} />}
                  ></Route>
                  <Route path='/first-steps' element={<FirstSteps />}></Route>
                </Routes>
                <Footer />
              </main>
            </div>
          </Router>
        </TimerProvider>
      </DataProvider>
    </PathProvider>
  );
}
