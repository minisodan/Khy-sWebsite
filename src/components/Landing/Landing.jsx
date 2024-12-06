import Tab from "../Tab";
import Footer from "../Navigation/Footer";
import useNavigationHotkeys from "../../Hooks/useNavigationHotkeys";

const Landing = () => {
  const currentYear = new Date().getFullYear();

  // This is a custom hook that listens for key presses and navigates to the appropriate page
  useNavigationHotkeys();

  return (
    <div className="flex flex-col h-screen bg-cover bg-center bg-landing-image">
      <div className="m-auto animate-fade-in-up flex gap-4 flex-col">
        <div className="border-solid border-2 border-slate-50 p-1">
          <h1 className="text-6xl p-1 font-semibold uppercase text-center bg-zinc-50 text-slate-800">
            KHYЯON
          </h1>
        </div>
        <div className="flex justify-center gap-2 text-zinc-50 bg-zinc-50 p-1">
          <Tab text="portfolio" link="/portfolio" />
          <Tab text="about" link="/about" />
          <Tab text="contact" link="/contact" />
          {/* email api*/}
          {/* <Tab text="email me" link=""/> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Landing;
