import ContactBanner from "@/components/contactComponents/ContactBanner";
import ContactForm from "@/components/contactComponents/ContactForm";
import { useApiQuery } from "@/hooks/apiQuery";
import React from "react";

const Contact = () => {
      const { data, isLoading } = useApiQuery({
      queryKey: ["contact-use-data"], // Just the base key
      url: `/contact-use-data`,//portfolios,
    
    });
  return (
    <div className="">
    <ContactBanner data={data?.data} />
    <ContactForm data={data?.data}/>
    </div>
  );
};

export default Contact;
