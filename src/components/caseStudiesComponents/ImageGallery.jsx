import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// Assets (Assuming these paths are correct in your project)
import c1 from "@/assets/images/c1.png";
import c2 from "@/assets/images/c2.png";
import c3 from "@/assets/images/s2.png";
import c4 from "@/assets/images/c4.png";

const data = [
  { id: 1, title: "Before Construction", subtitle: "Raw site condition before excavation.", image: c1 },
  { id: 2, title: "After Construction", subtitle: "Completed reinforced concrete foundation.", image: c2 },
  { id: 3, title: "After Construction", subtitle: "Structural columns and beams erected.", image: c3 },
  { id: 4, title: "After Construction", subtitle: "Unfinished slab preparation stage.", image: c4 },
  { id: 5, title: "Before Construction", subtitle: "Initial slab casting phase using TMT steel.", image: c1 },
  { id: 6, title: "After Construction", subtitle: "Pre-finishing stage before plastering.", image: c2 },
  { id: 7, title: "After Construction", subtitle: "Early structural phase showing walls.", image: c3 },
];

const ImageGallery = () => {
  // We process the data to include the classes once to keep the JSX clean
  const processedGallery = data.map((item, index) => {
    let customClass = "md:col-span-2"; // Default

    // Logic for specific grid spans
    if (index === 0 || index === 2) {
      customClass = "md:col-span-2 md:row-span-2 h-[400px] md:h-full";
    } else if (index === 1 || index === 3) {
      customClass = "md:col-span-2 lg:row-span-1 h-[200px] md:h-[300px]";
    } else if (index === data.length - 1) {
      // Last item special style
      customClass = "col-span-2 md:col-span-2 row-span-1 h-[150px] sm:h-[220px] md:h-[300px]";
    } else {
      customClass = "md:col-span-2 h-[250px] md:h-[300px]";
    }

    return { ...item, customClass };
  });

  return (
    <div className="section-padding-x pb-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Galleries</h1>
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4">
        {processedGallery.map((item) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${item.customClass}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm sm:text-lg font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 mt-4">
        {processedGallery.map((item) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${item.customClass}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm sm:text-lg font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Navigation Footer */}
      <div className="flex items-center justify-between mt-10 border-t border-gray-100 pt-6">
        <button className="flex items-center gap-2 font-semibold text-gray-600 hover:text-blue-600 duration-300 group">
          <FaAngleLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Florida Project</span>
        </button>
        
        <button className="flex items-center gap-2 font-semibold text-gray-600 hover:text-blue-600 duration-300 group">
          <span>Kitchen Renovation</span>
          <FaAngleRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;