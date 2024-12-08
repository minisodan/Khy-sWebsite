import { useLocation } from "react-router-dom";
import { useState } from "react";
import Tab from "../Tab";
import useNavigationHotkeys from "../../Hooks/useNavigationHotkeys";
import InformationPanel from "./InformationPanel";
import Information from "../SVG/Information";
import SVGWrapper from "../SVG/SVGWrapper";

const NavBar = () => {
  const location = useLocation();
  const forceCheck = (name) => name === location.pathname;

  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to manage information window
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Function to toggle information panel
  const toggleInfo = () => {
    setIsInfoOpen((prev) => !prev);
  };

  // Hotkeys
  useNavigationHotkeys();

  return (
    <div className="lg:fixed p-3 md:h-full md:fixed md:top-0 md:left-0 md:w-44 p-2">
      <div className="h-full flex flex-col gap-2">
        <div className="border-solid border-2 border-zinc-50 p-1">
          <div className="bg-zinc-50 p-2 flex justify-between items-center">
            {/* Centered Text */}
            <a href="/" className="text-3xl font-semibold uppercase">
              KhyЯon
            </a>
            {/* Hamburger on the far right */}
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

          {/* Bottom middle? left Idc someone please save me */}
          <div className="">
            {/* Information Panel, too the right of info icon using columns */}
            <div className="">{isInfoOpen && <InformationPanel />}</div>
            <button onClick={toggleInfo}>
              <Information />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
