import AboutUs from "../components/AboutUsSection";
import Banner from "../components/Banner.jsx";
import Dots from "../components/Icons/dots";
import Gallery from "../components/Gallery";
import React from "react";
import { SEO } from "../lib/utils/SEO.js";
import Services from "../components/ServicesElement";

const Home = (props) => {
  return (
    <>
      <SEO description="LANGUAGE SERVICE SOLUTIONS, LLC has over 20 years of experience providing translation and interpretation services as well as consulting around language services for organizations and communities." />
      <>
        <section className="margin-bottom-1">
          <Gallery />
        </section>

        <section className="margin-bottom-1">
          <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
        </section>
        <section className="margin-bottom-1">
          <AboutUs />
        </section>
        <section className="margin-bottom-1">
          <Services />
        </section>
        <section className="margin-bottom-1">
          <Banner
            bgColor={"var(--green-darker)"}
            height={"90px"}
            width={"90%"}
            headingLevel={"h2"}
            color={"var(--white)"}
            margin={""}
            text={"Book a service"}
            dots={true}
          />
        </section>
      </>
    </>
  );
};

export default Home;
