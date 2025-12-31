import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import AiAssistantCard from "../common/AiAssistantCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ModernResidential = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(
      [titleRef.current, descRef.current, statsRef.current, btnRef.current],
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div
      ref={sectionRef}
      className="section-padding-x section-padding-y relative bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Image */}
        <div className="w-full">
          <div className="rounded-3xl overflow-hidden shadow-lg relative">
            <img
              src={ImageProvider.modern}
              alt="Modern residential interior"
              className="w-full h-auto object-cover hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          {/* Heading */}
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight"
          >
            Shaping Modern Residential & Commercial Spaces
          </h2>

          {/* Description */}
          <p
            ref={descRef}
            className="text-sm sm:text-base text-gray-600 leading-relaxed"
          >
            We design modern residential and commercial spaces with a focus on
            quality, functionality, and detail. From planning to execution, we
            turn ideas into well-crafted environments that enhance both living
            and working experiences.
          </p>

          {/* Statistics */}
          <div ref={statsRef} className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
                340+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Successful Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
                64+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Team Members
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
                80+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Happy Client
              </p>
            </div>
          </div>

          {/* Button */}
          <div ref={btnRef} className="pt-4">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* AI Assistant Overlay */}
      <div className="absolute top-6 right-6 hidden md:block">
        <AiAssistantCard />
      </div>
    </div>
  );
};

export default ModernResidential;
