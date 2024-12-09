import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Tab from "../Tab";
import useNavigationHotkeys from "../../Hooks/useNavigationHotkeys";
import Information from "./Information";

const NavBar = () => {
  const location = useLocation();
  const forceCheck = (name) => name === location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useNavigationHotkeys();

  return (
    <div className="lg:fixed p-3 md:h-full md:fixed md:top-0 md:left-0 md:w-44">
      <div className="h-full flex flex-col gap-2">
        <div className="border-solid border-2 border-zinc-50 p-1">
          <div className="bg-zinc-50 p-2 flex justify-between items-center">
            <a href="/" className="text-3xl font-semibold uppercase">
              KhyЯon
            </a>
            <button className="md:hidden text-2xl ml-auto" onClick={toggleMenu}>
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        <div
          className={`h-full bg-zinc-50 flex flex-col p-2 transition-transform duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:block`}
        >
          <Tab
            text="portfolio"
            link="/portfolio"
            force={forceCheck("/portfolio")}
          />
          <Tab text="about" link="/about" force={forceCheck("/about")} />
          <Tab text="contact" link="/contact" force={forceCheck("/contact")} />
          {/* Fill up space until the bottom */}
          <div className="flex-1"></div>
          <div className="relative group flex items-center">
            <button className="cursor-pointer">
              <Information className="info-icon w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
