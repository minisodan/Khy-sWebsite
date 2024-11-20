import Masonry from "react-masonry-css";
import NavBar from "../Navigation/NavBar";


const metadata = require("./search.json");

const Portfolio = () => { 
  
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 1,
  };

    return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <NavBar />

      <div className="ml-0 md:ml-44 w-full flex flex-col gap-2 p-3">
        <div className="flex p-1 border-2">
          <button className="border-slate-800 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300">
            ≣
          </button>
          <input
            className="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid bg-zinc-50"
            columnClassName="my-masonry-grid_column"
          >
            {metadata.map((entry, index) => (
              <div key={index}>
                <img src={`Images/search/${entry.name}`} alt={entry.description} className="w-full p-1" />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;