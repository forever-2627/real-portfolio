import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./partials/banner";
import Portfolio from "./partials/portfolio";
import Testimonials from "./partials/testimonials";
import FAQ from "./partials/faq";
import Contact from "./partials/contact";
import Skills from "./partials/skills";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Skills/>
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
