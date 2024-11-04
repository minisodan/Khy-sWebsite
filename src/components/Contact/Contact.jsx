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
    <div className="flex flex-col md:flex-row bg-contact-image bg-no-repeat bg-cover bg-center h-screen min-h-screen">
      <NavBar />
      <div class="w-full align-middle h-screen items-center animate-fade-in-up flex justify-center pt-10 ml-44">
        <div class="min-w-96 w-8/12 max-w-2xl flex flex-col gap-2">
          <div class="text-center bg-zinc-50 uppercase">
            <h1 class="text-4xl font-semibold uppercase">contact me</h1>
          </div>
          <div class="p-2 bg-zinc-50 flex flex-col justify-center gap-2 text-center">
            <h2 class="text-2xl uppercase">Socials</h2>
            <div class="flex flex-row gap-5 justify-center">
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
