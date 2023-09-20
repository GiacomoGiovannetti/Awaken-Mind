import { createContext } from "react";
import { NavLink } from "react-router-dom";

import {
  FaFire,
  FaWater,
  FaCloudRain,
  FaDroplet,
  FaDove,
  FaBell,
  FaClock,
  FaMusic,
} from "react-icons/fa6";

import Fire from "../assets/sounds/fireplace-crackling.mp3";
import OceanWaves from "../assets/sounds/ocean-waves.mp3";
import Rain from "../assets/sounds/rain.mp3";
import Waterfall from "../assets/sounds/waterfall.mp3";
import BirdsSinging from "../assets/sounds/birds-singing.mp3";
import TibetanBell from "../assets/sounds/tibetan-bowl.mp3";
import ClockTicking from "../assets/sounds/clock.mp3";
import MeditationMusic from "../assets/sounds/meditation-music.mp3";

const DataContext = createContext("");

export const DataProvider = ({ children }) => {
  const navLinksPresets = {
    customMed: (
      <>
        <NavLink
          to="/guided-meditations"
          className="mobile-menu lg:desktop-menu"
        >
          Guided Meditations
        </NavLink>
        <NavLink to="/first-steps" className="mobile-menu lg:desktop-menu">
          First Steps
        </NavLink>
      </>
    ),
    guidedMed: (
      <>
        <NavLink
          to="/custom-meditations"
          className="mobile-menu lg:desktop-menu"
        >
          Custom Meditations
        </NavLink>
        <NavLink to="/first-steps" className="mobile-menu lg:desktop-menu">
          First Steps
        </NavLink>
      </>
    ),
    firstSteps: (
      <>
        <NavLink
          to="/custom-meditations"
          className="mobile-menu lg:desktop-menu"
        >
          Custom Meditations
        </NavLink>
        <NavLink
          to="/guided-meditations"
          className="mobile-menu lg:desktop-menu"
        >
          Guided Meditations
        </NavLink>
      </>
    ),
  };

  const soundtracks = [
    {
      id: "Fireplace",
      src: Fire,
      icon: <FaFire />,
    },
    {
      id: "Waves",
      src: OceanWaves,
      icon: <FaWater />,
    },
    {
      id: "Rain",
      src: Rain,
      icon: <FaCloudRain />,
    },
    {
      id: "Waterfall",
      src: Waterfall,
      icon: <FaDroplet />,
    },
    {
      id: "Birds Singing",
      src: BirdsSinging,
      icon: <FaDove />,
    },
    {
      id: "Tibetan Bell",
      src: TibetanBell,
      icon: <FaBell />,
    },
    {
      id: "Clock Ticking",
      src: ClockTicking,
      icon: <FaClock />,
    },
    {
      id: "Meditation Music",
      src: MeditationMusic,
      icon: <FaMusic />,
    },
  ];

  return (
    <DataContext.Provider value={{ navLinksPresets, soundtracks }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
