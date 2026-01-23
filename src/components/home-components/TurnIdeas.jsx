import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TurnIdeas = ({ data }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsRef = useRef([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Header animation
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Steps animation
    gsap.from(stepsRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  });

  return (
    <div
      ref={sectionRef}
      className="
        section-padding-x 
        py-12 lg:py-24 xl:py-44 
        relative my-6 text-white overflow-hidden
        bg-no-repeat bg-cover
        bg-center
        lg:bg-top 
      "
      style={{ backgroundImage: `url(${ImageProvider.turn})` }}
    >
      {/* Large background numbers */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <span className="absolute top-30 right-20 md:right-44 text-[100px] md:text-[160px] lg:text-[180px] font-bold text-gray-500">
          01
        </span>
        <span className="absolute top-1/3 right-[36%] text-[100px] md:text-[160px] lg:text-[180px] font-bold text-gray-500">
          02
        </span>
        <span className="absolute bottom-10 left-10 md:left-64 text-[100px] md:text-[160px] lg:text-[180px] font-bold text-gray-500">
          03
        </span>
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="mb-16 md:mb-24 max-w-lg relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">
          {data?.idea_into_title}
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {data?.idea_into_subtitle}
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative w-full min-h-[150px] z-10">
        {/* Planning */}
        <div
          ref={(el) => (stepsRef.current[0] = el)}
          className="relative lg:absolute lg:-top-60 lg:right-0 max-w-md mb-10 lg:mb-0"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">{data?.idea_1_title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-3">
       {data?.idea_1_content || "We collaborate closely to understand your vision, needs, and budget, ensuring every detail is tailored to your lifestyle."}
          </p>
        </div>

        {/* Estimating */}
        <div
          ref={(el) => (stepsRef.current[1] = el)}
          className="relative lg:absolute space-y-4 lg:-top-24 lg:left-[40%] max-w-md mb-10 lg:mb-0"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">{data?.idea_2_title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {data?.idea_2_content || "We provide transparent and detailed estimates, ensuring you have a clear understanding of costs and timelines before construction begins."}
          </p>
        </div>

        {/* Building */}
        <div
          ref={(el) => (stepsRef.current[2] = el)}
          className="relative lg:absolute space-y-4 lg:-bottom-24 max-w-md"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">{data?.idea_3_title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {data?.idea_3_content || "Our skilled craftsmen bring your vision to life with meticulous attention to detail, ensuring quality and excellence in every aspect of construction."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurnIdeas;
