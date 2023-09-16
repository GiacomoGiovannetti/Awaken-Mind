import { Fragment, useContext } from "react";
import viteLogo from "/vite.svg";
import { FaLightbulb, FaRegLightbulb, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PathContext from "../context";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS_PRESETS = {
  customMed: (
    <Fragment>
      <NavLink to="/guided-meditations">Guided Meditations</NavLink>
      <NavLink to="/first-steps">First Steps</NavLink>
    </Fragment>
  ),
  guidedMed: (
    <Fragment>
      <NavLink to="/custom-meditations">Custom Meditations</NavLink>
      <NavLink to="/first-steps">First Steps</NavLink>
    </Fragment>
  ),
  firstSteps: (
    <Fragment>
      <NavLink to="/custom-meditations">Custom Meditations</NavLink>
      <NavLink to="/guided-meditations">Guided Meditations</NavLink>
    </Fragment>
  ),
};

export const NavBar = () => {
  const { pathName, updateNav } = useContext(PathContext);

  return (
    <header>
      <div onClick={() => updateNav(window.location.pathname)}>
        <NavLink to="/">
          <img src={viteLogo} alt="logo" className=" w-10 h-10"></img>
          <h3>Nome App</h3>
        </NavLink>
        {pathName != "/" && (
          <nav>
            <DesktopMenu linkPresets={NAV_LINKS_PRESETS} />
            <MobileMenu linkPresets={NAV_LINKS_PRESETS} />
          </nav>
        )}
      </div>
      <button>
        <FaRegLightbulb />
      </button>
    </header>
  );
};
