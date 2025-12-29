import HomeBanner from "@/components/home-components/HomeBanner";
import ModernResidential from "@/components/home-components/ModernResidential";
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
    </div>
  );
};

export default Home;
