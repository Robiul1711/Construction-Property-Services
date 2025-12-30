import AboutBanner from "@/components/about-components/AboutBanner";
import DrivesUs from "@/components/about-components/DriveUs";
import ImageGallery from "@/components/about-components/ImageGallary";
import Leadership from "@/components/about-components/Leadership";
import Milestones from "@/components/about-components/Milestones";
import VisionReality from "@/components/about-components/VisionReality";
import ReadyProject from "@/components/home-components/ReadyProject";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
  return (
    <>
      <ScrollRestoration />
      <AboutBanner />
      <VisionReality />
      <ImageGallery />
      <Milestones />
      <DrivesUs />
      <Leadership />
      <ReadyProject />
    </>
  );
};

export default About;
