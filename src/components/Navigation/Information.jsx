import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Information() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="info-container relative">
      <button
        className="info-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon
          icon={faInfoCircle}
          size="lg"
          className={`info-icon text-black hidden md:block`}
        />
      </button>
      {isTooltipVisible && (
        <div className="absolute -top-24 left-full ml-4 w-48 p-4 bg-white text-black font-sans text-sm shadow-lg rounded-md z-10">
          <div className="font-bold mb-2 text-slate-800">
            Keyboard shortcuts:
          </div>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 text-slate-800">
              <span className="inline-block bg-slate-800 text-white font-bold py-1 px-2 mr-2 rounded text-xs min-w-[16px] text-center">
                Ctrl+1
              </span>
              Go to Portfolio
            </li>
            <li className="mb-2 text-slate-800">
              <span className="inline-block bg-slate-800 text-white font-bold py-1 px-2 mr-2 rounded text-xs min-w-[16px] text-center">
                Ctrl+2
              </span>
              Go to About
            </li>
            <li className="mb-2 text-slate-800">
              <span className="inline-block bg-slate-800 text-white font-bold py-1 px-2 mr-2 rounded text-xs min-w-[16px] text-center">
                Ctrl+3
              </span>
              Go to Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Information;
