import React, { useState } from "react";

const MasonryEntry = ({ imageUrl }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      className={`easeload ${loaded ? "load" : ""}`}
      onLoad={() => {
        setLoaded(true);
      }}
      src={imageUrl}
      alt="Images not loaded"
    />
  );
};

export default MasonryEntry;
