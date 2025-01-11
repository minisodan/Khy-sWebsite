import Masonry from "react-masonry-css";
import NavBar from "../Navigation/NavBar";
import ImageCarousel from "./Carousel";
import Filter from "./Filter"; // Import the Filter component
import { useState, useRef, useEffect, useCallback } from "react";
import Fuse from "fuse.js";
import Footer from "../Navigation/Footer";
import { useHotkeys } from "react-hotkeys-hook";

const FULL_METADATA = require("./search.json");

const Portfolio = () => {
  // Define responsive column layout for Masonry grid base on pixels
  const breakpointColumnsObj = {
    default: 4,
    1920: 3,
    700: 2,
    500: 1,
  };

  // State to manage the carousel visibility and selected image index
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselImage, setCarouselImage] = useState(0);

  // State to manage the filter visibility and width
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterWidth, setFilterWidth] = useState(0);

  // State to track current filter settings
  const [currentFilter, setCurrentFilter] = useState({
    categories: [],
    country: "",
    fromDate: "",
    toDate: "",
    people: "",
    state: "",
  });

  // State to hold filtered metadata
  const [metadata, setMetadata] = useState(FULL_METADATA);

  // Ref for the search input element to measure width dynamically
  const searchBarRef = useRef(null);
  const [searchText, setSearchText] = useState("");

  // Initialize Fuse.js for search functionality
  const fuse = new Fuse(FULL_METADATA, {
    ignoreLocation: true,
    threshold: 0.4,
    keys: ["description"],
  });

  // Function to filter images based on the current filter and search text
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

  // Function to reset the images to the initial state
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

  // Effect to set the filter width when the filter visibility changes
  useEffect(() => {
    if (searchBarRef.current) {
      setFilterWidth(searchBarRef.current.offsetWidth);
    }
  }, [filterOpen]);

  // Open the carousel with the selected image index
  const openCarousel = (index) => {
    setCarouselOpen(true);
    setCarouselImage(index);
  };

  // Close the carousel
  const closeCarousel = useCallback(() => {
    setCarouselOpen(false);
  }, []);

  // Toggle the visibility of the filter component
  const toggleFilter = () => {
    setFilterOpen((prev) => !prev);
  };

  // Handle Escape key to close carousel or filter
  useHotkeys("esc", () => {
    // Close Carousel when the Escape key is pressed
    if (carouselOpen) closeCarousel();

    // Close Filter when the Escape key is pressed
    if (filterOpen) toggleFilter();
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Render the ImageCarousel if carouselOpen is true */}
      {carouselOpen && (
        <ImageCarousel
          imageMetadata={metadata}
          clickClose={closeCarousel}
          initialSlide={carouselImage}
        />
      )}

      {/* Navigation bar component */}
      <NavBar />

      <div className="ml-0 md:ml-44 w-full flex flex-col gap-2 p-3 animate-fade-in-up">
        <div className="flex p-1 border-2 relative">
          {/* Button to toggle the filter panel */}
          <button
            onClick={toggleFilter}
            className="border-slate-800 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
          >
            ≣
          </button>

          {/* Search bar input */}
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

          {/* Button to clear the search input */}
          <button
            onClick={() => {
              setSearchText("");
              filterImages(undefined, "");
            }}
            className="border-slate-800 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
          >
            X
          </button>

          {/* Render the Filter component if filterOpen is true */}
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
          )}
        </div>

        {/* Masonry grid to display images */}
        <div className="border-solid border-2 border-zinc-50 p-1">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-x-1.5 bg-slate-800"
            columnClassName="flex flex-col"
          >
            {metadata.map((entry, index) => (
              <div key={index} className="overflow-hidden group">
                <button onClick={() => openCarousel(index)}>
                  <img
                    src={`Images/search/${entry.name}`}
                    alt={entry.description}
                    className="w-full h-400 transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              </div>
            ))}
          </Masonry>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
