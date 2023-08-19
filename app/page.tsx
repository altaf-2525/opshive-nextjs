import React from "react";
import HeroSection from "./component/HeroSection";
import Team from "./component/Team";
import Testimonials from "./component/Testimonials";
import ContactUs from "./component/ContactUs";
import Services from "./component/Services";

const page = () => {
  return (
    <div id="home">
      <HeroSection />
      <Services />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default page;
