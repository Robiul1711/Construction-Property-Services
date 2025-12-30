import React from "react";
import { ImageProvider } from "../common/ImageProvider";

const HomeBanner = () => {
  return (
    <div className="section-padding-x section-padding-y  relative min-h-screen w-full overflow-hidden bg-[#5895ca]">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover top-22"
        src={ImageProvider.homeBanner}
        alt="banner"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium text-white leading-tight max-w-5xl text-center mx-auto my-6 lg:my-8 pt-8 lg:pt-0">
        Building Better Spaces, From Concept to Completion
      </h1>

      {/* Content Overlay */}
      <div className="relative z-10 flex mt-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <p className="lg:text-lg text-white mb-6 mt-6 leading-relaxed max-w-lg">
            We believe every space has the potential to inspire. From the
            initial concept to the final touches, we bring your vision to life
            with precision, creativity, and care.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
            See More
          </button>
        </div>
      </div>

      {/* Bottom Shadow/Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

export default HomeBanner;
