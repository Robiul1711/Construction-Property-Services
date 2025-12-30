import React from "react";
import { Bed, Bath, Ruler } from "lucide-react";
import caseBg from "@/assets/images/case.png";
const CaseBanner = () => {
  return (
    <section className="section-padding-x section-padding-y ">
    <div className=" flex items-center gap-10 ">
      
      {/* Left Card */}
      <div className="border border-blue-300 rounded-xl px-5 py-4 min-w-[280px]">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">Kings Down</h3>

        <div className="flex items-center gap-4 text-lg text-gray-600">
          <div className="flex items-center gap-2 bg-theme-primary px-3 rounded-full">
            <Bed size={16} className=""/>
            <span>8</span>
          </div>
          <div className="flex items-center gap-2 bg-theme-primary px-3 rounded-full">
            <Bath size={16} className=""/>
            <span>8</span>
          </div>
          <div className="flex items-center gap-2 bg-theme-primary px-3 rounded-full">
            <Ruler size={16} className=""/>
            <span>66678 ft²</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl  md:text-3xl lg:text-4xl  font-semibold text-gray-900">
          Custom Home for{" "}
          <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md  font-semibold">
            Sale
          </span>{" "}
          - Be ready to fall in love with this gorgeous modern house: 2 story,
          3 car garage home on basement. 5 bedrooms, 5.5 bathrooms
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 ">
          – Designed by architect{" "}
          <span className="italic text-gray-600">Carlos Perez</span>
        </p>
      </div>
    </div>
<img src={caseBg} alt="" className="mt-12 sm:mt-20" />
    </section>
  );
};

export default CaseBanner;
