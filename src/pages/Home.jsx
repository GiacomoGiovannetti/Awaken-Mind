import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import meditatingGuy from '../assets/images/meditating-guy.png';
import PathContext from '../context/pathContext';

export const Home = () => {
  const { updateNav } = useContext(PathContext);
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Awaken Mind</title>
        <meta property='og:title' content='Awaken Mind' />
        <meta property='og:image' content='/logo-favicon.svg' />
        <meta property='og:image:type' content='image/svg' />
        <meta property='og:url' content='https://awaken-mind.netlify.app/' />
        <meta
          property='og:description'
          content='Awaken Mind is a Web App used to
                      practice meditation by setting up a custom timer or by following a guided
                      meditation.'
        />
      </Helmet>
      <section className='flex flex-col items-center justify-center'>
        <h1 className='mt-5 text-4xl font-semibold md:text-6xl md:mt-10'>
          Awaken Mind
        </h1>
        <h3 className='mt-2 mx-2 text-xl text-center md:text-3xl md:mt-4'>
          Tame your mind and taste the joy of liberation
        </h3>
        <div className='flex flex-col items-center w-full mt-5 md:mt-10 lg:flex-row lg:justify-evenly '>
          <div
            className='flex flex-col items-center'
            onClick={() => {
              updateNav(window.location.pathname);
            }}
          >
            <button
              className='home-button'
              onClick={() => navigate('/custom-meditations')}
            >
              Custom Meditations
            </button>
            <button
              className='home-button'
              onClick={() => navigate('/guided-meditations')}
            >
              Guided Meditations
            </button>
            <button
              className='home-button'
              onClick={() => navigate('/first-steps')}
            >
              First Steps
            </button>
          </div>
          <img
            src={meditatingGuy}
            alt='meditating-guy'
            className='h-72 object-contain mt-4 md:h-96 md:mt-12'
          ></img>
        </div>
      </section>
    </div>
  );
};
