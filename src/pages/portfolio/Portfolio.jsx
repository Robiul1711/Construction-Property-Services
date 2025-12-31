import ReadyProject from "@/components/home-components/ReadyProject";
import ProjectBanner from "@/components/portfolioComponents/ProjectBanner";
import ProjectShowcase from "@/components/portfolioComponents/ProjectShowcase";
import React from "react";

const Portfolio = () => {
  return (
    <div>
<ProjectBanner />
<ProjectShowcase />
<ReadyProject/>
    </div>
  );
};

export default Portfolio;
