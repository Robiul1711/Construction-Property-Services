import React from "react";
import { ArrowUpRight, BedDouble, Bath, Ruler } from "lucide-react";
import house from "@/assets/images/ps1.png"; // use your image
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const projects = Array(9).fill({
  title: "Kings Down",
  image: house,
  beds: 8,
  baths: 8,
  size: "66678 ft2",
});
const InfoBadge = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs text-gray-800 shadow">
      {icon}
      <span>{text}</span>
    </div>
  );
};
const ProjectShowcase = () => {
  return (
    <section className="section-padding-x section-padding-y">
                <h1 className='text-3xl lg:text-4xl xlg:text-5xl text-center font-semibold'>Project Showcase</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <Link to={`/case-studies/${project.title}`}
            key={index}
            className="relative rounded-2xl overflow-hidden bg-black group shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent" />

            {/* Title */}
            <h3 className="absolute top-4 left-4 text-white text-lg font-semibold">
              {project.title}
            </h3>

            {/* Arrow Button */}
            <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:scale-105 transition">
              <ArrowUpRight size={16} className="text-black" />
            </button>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
              <InfoBadge icon={<BedDouble size={14} />} text={project.beds} />
              <InfoBadge icon={<Bath size={14} />} text={project.baths} />
              <InfoBadge icon={<Ruler size={14} />} text={project.size} />
            </div>
          </Link>
        ))}
      </div>
       <div className="flex items-center justify-center mt-8 gap-3">
      
      {/* Left Button (Outlined) */}
      <button
        className="w-10 h-10 rounded-full border border-gray-400 
        flex items-center justify-center 
        hover:border-black hover:text-black 
        transition"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right Button (Filled) */}
      <button
        className="w-10 h-10 rounded-full bg-black text-white 
        flex items-center justify-center 
        hover:bg-gray-800 transition"
      >
        <ChevronRight size={18} />
      </button>

    </div>
    </section>
  );
};

export default ProjectShowcase;
