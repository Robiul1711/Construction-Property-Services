import Accordian from "@/components/home-components/Accordian";
import ClientSays from "@/components/home-components/ClientSays";
import HomeBanner from "@/components/home-components/HomeBanner";
import ModernResidential from "@/components/home-components/ModernResidential";
import OurPortfolio from "@/components/home-components/OurPortfolio";
import ReadyProject from "@/components/home-components/ReadyProject";
import TurnIdeas from "@/components/home-components/TurnIdeas";
import WhatWeOffer from "@/components/home-components/WhatWeOffer";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ScrollRestoration />
      <HomeBanner />
      <ModernResidential />
      <WhatWeOffer />
      <TurnIdeas />
      <ClientSays />
      <Accordian />
      <OurPortfolio />
      <ReadyProject />
    </div>
  );
};

export default Home;
