import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Accordian = () => {
  const accordingData = [
    {
      title: "1. How long does a typical renovation project take?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "2. How do you handle project timelines?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "3. Can timelines change during the project?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },
    {
      title: "4. How do you ensure projects are completed on time?",
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },
    {
      title: "5. Do you offer faster project options?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [isPlusAccording, setIsPlusAccording] = useState(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  const handleBorderClick = (index) =>
    setIsPlusAccording((prev) => (prev === index ? null : index));

  // 🔥 Scroll reveal animation
  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from([titleRef.current, itemsRef.current], {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <div ref={sectionRef} className="section-padding-x py-6 lg:py-12">
      <h2
        ref={titleRef}
        className="text-4xl lg:text-5xl font-medium mb-4 text-center"
      >
        Frequently Asked Questions
      </h2>

      <div className="flex gap-3 flex-col max-w-5xl mx-auto py-10">
        {accordingData.map((according, index) => (
          <article
            ref={(el) => (itemsRef.current[index] = el)}
            key={index}
            className="border dark:border-slate-700 border-[#e5eaf2] rounded p-3"
          >
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleBorderClick(index)}
            >
              <h2 className="text-[#131313] font-[500] text-[1.1rem] lg:text-[1.3rem]">
                {according.title}
              </h2>
              <FaPlus
                className={`text-[1rem] lg:text-[1.3rem] transition-all duration-300 ${
                  isPlusAccording === index && "rotate-[45deg] !text-[#131313]"
                }`}
              />
            </div>

            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isPlusAccording === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                {according.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
