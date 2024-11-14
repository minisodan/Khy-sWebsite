import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./MasonryGrid.css";
import useReachedBottom from "../../Hooks/useReachedBottom.jsx";
import NavBar from "../Navigation/NavBar";

function MasonryGrid({ scrollValue }) {
  const breakpointColumnsObj = {
    default: 5,
    1100: 2,
    700: 1,
  };

  const reachBottom = useReachedBottom();

  const [images, setImages] = useState([]);
  const [currentImages, setCurrentImages] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    if (reachBottom && lastIndex <= images.length - 1) {
      let imagesSlice = [...images].slice(0, lastIndex + 20);
      console.log("imagesliced array:", imagesSlice);
      setCurrentImages(imagesSlice);
      setLastIndex(lastIndex + 20);
    }
  }, [reachBottom, images, lastIndex]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <NavBar />
      <div className="ml-0 md:ml-44 w-full">
        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {currentImages.map((image, index) => (
            <div key={index} className="masonry-item">
              <img src={image.url} alt={image.altText} className="w-full" />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default MasonryGrid;
