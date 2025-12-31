import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TurnIdeas = () => {
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
          How We Turn Ideas Into Results
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          We follow a structured process to turn your ideas into high-quality
          results, ensuring transparency, efficiency, and attention to detail
          from consultation to final delivery.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative w-full min-h-[150px] z-10">
        {/* Planning */}
        <div
          ref={(el) => (stepsRef.current[0] = el)}
          className="relative lg:absolute lg:-top-60 lg:right-0 max-w-md mb-10 lg:mb-0"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">Planning</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-3">
            We carefully plan every detail from design and budgeting to
            timelines ensuring a smooth and efficient project execution.
          </p>
        </div>

        {/* Estimating */}
        <div
          ref={(el) => (stepsRef.current[1] = el)}
          className="relative lg:absolute space-y-4 lg:-top-24 lg:left-[40%] max-w-md mb-10 lg:mb-0"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">Estimating</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We provide accurate cost estimates and clear budgeting to help you
            plan confidently with no hidden surprises.
          </p>
        </div>

        {/* Building */}
        <div
          ref={(el) => (stepsRef.current[2] = el)}
          className="relative lg:absolute space-y-4 lg:-bottom-24 max-w-md"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">Building</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We bring plans to life with skilled construction, quality materials,
            and careful attention to every detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurnIdeas;
