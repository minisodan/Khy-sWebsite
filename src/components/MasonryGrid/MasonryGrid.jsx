import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import MasonryEntry from "./MasonryEntry.jsx";
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

  useEffect(() => {
    fetch("/images")
      .then((response) => response.json())
      .then((images) => {
        const imageElements = images.map((image) => {
          const imageUrl = image.link;

          return <MasonryEntry imageUrl={imageUrl} />;
        });

        setImages(imageElements);
        setCurrentImages(imageElements.slice(0, lastIndex + 20));
        setLastIndex(lastIndex + 20);
      });
  }, []);

  // return (
  //   <div className="masonry-grid">
  //     {currentImages}
  //   </div>
  // )

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {currentImages}
    </Masonry>
  );
}

export default MasonryGrid;
