"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/portfolio1.png";
import s3 from "../../assets/images/portfolio2.png";
import s4 from "../../assets/images/portfolio3.png";
import s5 from "../../assets/images/portfolio4.png";
import s6 from "../../assets/images/portfolio5.png";
import { cn } from "@/lib/utils";
import { FaArrowRightLong } from "react-icons/fa6";
const Construction = () => {
  const images = [
    {
      src: s5,
      alt: "Illustrations by my fav AarzooAly",
      title: "Custom Home Building",
      subTitle:
        "Homes designed and built to match your lifestyle and needs. We handle everything from planning to construction, ensuring quality craftsmanship, smart layouts, and lasting value.",
      link: "",
    },
    {
      src: s2,
      alt: "Illustrations by my fav AarzooAly",
      title: "Custom Home Building",
      subTitle:
        "Homes designed and built to match your lifestyle and needs. We handle everything from planning to construction, ensuring quality craftsmanship, smart layouts, and lasting value.",
      link: "",
    },
    {
      src: s3,
      alt: "Illustrations by my fav AarzooAly",
      title: "Custom Home Building",
      subTitle:
        "Homes designed and built to match your lifestyle and needs. We handle everything from planning to construction, ensuring quality craftsmanship, smart layouts, and lasting value.",
      link: "",
    },
    {
      src: s4,
      alt: "Illustrations by my fav AarzooAly",
      title: "Custom Home Building",
      subTitle:
        "Homes designed and built to match your lifestyle and needs. We handle everything from planning to construction, ensuring quality craftsmanship, smart layouts, and lasting value.",
      link: "",
    },
    {
      src: s5,
      alt: "Illustrations by my fav AarzooAly",
      title: "Custom Home Building",
      subTitle:
        "Homes designed and built to match your lifestyle and needs. We handle everything from planning to construction, ensuring quality craftsmanship, smart layouts, and lasting value.",
      link: "",
    },
    {
      src: s6,
      alt: "Illustrations by my fav AarzooAly",
      title: "Custom Home Building",
      subTitle:
        "Homes designed and built to match your lifestyle and needs. We handle everything from planning to construction, ensuring quality craftsmanship, smart layouts, and lasting value.",
      link: "",
    },

  ];

  return (
    <div className="section-padding-x ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">
        Construction & Property Services
      </h1>
      <HoverExpand_001 images={images} />
    </div>
  );
};

export default Construction;

const HoverExpand_001 = ({ images, className }) => {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center  gap-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl group"
              initial={{ width: "2.5rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? "50rem" : "10rem",
                height: "24rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute p-4 flex flex-col gap-2 items-start bottom-4 left-4"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {image.title}
                    </p>
                    <p className="  text-white">{image.subTitle}</p>
                    <button className="px-4 py-2 rounded-full bg-white text-black font-medium ">
                    See projects
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

                <img
                    src={image.src}
                    alt={image.alt}
                    className="size-full object-cover"
                />
                <div className="p-2 rounded-full bg-white absolute -bottom-2 -right-2 flex items-center justify-center ">
                <div className="w-[50px] h-[50px] bg-black group-hover:bg-theme-primary group-hover:text-black duration-300 text-white rounded-full  flex items-center justify-center"><FaArrowRightLong className="text-2xl"/></div>

                </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
       
      <div className="flex items-center justify-between bg-[#E3F1FF] rounded-full px-4 py-3 mt-12">
        
        {/* Left: Avatars + Text */}
        <div className="flex items-center gap-3">
          {/* Avatars */}
          <div className="flex -space-x-2">
            <img
              src="https://png.pngtree.com/png-clipart/20241125/original/pngtree-cartoon-user-avatar-vector-png-image_17295195.png"
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://thumbs.dreamstime.com/b/student-avatar-illustration-user-profile-icon-youth-avatar-student-avatar-illustration-simple-cartoon-user-portrait-user-profile-276205531.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://png.pngtree.com/png-clipart/20241125/original/pngtree-cartoon-user-avatar-vector-png-image_17295195.png"
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          </div>

          {/* Text */}
          <p className="text-sm font-medium text-gray-900">
            Work With Experienced Professionals
          </p>
        </div>

        {/* Right Button */}
        <button className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition">
          Book a consultation
        </button>
      </div>

    </motion.div>
  );
};
