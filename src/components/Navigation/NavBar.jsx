import { useLocation } from "react-router-dom";
import Tab from "../Tab";

const NavBar = () => {
  const location = useLocation();
  const forceCheck = (name) => name === location.pathname;

  return (
    <div class="h-screen p-3">
      <div class="h-full flex flex-col gap-2">
        <div class="border-solid border-2 border-zinc-50 p-1">
          <div class="bg-zinc-50 p-2 ">
            <a href="/" class="text-3xl font-semibold uppercase">
              KhyЯon
            </a>
          </div>
        </div>
        <div class="h-full bg-zinc-50 flex flex-col p-2">
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
