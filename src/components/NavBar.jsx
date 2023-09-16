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
      <NavLink to="/guided-meditations" className="mobile-menu lg:desktop-menu">
        Guided Meditations
      </NavLink>
      <NavLink to="/first-steps" className="mobile-menu lg:desktop-menu">
        First Steps
      </NavLink>
    </Fragment>
  ),
  guidedMed: (
    <Fragment>
      <NavLink to="/custom-meditations" className="mobile-menu lg:desktop-menu">
        Custom Meditations
      </NavLink>
      <NavLink to="/first-steps" className="mobile-menu lg:desktop-menu">
        First Steps
      </NavLink>
    </Fragment>
  ),
  firstSteps: (
    <Fragment>
      <NavLink to="/custom-meditations" className="mobile-menu lg:desktop-menu">
        Custom Meditations
      </NavLink>
      <NavLink to="/guided-meditations" className="mobile-menu lg:desktop-menu">
        Guided Meditations
      </NavLink>
    </Fragment>
  ),
};

export const NavBar = () => {
  const { pathName, updateNav } = useContext(PathContext);

  return (
    <header className="h-auto flex justify-between items-center p-2 shadow-lg">
      <div
        className="flex items-center w-[95%]"
        onClick={() => updateNav(window.location.pathname)}
      >
        <NavLink to="/" className="flex items-center ">
          <img src={viteLogo} alt="logo" className=" w-10 h-10"></img>
          <h3 className="text-xl font-semibold ">Nome App</h3>
        </NavLink>
        {pathName != "/" && (
          <nav className="ml-auto">
            <DesktopMenu linkPresets={NAV_LINKS_PRESETS} />
            <MobileMenu linkPresets={NAV_LINKS_PRESETS} />
          </nav>
        )}
      </div>
      <button>
        <FaRegLightbulb className="h-8 mb-2 ml-2" />
      </button>
    </header>
  );
};
