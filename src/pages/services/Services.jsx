import ReadyProject from "@/components/home-components/ReadyProject";
import Construction from "@/components/serviceComponents/Construction";
import QualityAndCare from "@/components/serviceComponents/QualityAndCare";
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Services = () => {
  return (
    <>
      <ScrollRestoration />
      <ServiceBanner />
      <Construction />
      <QualityAndCare />
      <ReadyProject />
    </>
  );
};

export default Services;
