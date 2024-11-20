import Footer from "../Navigation/Footer";
import Instagram from "../SVG/Instagram";
import Twitter from "../SVG/Twitter";
import Twitch from "../SVG/Twitch";
import Youtube from "../SVG/Youtube";
import TikTok from "../SVG/TikTok";
import SVGWrapper from "../SVG/SVGWrapper";
import NavBar from "../Navigation/NavBar";

function Contact() {
  return (
    <div className="flex flex-col md:min-h-screen">
      {/* Full-width NavBar */}
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full pt-10 px-4 animate-fade-in-up">
        <div className="w-full max-w-xl flex flex-col gap-4 md:ml-44">
          <div className="border-solid border-2 border-zinc-50 p-1">
            <div className="text-center bg-zinc-50 uppercase">
              <h1 className="text-4xl font-semibold uppercase">Contact Me</h1>
            </div>
          </div>

          {/* Socials Section */}
          <div className="p-2 bg-zinc-50 flex flex-col justify-center gap-4 text-center">
            <h2 className="text-2xl uppercase">Socials</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="https://www.instagram.com/khyron.iii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGWrapper>
                  <Instagram />
                </SVGWrapper>
              </a>
              <a
                href="https://mobile.twitter.com/yoh_khy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGWrapper>
                  <Twitter />
                </SVGWrapper>
              </a>
              <a
                href="https://m.twitch.tv/yoh_khy/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGWrapper>
                  <Twitch />
                </SVGWrapper>
              </a>
              <a
                href="https://youtube.com/channel/UCAjtTiErkuflsEZbAS8rXQw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGWrapper>
                  <Youtube />
                </SVGWrapper>
              </a>
              <a
                href="https://vm.tiktok.com/TTPdh7ohPP/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGWrapper>
                  <TikTok />
                </SVGWrapper>
              </a>
            </div>
          </div>

          {/* E-Mail Section */}
          <div className="bg-zinc-50 flex flex-col text-center">
            <h2 className="p-2 text-2xl uppercase">E-Mail</h2>
            <div className="flex flex-col gap-4 p-4">
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
