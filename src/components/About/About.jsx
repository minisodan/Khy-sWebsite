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
            Learn About Me
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
              Born in Killeen Texas 1999, but Louisiana raised, and is currently
              stationed in St. Paul, Minnesota. Khyron has Bachelor's BA in Art
              (MNSU) with a photography concentration. Khy has been doing
              photography since May 2021, He bought his first DSLR Camera [Sony
              A7iii] with inheritance funds from his late mother and
              consistently uploads his photos on this website or his Instagram
              account [@khyron.iii] Khy has an eye for capturing real "In the
              moment" pictures and strives to make the viewer feel like they are
              fully submerged in the photo; as if they've time traveled to the
              2D plain themselves. Most of his time is spent doing street
              photography, but really will shoot anything on his camera from
              nature to architecture to even studio photographs. Growing up in
              the south, he was always surrounded by things that seemed to never
              change, but subconsciously always surrounded by art that seemed to
              blossom from the heart and soul. He left the south to search for
              himself and boost his creativity by traveling to different states
              and countries to raise his creativity ceiling. Khy's interest in
              anime, movies, comics, etc of all kinds help form his direction
              when it comes to photography. He wants people not only to take
              these photos and reminisce with him, but he also wants people to
              be inspired and let the photos engulf them with memories or
              experiences of their own; whether it be from the past, future or
              present. He says "I want to show people memories they never knew
              they had"
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
