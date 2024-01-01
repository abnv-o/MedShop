import React from "react";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

const Mainpage = () => {
  return (
    <div className="flex flex-col bg-gray-900 gap-10 py-32">
      <Hero />
      <Pricing />
    </div>
  );
};

export default Mainpage;
