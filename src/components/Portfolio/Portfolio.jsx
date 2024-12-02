import Masonry from "react-masonry-css";
import NavBar from "../Navigation/NavBar";
import ImageCarousel from "./Carousel";
import Filter from "./Filter"; // Import the Filter component
import { useState, useRef, useEffect, useCallback } from "react";
import Fuse from "fuse.js";

const FULL_METADATA = require("./search.json");

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
  const [currentFilter, setCurrentFilter] = useState({
    categories: [],
    country: "",
    fromDate: "",
    toDate: "",
    people: "",
    state: "",
  });
  const [metadata, setMetadata] = useState(FULL_METADATA);

  const searchBarRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const fuse = new Fuse(FULL_METADATA, {
    ignoreLocation: true,
    threshold: 0.4,
    keys: ["description"],
  });

  const filterImages = useCallback(
    (filter, search) => {
      const searchFilter = filter ?? currentFilter;
      const searchString = search ?? searchText;

      setCurrentFilter(searchFilter);

      let searchFilteredMetadata =
        searchString !== ""
          ? fuse.search(search ?? searchText).map((it) => it.item)
          : FULL_METADATA;

      setMetadata(
        searchFilteredMetadata.filter((image) => {
          const filterByPeople = () =>
            searchFilter.people
              ? image.people === Number(searchFilter.people)
              : true;

          const filterByCategory = () =>
            searchFilter.categories.length !== 0
              ? searchFilter.categories.some((category) =>
                  image.categories.includes(category)
                )
              : true;

          const filterByLocation = () =>
            searchFilter.state
              ? image.location.state === searchFilter.state
              : true && searchFilter.country
              ? image.location.country === searchFilter.country
              : true;

          let filterFromDate = searchFilter.fromDate
            ? new Date(searchFilter.fromDate)
            : new Date("01/01/1900");
          let filterToDate = searchFilter.toDate
            ? new Date(searchFilter.toDate)
            : new Date();
          let imageDate = new Date(image.date);

          const filterByDate = () =>
            imageDate >= filterFromDate && imageDate <= filterToDate;

          return (
            filterByPeople() &&
            filterByCategory() &&
            filterByLocation() &&
            filterByDate()
          );
        })
      );
    },
    [currentFilter, searchText, fuse]
  );

  const resetImages = useCallback(() => {
    filterImages(
      {
        categories: [],
        country: "",
        fromDate: "",
        toDate: "",
        people: "",
        state: "",
      },
      undefined
    );
  }, [filterImages]);

  useEffect(() => {
    if (searchBarRef.current) {
      setFilterWidth(searchBarRef.current.offsetWidth);
    }
  }, [filterOpen]);

  const openCarousel = (index) => {
    setCarouselOpen(true);
    setCarouselImage(index);
  };

  const closeCarousel = useCallback(() => {
    setCarouselOpen(false);
  }, []);

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
            value={searchText}
            className="border-2 border-gray-200 w-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-800"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
              filterImages(undefined, e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSearchText("");
              filterImages(undefined, "");
            }} // Toggle the filter pop-out
            className="border-slate-800 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
          >
            X
          </button>
          {filterOpen && (
            <Filter
              filter={currentFilter}
              width={filterWidth}
              onFilterConfirm={(filter) => {
                filterImages(filter, undefined);
                setFilterOpen(false);
              }}
              onResetConfirm={() => {
                resetImages();
                setFilterOpen(false);
              }}
            />
          )}{" "}
          {/* Pass the width to the Filter component */}
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
