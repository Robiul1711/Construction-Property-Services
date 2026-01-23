import ReadyProject from "@/components/home-components/ReadyProject";
import ProjectBanner from "@/components/portfolioComponents/ProjectBanner";
import ProjectShowcase from "@/components/portfolioComponents/ProjectShowcase";
import { useApiQuery } from "@/hooks/apiQuery";
import React from "react";

const Portfolio = () => {
  const { data, isLoading } = useApiQuery({
    queryKey: ["portfolio-data"], // Just the base key
    url: "/portfolio-data",
  });
  return (
    <div>
      <ProjectBanner data={data?.data} />
      <ProjectShowcase data={data?.data} />
      <ReadyProject />
    </div>
  );
};

export default Portfolio;
