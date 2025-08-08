

import React, { useState } from "react";
import { FaExchangeAlt, FaHeart, FaShoppingCart } from "react-icons/fa";

const FloatingIcons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonBaseClasses =
    "h-12 flex items-center justify-center px-4 uppercase text-sm transition-all duration-300";

  return (
    <div className="fixed right-0 top-1/2 flex flex-col items-end gap-[1px] transform -translate-y-1/2 z-50 font-sans">
      {/* Buy Theme */}
      <div
        className="flex items-center"
        onMouseEnter={() => setHoveredButton("buy")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === "buy" && (
          <button
            className={`${buttonBaseClasses} bg-[#191970] text-white shadow`}
          >
            Buy Theme
          </button>
        )}
        <div
          className="w-12 h-12 flex items-center justify-center text-white text-lg bg-[#242424] cursor-pointer transition-all duration-300"
        >
          <FaExchangeAlt />
        </div>
      </div>

      {/* Our Bestsellers */}
      <div
        className="flex items-center"
        onMouseEnter={() => setHoveredButton("bestsellers")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === "bestsellers" && (
          <button
            className={`${buttonBaseClasses} bg-[#191970] text-white shadow`}
          >
            Our Bestsellers
          </button>
        )}
        <div
          className="w-12 h-12 flex items-center justify-center text-white text-lg bg-[#242424] cursor-pointer transition-all duration-300"
        >
          <FaHeart />
        </div>
      </div>

      {/* Hide Panel */}
      <div className="flex items-center">
        {hoveredButton === "hide" && (
          <button
            className={`${buttonBaseClasses} bg-[#191970] text-white shadow`}
          >
            Hide Panel
          </button>
        )}
        <div
          className="w-12 h-12 flex items-center justify-center text-white text-lg bg-[#242424] cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredButton("hide")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;

