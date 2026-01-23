import React from "react";
import { Bed, Bath, Ruler } from "lucide-react";
import caseBg from "@/assets/images/case.png";
import { IMG_URL } from "@/config/constant";

const CaseBanner = ({ data }) => {
  return (
    <section className="section-padding-x py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
        {/* Left Card */}
        <div className="border border-[#8EBAE3]/30 rounded-2xl px-6 py-6 w-full lg:w-auto lg:min-w-[320px] bg-white shadow-sm transition-all hover:shadow-md">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        {data?.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2 bg-[#8EBAE3]/10 px-4 py-2 rounded-full border border-[#8EBAE3]/20">
              <Bed size={18} className="text-[#8EBAE3]" />
              <span className="font-medium">{data?.bed_room}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#8EBAE3]/10 px-4 py-2 rounded-full border border-[#8EBAE3]/20">
              <Bath size={18} className="text-[#8EBAE3]" />
              <span className="font-medium">{data?.washroom}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#8EBAE3]/10 px-4 py-2 rounded-full border border-[#8EBAE3]/20">
              <Ruler size={18} className="text-[#8EBAE3]" />
              <span className="font-medium whitespace-nowrap">{data?.square_feet} sq ft</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.2] lg:leading-[1.3] mb-6" dangerouslySetInnerHTML={{__html:data?.description}}>
            
          </h2>

      <p className="text-gray-700 max-w-3xl">{data?.long_description}</p>
        </div>
      </div>

      <div className="mt-12 lg:mt-20 overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl h-[300px] lg:h-[500px]">
        <img
          src={IMG_URL + data?.after_images[0]?.image}
          alt="Case Study Background"
          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 "
        />
      </div>
    </section>
  );
};

export default CaseBanner;
