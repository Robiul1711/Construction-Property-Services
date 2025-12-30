import ReadyProject from "@/components/home-components/ReadyProject";
import Construction from "@/components/serviceComponents/Construction";
import QualityAndCare from "@/components/serviceComponents/QualityAndCare";
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import React from "react";

const Services = () => {
  return (
    <div>
      <ServiceBanner />
     <Construction />
     <QualityAndCare />
     <ReadyProject />
    </div>
  );
};

export default Services;
