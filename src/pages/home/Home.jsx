import Accordian from "@/components/home-components/Accordian";
import ClientSays from "@/components/home-components/ClientSays";
import HomeBanner from "@/components/home-components/HomeBanner";
import ModernResidential from "@/components/home-components/ModernResidential";
import OurPortfolio from "@/components/home-components/OurPortfolio";
import ReadyProject from "@/components/home-components/ReadyProject";
import TurnIdeas from "@/components/home-components/TurnIdeas";
import WhatWeOffer from "@/components/home-components/WhatWeOffer";
import { useApiQuery } from "@/hooks/apiQuery";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
    const { data, isLoading } = useApiQuery({
      queryKey: ["home-banner"], // Just the base key
      url: "/cms/home-page",
    
    });

  return (
    <div>
      <ScrollRestoration />
      <HomeBanner data={data?.data?.homepage} />
      <ModernResidential data={data?.data?.homepage} />
      <WhatWeOffer  />
      <TurnIdeas data={data?.data?.homepage}/>
      <ClientSays data={data?.data?.homepage}/>
      <Accordian data={data?.data?.homepage} />
      <OurPortfolio  data={data?.data?.homepage}/>
      <ReadyProject data={data?.data?.homepage} />
    </div>
  );
};

export default Home;
