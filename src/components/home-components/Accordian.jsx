import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useApiQuery } from "@/hooks/apiQuery";

gsap.registerPlugin(ScrollTrigger);

const Accordian = ({ data }) => {

  const { data: faqData, isLoading } = useApiQuery({
    queryKey: ["faqs-data"], // Just the base key
    url: "/faqs-data",
  
  });


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
        {data?.faqs_title}
      </h2>

      <div className="flex gap-3 flex-col max-w-5xl mx-auto py-10">
        {faqData?.data?.map((according, index) => (
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
                {according.question}
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
                {according.answer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
