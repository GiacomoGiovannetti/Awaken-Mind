import { useContext } from "react";
import viteLogo from "/vite.svg";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PathContext from "../context/pathContext";
import DataContext from "../context/dataContext";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const NavBar = () => {
  const { pathName, updateNav } = useContext(PathContext);
  const { navLinksPresets } = useContext(DataContext);

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
            <DesktopMenu linkPresets={navLinksPresets} />
            <MobileMenu linkPresets={navLinksPresets} />
          </nav>
        )}
      </div>
      <button>
        <FaRegLightbulb className="h-8 mb-2 ml-2" />
      </button>
    </header>
  );
};
