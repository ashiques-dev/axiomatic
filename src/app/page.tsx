import CallToAction from "@/components/call-to-action";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import ProductShowcase from "@/components/product-showcase";
import Testimonials from "@/components/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
