import React from "react";

const Milestones = () => {
  const milestoneData = [
    { year: "2005", text: "Prime Property founded in New York City" },
    { year: "2010", text: "Expanded to commercial property management" },
    { year: "2015", text: "Launched construction and renovation division" },
    { year: "2018", text: "Reached $100M in managed property value" },
    { year: "2023", text: "Celebrated 500+ completed projects" },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-16">
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
      <div className="max-w-4xl mx-auto">
        {milestoneData.map((item, index) => (
          <div key={index} className="flex items-start gap-8 md:gap-12">
            <div className="flex flex-col items-center flex-shrink-0 mt-4">
              <div className="w-[80px] h-[40px] bg-[#8EBAE3] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                {item.year}
              </div>
              {index !== milestoneData.length - 1 && (
                <span className="w-[2px] h-12 bg-gray-200 mt-4"></span>
              )}
            </div>

            {/* Milestone Card */}
            <div className="flex-grow">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-500 text-base md:text-lg">
                  {item.text}
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
