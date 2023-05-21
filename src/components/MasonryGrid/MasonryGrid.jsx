import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import MasonryEntry from "./MasonryEntry.jsx";
import "./MasonryGrid.css";

function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 5,
    1100: 2,
    700: 1,
  };
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images")
      .then((response) => response.json())
      .then((images) => {
        const imageElements = images.map((image) => {
          const imageUrl = image.link;

          return (
            <MasonryEntry imageUrl={imageUrl} />
            // <img
            //   className={`easeload ${loaded ? "load" : ""}`}
            //   onLoad={() => {
            //     setLoaded(true);
            //   }}
            //   src={imageUrl}
            //   alt="Images not loaded"
            // />
          );
        });
        setImages(imageElements);
      });
  }, []);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images}
    </Masonry>
  );
}

export default MasonryGrid;
