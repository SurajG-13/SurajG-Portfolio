import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed z-50 flex w-full justify-between bg-darkBackground p-4 sm:p-6">
      <nav className="flex w-full items-center justify-center md:justify-end md:gap-4 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `duration-200 min-w-[100px] text-center font-sans ${
              isActive ? "text-primaryWhite" : "text-dullWhite"
            } hover:text-primaryWhite`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `duration-200 min-w-[100px] text-center font-sans ${
              isActive ? "text-primaryWhite" : "text-dullWhite"
            } hover:text-primaryWhite`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            `duration-200 min-w-[100px] text-center font-sans ${
              isActive ? "text-primaryWhite" : "text-dullWhite"
            } hover:text-primaryWhite`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/ContactMe"
          className={({ isActive }) =>
            `duration-200 border rounded-full ml-2 px-2 font-sans ${
              isActive ? "text-primaryWhite" : "bg-[#00000f] text-dullWhite"
            } hover:text-primaryWhite`
          }
        >
          <span className="hidden sm:inline-flex font-sans">Contact Me</span>
          <span className="flex sm:hidden font-sans">Contact</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
