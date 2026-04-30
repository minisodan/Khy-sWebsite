import Masonry from "react-masonry-css";
import NavBar from "../Navigation/NavBar";
import ImageCarousel from "./Carousel";
import Filter from "./Filter";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Fuse from "fuse.js";
import Footer from "../Navigation/Footer";
import { useHotkeys } from "react-hotkeys-hook";

const FULL_METADATA = require("./search.json");

const Portfolio = () => {
  const breakpointColumnsObj = {
    default: 4,
    1920: 3,
    700: 2,
    500: 1,
  };

  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselImage, setCarouselImage] = useState(0);

  const [filterOpen, setFilterOpen] = useState(false);
  const [filterWidth, setFilterWidth] = useState(0);

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

  // ✅ FIXED: stable Fuse instance (no CI issues)
  const fuse = useMemo(() => {
    return new Fuse(FULL_METADATA, {
      ignoreLocation: true,
      threshold: 0.4,
      keys: ["description"],
    });
  }, []);

  // ✅ FIXED: safer location filter logic
  const filterImages = useCallback(
    (filter, search) => {
      const searchFilter = filter ?? currentFilter;
      const searchString = search ?? searchText;

      setCurrentFilter(searchFilter);

      const searchFilteredMetadata =
        searchString !== ""
          ? fuse.search(searchString).map((it) => it.item)
          : FULL_METADATA;

      setMetadata(
        searchFilteredMetadata.filter((image) => {
          const filterByPeople = () =>
            searchFilter.people
              ? image.people >= Number(searchFilter.people)
              : true;

          const filterByCategory = () =>
            searchFilter.categories.length !== 0
              ? searchFilter.categories.some((category) =>
                  image.categories.includes(category)
                )
              : true;

          const filterByLocation = () => {
            if (searchFilter.state) {
              return (
                image.location.state.toLowerCase() ===
                searchFilter.state.toLowerCase()
              );
            }

            if (searchFilter.country) {
              return (
                image.location.country.toLowerCase() ===
                searchFilter.country.toLowerCase()
              );
            }

            return true;
          };

          const filterFromDate = searchFilter.fromDate
            ? new Date(searchFilter.fromDate)
            : new Date("01/01/1900");

          const filterToDate = searchFilter.toDate
            ? new Date(searchFilter.toDate)
            : new Date();

          const imageDate = new Date(image.date);

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
      ""
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

  useHotkeys("esc", () => {
    if (carouselOpen) closeCarousel();
    if (filterOpen) toggleFilter();
  });

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
            onClick={toggleFilter}
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
            onChange={(e) => {
              setSearchText(e.target.value);
              filterImages(undefined, e.target.value);
            }}
          />

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

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;