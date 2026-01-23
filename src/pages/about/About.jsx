import AboutBanner from "@/components/about-components/AboutBanner";
import DrivesUs from "@/components/about-components/DriveUs";
import ImageGallery from "@/components/about-components/ImageGallary";
import Leadership from "@/components/about-components/Leadership";
import Milestones from "@/components/about-components/Milestones";
import VisionReality from "@/components/about-components/VisionReality";
import ReadyProject from "@/components/home-components/ReadyProject";
import { useApiQuery } from "@/hooks/apiQuery";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
      const { data, isLoading } = useApiQuery({
        queryKey: ["about-page"], // Just the base key
        url: "/cms/about-us",
      
      });
  return (
    <>
      <ScrollRestoration  />
      <AboutBanner data={data?.data?.about_us}/>
      <VisionReality data={data?.data?.about_us} />
      <ImageGallery />
      <Milestones />
      <DrivesUs />
      <Leadership />
      <ReadyProject />
    </>
  );
};

export default About;
