import React from "react";
import { ImageProvider } from "../common/ImageProvider";

const ReadyProject = () => {
  return (
    <div className="section-padding-x relative min-h-[70vh] sm:min-h-screen w-full overflow-hidden bg-gradient-to-b from-transparent to-[#cad7e4] -mb-10 -z-30">
      <div>
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-cover"
          src={ImageProvider.ready}
          alt="banner"
        />

        {/* Bird Image (hidden on small screens only) */}
        <div className="absolute top-6 right-4 sm:right-6 lg:right-10 hidden lg:block">
          <img src={ImageProvider.bird} alt="bird" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex mt-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium my-4">
              Ready to Start Your Project?
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#131313] mb-6 mt-6 leading-relaxed max-w-lg">
              Whether you’re planning a renovation, new construction, or need
              reliable property management, our team is ready to help. Contact
              us today to discuss your ideas and let’s turn your vision into
              reality.
            </p>

            {/* CTA Button */}
            <button className="bg-[#131313] text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyProject;
