import React, { useRef, useState } from "react";

import AboutUs from "../components/AboutUsSection";
import Banner from "../components/Banner.jsx";
import ComingSoon from "../components/ComingSoon";
import Dots from "../components/Icons/Dots";
import Gallery from "../components/Gallery";
import Services from "../components/ServicesElement";

const Home = (props) => {
  console.log(process.env.NEXT_PUBLIC_MAINTENANCE);
  const underMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE == "true";

  return (
    <>
      {!underMaintenance ? (
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
      ) : (
        <ComingSoon />
      )}
    </>
  );
};

export default Home;
