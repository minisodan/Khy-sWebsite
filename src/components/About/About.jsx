import NavBar from "../Navigation/NavBar";
import { Link } from "react-router-dom";
import Footer from "../Navigation/Footer";

function About() {
  return (
    <div className="flex flex-col md:min-h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full">
        <div className="flex flex-col md:w-3/4 lg:w-2/3 p-6 gap-4 items-center w-full md:ml-44 animate-fade-in-up">
          <div className="border-solid border-2 border-zinc-50 p-1 w-full">
            <div className="text-center bg-zinc-50 uppercase">
            <h1 className="text-4xl font-semibold uppercase">
             KHYЯON
              </h1>
            </div>
          </div>

          <div className="w-full">
            <div className="border-solid border-2 border-zinc-50 p-1">
              <img
                src={"Images/khy20241.jpg"}
                alt="KHYRON.III"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="bg-white p-6 flex flex-col justify-between w-full border-solid border-2 border-zinc-50">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Bio</h2>
            <p className="text-gray-700 text-justify">
              Born in Killeen, Texas, 1999, Khyron has a Bachelor's BA in Art (MNSU) with a photography
              concentration. Khyron has been doing photography since 2021 and bought his first DSLR
              camera [Sony A7iii] with an inheritance fund from his late mother. He consistently uploads his
              photos on his website and Instagram account [@khyron.iii]. Khyron has an eye for capturing real
              "In the moment" pictures and strives to make the viewer feel like they are fully submerged in the
              photo; as if they've traveled to the 2D plane themselves. Most of his time is spent doing candid
              work, but has taken the challenge of capturing anything on his camera from landscape,
              architecture, nature, to even studio photographs. Growing up in the south, he was always
              surrounded by things that seemed to never change, but subconsciously always surrounded by
              art that seemed to blossom from the heart and soul. He left the south to search for himself and
              boost his creativity by traveling to different states and countries to raise his creative ceiling.
              Khyron’s interest in anime, video games, comics, etc, help form his direction when it comes to
              his art. He wants people; not only to take these photos and reminisce with him, but he also
              wants people to be inspired and let the photos engulf the viewer with memories or experiences
              of their own, whether it be from the past, future or present. He says "I want to show people
              memories they never knew they had."
            </p>
            <Link to="/contact">
              <button className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300">
                Get in Touch with Me
              </button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
