import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Latestcollection } from "../components/Latestcollection";
import { Bestseller } from "../components/Bestseller";
import { Ourpolicy } from "../components/Ourpolicy";
import { Newsletter } from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Latestcollection />
      <Bestseller />
      <Ourpolicy />
      <Newsletter />
    </>
  );
};

export { Home };
