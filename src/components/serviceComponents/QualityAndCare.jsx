import React from "react";
import q from "../../assets/images/q.png";

const QualityAndCare = () => {
  return (
    <div className="section-padding-x section-padding-y">
      <div className="relative">
        <img
          src={q}
          alt="Quality and care"
          className="w-full h-auto object-cover"
        />

        {/* Text Overlay */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            sm:items-start
            px-4 sm:px-8
            pt-10 sm:pt-20 lg:pt-32
          "
        >
          <div className="max-w-[1000px]">
            <h1
              className="
                text-lg
                sm:text-2xl
                md:text-4xl
                lg:text-5xl
                font-marcellus
                text-white
                leading-snug
                lg:mt-6
              "
            >
              “At Sani Construction, we turn your vision into a well-crafted
              home built with purpose, quality, and care.”
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAndCare;
