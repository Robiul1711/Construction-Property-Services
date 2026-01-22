import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useApiQuery } from "@/hooks/apiQuery";

gsap.registerPlugin(ScrollTrigger);

const Milestones = () => {
  
const { data, isLoading } = useApiQuery({
  queryKey: ["about-journey"], // Just the base key
  url: "/about-journey",

});


  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

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

    // Timeline items animation
    gsap.from(itemsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  });

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8EBAE3]"></span>
          <span className="text-[#8EBAE3] font-medium text-sm tracking-wide uppercase">
            Our Journey
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#111827]">
          Milestones Along The Way
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto space-y-4">
        {data?.data?.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="flex items-start gap-8 md:gap-12"
          >
            <div className="flex flex-col items-center flex-shrink-0 mt-4">
              <div className="w-[80px] h-[40px] bg-[#8EBAE3] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                {item.year}
              </div>
              {index !== data?.data?.length - 1 && (
                <span className="w-[2px] h-12 bg-gray-200 mt-4"></span>
              )}
            </div>

            {/* Milestone Card */}
            <div className="flex-grow">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-500 text-base md:text-lg">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
