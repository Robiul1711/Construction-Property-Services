import ReadyProject from "@/components/home-components/ReadyProject";
import Construction from "@/components/serviceComponents/Construction";
import QualityAndCare from "@/components/serviceComponents/QualityAndCare";
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import { useApiQuery } from "@/hooks/apiQuery";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Services = () => {
      const { data, isLoading } = useApiQuery({
      queryKey: ["service-data"], // Just the base key
      url: "/service-data",
    
    });
  return (
    <>
      <ScrollRestoration />
      <ServiceBanner />
      <Construction data={data?.data} />
      <QualityAndCare />
      <ReadyProject />
    </>
  );
};

export default Services;
