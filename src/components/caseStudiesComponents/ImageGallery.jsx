import { IMG_URL } from "@/config/constant";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const ImageGallery = ({ data }) => {
  // We use the "After" images as the primary length driver
  const beforeImages = data?.before_images || [];
  const afterImages = data?.after_images || [];

  // Helper to get grid classes for the pairs
  const getGridClass = (index) => {
    switch (index) {
      case 0:
        return "col-span-2 md:col-span-6 lg:col-span-6 h-[400px] md:h-[600px]";
      default:
        return "col-span-2 md:col-span-3 lg:col-span-3 h-[300px] md:h-[450px]";
    }
  };

  if (!data) return null;

  return (
    <div className="section-padding-x pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-[#8EBAE3] text-sm font-bold uppercase tracking-widest mb-2">
            Comparison Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Before <span className="text-[#8EBAE3]">&</span> After
          </h1>
        </div>
        <p className="max-w-md text-gray-500 font-medium italic">
          Left side: Original State | Right side: Completed Transformation
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10">
        {afterImages.map((afterItem, index) => {
          const beforeItem = beforeImages[index]; // Match by index

          return (
            <div
              key={afterItem.id}
              className={`relative flex flex-row gap-1 md:gap-2 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-gray-50 p-1 md:p-2 border border-gray-100 shadow-sm ${getGridClass(index)}`}
            >
              {/* BEFORE SIDE (Left) */}
              <div className="relative w-1/2 h-full overflow-hidden rounded-l-[1rem] md:rounded-l-[2rem] group">
                {beforeItem ? (
                  <img
                    src={IMG_URL + beforeItem.image}
                    alt="Before"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">N/A</div>
                )}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Before
                </div>
              </div>

              {/* AFTER SIDE (Right) */}
              <div className="relative w-1/2 h-full overflow-hidden rounded-r-[1rem] md:rounded-r-[2rem] group">
                <img
                  src={IMG_URL + afterItem.image}
                  alt="After"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#8EBAE3] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                  After
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Meta Data */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-16 border-t border-gray-100 pt-10 gap-8">
        <div className="flex flex-col items-start gap-1">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Location</span>
          <p className="text-lg font-bold text-gray-900">{data.location}</p>
        </div>

        <div className="flex gap-12 text-center border-x border-gray-100 px-12">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold mb-1">Area</p>
            <p className="font-bold text-xl">{data.square_feet} <span className="text-sm font-normal text-gray-500">sqft</span></p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold mb-1">Beds</p>
            <p className="font-bold text-xl">{data.bed_room}</p>
          </div>
        </div>

        <button className="flex flex-col items-end gap-1 group">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Next Project</span>
          <div className="flex items-center gap-3 text-lg font-bold text-gray-900 group-hover:text-[#8EBAE3] transition-colors">
            <span>View Case Study</span>
            <FaAngleRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;