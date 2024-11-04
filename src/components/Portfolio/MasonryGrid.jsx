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

  useEffect(() => {
    if (reachBottom && lastIndex <= images.length - 1) {
      let imagesSlice = [...images].slice(0, lastIndex + 20);
      console.log("imagesliced array:", imagesSlice);
      setCurrentImages(imagesSlice);
      setLastIndex(lastIndex + 20);
    }
  }, [reachBottom]);

  const [images, setImages] = useState([]);
  const [currentImages, setCurrentImages] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);

  return (
    <div class="flex flex-row bg-contact-image bg-no-repeat bg-cover bg-center min-h-screen">
      <NavBar />
      <div class="ml-44">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {currentImages}
        </Masonry>
      </div>
    </div>
  );
}

export default MasonryGrid;
