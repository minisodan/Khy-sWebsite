import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./MasonryGrid.css";
import useReachedBottom from "../../Hooks/useReachedBottom.jsx";
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
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {currentImages}
      <div>
        <small> © 2022 Khyron Site by Mason Myles</small>
      </div>
    </Masonry>
  );
}

export default MasonryGrid;
