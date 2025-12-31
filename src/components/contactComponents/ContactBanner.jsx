import React from "react";
import banner from "@/assets/images/contactBg.png";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const ContactBanner = () => {
  return (
    <div className="relative group overflow-hidden">
      {/* Background Image */}
      <img
        src={banner}
        alt="Contact Banner"
        className="w-full h-[680px] object-cover 
        transition-transform duration-700 ease-out 
        group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full 
        bg-black/60 
        transition-opacity duration-500
        group-hover:bg-black/40"
      ></div>

      {/* Content */}
      <div
        className="absolute top-0 left-0 w-full h-full 
        flex flex-col justify-center items-center gap-6 text-white
        transition-all duration-500
        group-hover:translate-y-[-4px]"
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center
          transition-transform duration-500
          group-hover:scale-105"
        >
          Let's Start Your Project
        </h1>

        <p
          className="max-w-3xl mx-auto text-center text-white/90
          transition-opacity duration-500
          group-hover:opacity-100"
        >
          Ready to transform your property? Get in touch for a free consultation
          and let's discuss how we can help.
        </p>

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 text-white cursor-pointer
          transition-all duration-300
         group-hover:gap-3"
        >
          <FaHome className="text-2xl" />
          <FaAngleRight />
          <p className="text-lg font-medium">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
