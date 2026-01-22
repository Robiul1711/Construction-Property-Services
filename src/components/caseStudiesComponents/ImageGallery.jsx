import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// Assets
import c1 from "@/assets/images/c1.png";
import c2 from "@/assets/images/c2.png";
import c3 from "@/assets/images/s2.png";
import c4 from "@/assets/images/c4.png";

const data = [
  {
    id: 1,
    title: "Before Construction",
    subtitle: "Raw site condition before excavation.",
    image: c1,
  },
  {
    id: 2,
    title: "Foundation Stage",
    subtitle: "Completed reinforced concrete foundation.",
    image: c2,
  },
  {
    id: 3,
    title: "Structural Phase",
    subtitle: "Structural columns and beams erected.",
    image: c3,
  },
  {
    id: 4,
    title: "Slab Preparation",
    subtitle: "Unfinished slab preparation stage.",
    image: c4,
  },
  {
    id: 5,
    title: "TMT Steel Work",
    subtitle: "Initial slab casting phase using TMT steel.",
    image: c1,
  },
  {
    id: 6,
    title: "Pre-Finishing",
    subtitle: "Pre-finishing stage before plastering.",
    image: c2,
  },
  {
    id: 7,
    title: "Wall Construction",
    subtitle: "Early structural phase showing walls.",
    image: c3,
  },
];

const ImageGallery = () => {
  const getGridClass = (index) => {
    switch (index) {
      case 0:
        return "col-span-2 md:col-span-4 lg:row-span-2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full";
      case 1:
        return "col-span-1 md:col-span-2 h-[200px] sm:h-[250px] lg:h-[300px]";
      case 2:
        return "col-span-1 md:col-span-2 h-[200px] sm:h-[250px] lg:h-[300px]";
      case 3:
        return "col-span-2 md:col-span-3 h-[250px] sm:h-[300px] lg:h-[350px]";
      case 4:
        return "col-span-2 md:col-span-3 h-[250px] sm:h-[300px] lg:h-[350px]";
      default:
        return "col-span-2 md:col-span-3 h-[250px] sm:h-[300px]";
    }
  };

  return (
    <div className="section-padding-x pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-[#8EBAE3] text-sm font-bold uppercase tracking-widest mb-2">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Project <span className="text-[#8EBAE3]">Galleries</span>
          </h1>
        </div>
        <p className="max-w-md text-gray-500 text-lg leading-relaxed">
          Witness the transformation from raw structures to architectural
          masterpieces through our detailed progress gallery.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-100 ${getGridClass(index)}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="inline-block px-3 py-1 bg-[#8EBAE3] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  Progress
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 font-medium line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Subtle inner border on hover */}
            <div className="absolute inset-4 border border-white/20 rounded-[1rem] md:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Pagination / Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-16 lg:mt-24 border-t border-gray-100 pt-10 gap-8">
        <button className="flex flex-col items-start gap-1 group w-full sm:w-auto">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">
            Previous Project
          </span>
          <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#8EBAE3] transition-colors">
            <FaAngleLeft className="group-hover:-translate-x-2 transition-transform duration-300" />
            <span>Florida Project</span>
          </div>
        </button>

        <div className="hidden lg:flex gap-2">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`w-2 h-2 rounded-full ${n === 2 ? "bg-[#8EBAE3]" : "bg-gray-200"}`}
            />
          ))}
        </div>

        <button className="flex flex-col items-end gap-1 group w-full sm:w-auto">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-bold text-right w-full">
            Next Project
          </span>
          <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#8EBAE3] transition-colors">
            <span>Kitchen Renovation</span>
            <FaAngleRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
