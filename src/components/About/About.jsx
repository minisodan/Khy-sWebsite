import NavBar from "../Navigation/NavBar";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col md:flex-row bg-about-image bg-no-repeat bg-cover bg-center">
      <NavBar />
      <div className="flex flex-col md:flex-row w-full animate-fade-in-up justify-center items-start p-6 gap-4">
        <div className="mt-auto mb-auto w-full md:w-1/3 bg-white p-6 mr-0 md:mr-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Bio</h2>
            <p className="text-gray-700 text-justify">
              Born in Killeen TX but raised in Northern Louisiana and now
              currently attending MNSU (Minnesota State University Mankato) for
              an Art BA Degree, Khyron's work is a reflection of his community,
              race, and upbringing. In May 2021, he bought his first DSLR Camera
              [Sony A7iii] and consistently uploads his photos on this website
              or his Instagram account [@khyron.iii]. Khy has an eye for
              capturing real in-the-moment pictures and strives to make the
              viewer's semblance connected to his work. He's had solo
              exhibitions in the main art gallery of MNSU titled “Human Xenon”
              in 2022 and another one downtown, Mankato, in an art space titled
              the “410 Project,” where he displayed his work titled “Fornever”
              within the same year.
            </p>
          </div>
          <Link to="/contact">
            <button className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300">
              Get in Touch with Me
            </button>
          </Link>
        </div>
        <div className="mt-auto mb-auto w-full lg:w-1/3 lg:h-1/2 md:w-1/3 md:h-auto">
          <img
            src={"Images/KHYRON35.jpeg"}
            alt="KHYRON.III"
            className="h-auto w-full object-cover md:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
