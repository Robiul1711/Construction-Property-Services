import React from "react";

const MovingBanner = () => {
  const text = "//// CONSTRUCTION IN PROGRESS ";
  const repeatedText = Array(12).fill(text).join("");

  return (
    <div className="w-full overflow-hidden font-sans font-bold uppercase tracking-wider text-sm pt-20 bg-[#494949]/40">
      
      {/* Black Row */}
      <div className="bg-black text-white py-2 whitespace-nowrap">
        <div className="flex animate-marquee">
          <span className="mr-8">{repeatedText}</span>
          <span className="mr-8">{repeatedText}</span>
        </div>
      </div>

      {/* Yellow Row */}
      <div className="bg-[#EAB308] text-black py-2 whitespace-nowrap">
        <div className="flex animate-marquee">
          <span className="mr-8">{repeatedText}</span>
          <span className="mr-8">{repeatedText}</span>
        </div>
      </div>

    </div>
  );
};

export default MovingBanner;
