import React from "react";
import { Bed, Bath, Ruler } from "lucide-react";
import caseBg from "@/assets/images/case.png";

const CaseBanner = () => {
  return (
    <section className="section-padding-x py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
        {/* Left Card */}
        <div className="border border-[#8EBAE3]/30 rounded-2xl px-6 py-6 w-full lg:w-auto lg:min-w-[320px] bg-white shadow-sm transition-all hover:shadow-md">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Kings Down
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2 bg-[#8EBAE3]/10 px-4 py-2 rounded-full border border-[#8EBAE3]/20">
              <Bed size={18} className="text-[#8EBAE3]" />
              <span className="font-medium">8</span>
            </div>
            <div className="flex items-center gap-2 bg-[#8EBAE3]/10 px-4 py-2 rounded-full border border-[#8EBAE3]/20">
              <Bath size={18} className="text-[#8EBAE3]" />
              <span className="font-medium">8</span>
            </div>
            <div className="flex items-center gap-2 bg-[#8EBAE3]/10 px-4 py-2 rounded-full border border-[#8EBAE3]/20">
              <Ruler size={18} className="text-[#8EBAE3]" />
              <span className="font-medium whitespace-nowrap">66,678 ft²</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.2] lg:leading-[1.3] mb-6">
            Custom Home for{" "}
            <span className="inline-block bg-[#FBD24E] text-black px-3 py-1 rounded-lg font-bold transform -rotate-1 shadow-sm">
              Sale
            </span>{" "}
            - Be ready to fall in love with this gorgeous modern house.
          </h2>

          <div className="space-y-4">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
              2 story, 3 car garage home on basement. 5 bedrooms, 5.5 bathrooms
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-400">
              <span className="h-px w-8 bg-gray-200" />
              Designed by architect{" "}
              <span className="italic font-semibold text-gray-700">
                Carlos Perez
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-20 overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl">
        <img
          src={caseBg}
          alt="Case Study Background"
          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
        />
      </div>
    </section>
  );
};

export default CaseBanner;
