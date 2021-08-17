import React, { useRef, useState } from "react";

import AboutUs from "../components/AboutUsSection";
import Banner from "../components/Banner.jsx";
import Dots from "../components/Icons/dots";
import Gallery from "../components/Gallery";
import Services from "../components/ServicesElement";

const Home = (props) => {
  return (
    <>
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
