import React from "react";
import { ImageProvider } from "../common/ImageProvider";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const AboutBanner = () => {
  return (
    <div className="relative group overflow-hidden">
      {/* Background Image */}
      <img
        src={ImageProvider.about}
        alt="Contact Banner"
        className="
          w-full 
          h-[380px] sm:h-[460px] md:h-[520px] lg:h-[680px]
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute top-0 left-0 w-full h-full
          bg-black/60
          transition-opacity duration-500
          group-hover:bg-black/40
        "
      />

      {/* Content */}
      <div
        className="
          absolute inset-0
          flex flex-col justify-center items-center
          gap-4 sm:gap-5 md:gap-6
          px-4 sm:px-6
          text-white
          transition-all duration-500
          group-hover:-translate-y-1
        "
      >
        <h1
          className="
            text-2xl sm:text-3xl md:text-5xl lg:text-7xl
            font-semibold
            text-center
            leading-tight
            transition-transform duration-500
            group-hover:scale-105
          "
        >
          Building Trust, Transforming Properties
        </h1>

        <p
          className="
            max-w-xl sm:max-w-2xl lg:max-w-3xl
            mx-auto
            text-center
            text-sm sm:text-base md:text-lg
            text-white/90
            transition-opacity duration-500
            group-hover:opacity-100
          "
        >
          For over two decades, we've been the trusted partner for property
          owners and investors seeking excellence in property management and
          construction.
        </p>

        {/* Breadcrumb */}
        <div
          className="
            flex items-center gap-2
            text-white cursor-pointer
            transition-all duration-300
            group-hover:gap-3
          "
        >
          <FaHome className="text-lg sm:text-xl md:text-2xl" />
          <FaAngleRight />
          <p className="text-sm sm:text-base md:text-lg font-medium">
            About Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
