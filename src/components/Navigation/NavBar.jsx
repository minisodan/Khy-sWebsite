import { useLocation } from "react-router-dom";
import { useState } from "react";
import Tab from "../Tab";
import useNavigationHotkeys from "../../Hooks/useNavigationHotkeys";

const NavBar = () => {
  const location = useLocation();
  const forceCheck = (name) => name === location.pathname;

  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
