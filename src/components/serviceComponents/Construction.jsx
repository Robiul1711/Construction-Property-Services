/* eslint-disable no-unused-vars */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import s2 from "../../assets/images/portfolio1.png";
import s3 from "../../assets/images/portfolio2.png";
import s4 from "../../assets/images/portfolio3.png";
import s5 from "../../assets/images/portfolio4.png";
import s6 from "../../assets/images/portfolio5.png";
import { cn } from "@/lib/utils";
import { FaArrowRightLong } from "react-icons/fa6";
import { IMG_URL } from "@/config/constant";
const Construction = ({ data }) => {
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
        Construction & Property Services
      </h1>
      <HoverExpand_001 data={data} />
    </div>
  );
};

export default Construction;

const HoverExpand_001 = ({ data, className }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div
          className={cn(
            "flex w-full gap-3",
            isMobile ? "flex-col" : "flex-row items-center",
          )}
        >
          {data?.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl group"
              initial={
                isMobile
                  ? { height: "4rem", width: "100%" }
                  : { width: "10rem", height: "24rem" }
              }
              animate={
                isMobile
                  ? {
                      height: activeImage === index ? "22rem" : "4rem",
                      width: "100%",
                    }
                  : {
                      width: activeImage === index ? "45rem" : "12rem",
                      height: "30rem",
                    }
              }
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => !isMobile && setActiveImage(index)}
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
                    className=" absolute p-4 flex flex-col gap-2 items-start bottom-4 left-4 max-w-[90%]"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                      {image.title}
                    </p>

                    <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                      {image.short_desc}
                    </p>

                    <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-black font-medium text-xs sm:text-sm">
                      See projects
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <img
                src={IMG_URL + image.image}
                alt={image.title}
                className="size-full object-cover"
              />

              <div
                className={cn(
                  "p-2 rounded-full bg-white absolute flex items-center justify-center duration-300",
                  isMobile
                    ? "bottom-2 right-2 scale-75"
                    : "-bottom-2 -right-2 group-hover:bottom-2 group-hover:right-2",
                )}
              >
                <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-black group-hover:bg-theme-primary group-hover:text-black duration-300 text-white rounded-full flex items-center justify-center">
                  <FaArrowRightLong className="text-xl sm:text-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#E3F1FF] rounded-2xl sm:rounded-full px-4 sm:px-6 py-4 sm:py-3 mt-12">
        {/* Left: Avatars + Text */}
        <div className="flex items-center gap-3">
          {/* Avatars */}
          <div className="flex -space-x-2">
            <img
              src="https://png.pngtree.com/png-clipart/20241125/original/pngtree-cartoon-user-avatar-vector-png-image_17295195.png"
              alt="avatar"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://thumbs.dreamstime.com/b/student-avatar-illustration-user-profile-icon-youth-avatar-student-avatar-illustration-simple-cartoon-user-portrait-user-profile-276205531.jpg"
              alt="avatar"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://png.pngtree.com/png-clipart/20241125/original/pngtree-cartoon-user-avatar-vector-png-image_17295195.png"
              alt="avatar"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
            />
          </div>

          {/* Text */}
          <p className="text-xs sm:text-sm font-medium text-gray-900 text-center sm:text-left">
            Work With Experienced Professionals
          </p>
        </div>

        {/* Right Button */}
        <button
          className="
      bg-black
      text-white
      text-xs sm:text-sm
      font-medium
      px-4 sm:px-5
      py-2
      rounded-full
      hover:bg-gray-800
      transition
      whitespace-nowrap
    "
        >
          Book a consultation
        </button>
      </div>
    </motion.div>
  );
};
