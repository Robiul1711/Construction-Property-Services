"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import s1 from "../../assets/images/s1.png";
import { cn } from "@/lib/utils";

const Construction = () => {
  const images = [
    { src: s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src: s1 , alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src: s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src: s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src: s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src:  s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src: s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src: s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
    { src: s1, alt: "Illustrations by my fav AarzooAly", code: "# 23" },
  ]

  return (
    <div className="section-padding-x ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">Construction & Property Services</h1>
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
        <div className="flex w-full items-center  gap-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={{ width: "2.5rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? "28rem" : "10rem",
                height: "24rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
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
                    className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                  >
                    <p className="text-left text-xs text-white/50">
                      {image.code}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
