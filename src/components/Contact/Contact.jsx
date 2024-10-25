import Footer from "../Navigation/Footer";
import Instagram from "../SVG/Instagram";
import Twitter from "../SVG/Twitter";
import Twitch from "../SVG/Twitch";
import Youtube from "../SVG/Youtube";
import TikTok from "../SVG/TikTok";
import SVGWrapper from "../SVG/SVGWrapper";
import NavBar from "../Navigation/NavBar";

const SLATE_800 = "#1e293b";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row bg-contact-image bg-no-repeat bg-cover bg-center h-screen">
      <NavBar />
      <div className="flex-grow flex items-center justify-center pt-5 md:pt-10">
        <div className="w-full max-w-md p-4 flex flex-col gap-4">
          <div className="text-center bg-zinc-50 uppercase p-4">
            <h1 className="text-4xl font-semibold">Contact Me</h1>
          </div>
          <div className="p-2 bg-zinc-50 flex flex-col text-center">
            <h2 className="text-2xl uppercase">Socials</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <SVGWrapper color={SLATE_800}>
                <Instagram />
              </SVGWrapper>
              <SVGWrapper color={SLATE_800}>
                <Twitter />
              </SVGWrapper>
              <SVGWrapper color={SLATE_800}>
                <Twitch />
              </SVGWrapper>
              <SVGWrapper color={SLATE_800}>
                <Youtube />
              </SVGWrapper>
              <SVGWrapper color={SLATE_800}>
                <TikTok />
              </SVGWrapper>
            </div>
          </div>
          <div className="bg-zinc-50 flex flex-col text-center">
            <h2 className="p-2 text-2xl uppercase">E-Mail</h2>
            <div className="flex flex-col gap-2 p-2">
              <input
                className="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
                type="email"
                placeholder="E-Mail"
                aria-label="E-Mail"
              />
              <input
                className="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
                type="text"
                placeholder="Name"
                aria-label="Name"
              />
              <input
                className="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
                type="text"
                placeholder="Subject"
                aria-label="Subject"
              />
              <textarea
                className="resize-none border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800 h-40"
                placeholder="Message"
                aria-label="Message"
              />
              <button className="w-full border-2 border-slate-800 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300">
                SEND
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
