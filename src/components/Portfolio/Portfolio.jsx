import Masonry from "react-masonry-css";
import NavBar from "../Navigation/NavBar";
import ImageCarousel from "./Carousel";
import Filter from "./Filter"; // Import the Filter component
import { useState, useRef, useEffect } from "react";

const metadata = require("./search.json");

const Portfolio = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2, // Show 2 columns for medium screens
    500: 1, // Show 1 column for small screens
  };

  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselImage, setCarouselImage] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false); // State for filter visibility
  const [filterWidth, setFilterWidth] = useState(0); // State for filter width

  const searchBarRef = useRef(null);

  useEffect(() => {
    if (searchBarRef.current) {
      setFilterWidth(searchBarRef.current.offsetWidth);
    }
  }, [filterOpen]);

  const openCarousel = (index) => {
    setCarouselOpen(true);
    setCarouselImage(index);
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
  };

  const toggleFilter = () => {
    setFilterOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {carouselOpen && (
        <ImageCarousel
          imageMetadata={metadata}
          clickClose={closeCarousel}
          initialSlide={carouselImage}
        />
      )}

      <NavBar />

      <div className="ml-0 md:ml-44 w-full flex flex-col gap-2 p-3 animate-fade-in-up">
        <div className="flex p-1 border-2 relative">
          <button
            onClick={toggleFilter} // Toggle the filter pop-out
            className="border-slate-800 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
          >
            ≣
          </button>
          <input
            ref={searchBarRef}
            className="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {filterOpen && <Filter width={filterWidth} />} {/* Pass the width to the Filter component */}
        </div>

        <div className="border-solid border-2 border-zinc-50 p-1">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-x-1.5 bg-slate-800"
            columnClassName="flex flex-col"
          >
            {metadata.map((entry, index) => (
              <div key={index}>
                <button onClick={() => openCarousel(index)}>
                  <img
                    src={`Images/search/${entry.name}`}
                    alt={entry.description}
                    className="w-full h-auto"
                  />
                </button>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
