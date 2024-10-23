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
    <div class="flex flex-row bg-contact-image bg-no-repeat bg-cover bg-center">
      <NavBar />
      <div class="w-full align-middle h-screen items-center animate-fade-in-up flex justify-center pt-10">
        <div class="w-96 flex flex-col gap-2">
          <div class="text-center bg-zinc-50 uppercase">
            <h1 class="text-4xl font-semibold uppercase">contact me</h1>
          </div>
          <div class="p-2 bg-zinc-50 flex flex-col justify-center gap-2 text-center">
            <h2 class="text-2xl uppercase">Socials</h2>
            <div class="flex flex-row gap-5 justify-center">
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
          <div class="bg-zinc-50 flex flex-col text-center">
            <h2 class="p-2 text-2xl uppercase">E-Mail</h2>
            <div class="flex flex-row gap-2 align-middle p-2">
              <input
                class="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
                id="inline-full-name"
                type="text"
                placeholder="E-Mail"
              />
            </div>
            <div class="flex flex-row gap-2 align-middle p-2">
              <input
                class="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
                id="inline-full-name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="flex flex-row gap-2 align-middle p-2">
              <input
                class="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
                id="inline-full-name"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div class="flex flex-row gap-2 align-middle p-2 h-40">
              <textarea
                class="resize-none border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
                id="inline-full-name"
                type="text"
                placeholder="Message"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Contact;
