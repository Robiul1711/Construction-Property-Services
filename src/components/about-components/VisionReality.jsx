import React, { useState } from "react";
import video from "../../assets/images/video.mp4";

const VisionReality = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="section-padding-x bg-white py-8 lg:py-16 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
      {/* Left Side: Video/Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <div
          onClick={() => !playVideo && setPlayVideo(true)}
          className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
        >
          {!playVideo ? (
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
              alt="Modern House Vision"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          ) : (
            <video
              src={video}
              autoPlay
              controls
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          )}
          {!playVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-400/90 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="absolute -inset-4 border-[12px] border-gray-100 -z-10 rounded-[40px] hidden md:block"></div>
      </div>

      {/* Right Side: Text Content Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          <span className="text-gray-500 font-medium text-sm tracking-wide uppercase">
            About Us
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          From Vision To Reality
        </h2>

        <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
          <p>
            PrimeProperty was founded in 2005 with a simple mission: to
            revolutionize property management and construction by combining
            industry expertise with genuine care for our clients' success.
          </p>
          <p>
            What started as a small property management firm in New York has
            grown into a full-service company managing over $150 million in real
            estate assets. Our growth has been driven by one thing: delivering
            exceptional results that exceed our clients' expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionReality;
