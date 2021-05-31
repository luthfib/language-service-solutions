import React from "react";

import Banner from "../../components/Banner.jsx";
import Dots from "../../components/Icons/Dots";
import ServiceSingle from "../../components/TextBox";

export default function Home() {

  return (
    <>
      <section className="margin-top-1 margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"Subtititling"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          logo={"subtitling"}
          img={"Subtitling.jpg"}
          innerText={
            <>
              <p className="no-margin-top">
                Our experienced team offers the highest quality subtitling for all types of videos. We not only
                translate accurately but also localize the dialects, maintaining a smooth, relevant read.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">What is subtitling?</h4>
              <p className="no-margin-top">
                Subtitling is translating recorded speech from one language to another and placing the text at the
                bottom of a screen so that viewers who don’t speak the original language can understand what’s being
                said.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                Examples of common uses
              </h4>
              <p className="no-margin-top">Video clips, speeches, commercials, movies, and media campaigns</p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">Space and timing</h4>
              <p className="no-margin-top">
                We take great care to consider the length of time a subtitle will appear and the number of characters
                it can contain so viewers can read it at normal speed. Our team is fluent in both the target and
                source language, and understands the parallels and contrasts between the two—cultural and otherwise.
                Our attention to local nuance gives viewers a comfortable reading experience in which all cultural
                idioms and expressions have been translated with a rigorous attention to detail.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                Questions? No problem.
              </h4>
              <p className="no-margin-top">
                We work closely with all of our clients to provide service that’s efficient, effective, and fast.
                Simply get in touch with our team to begin working with a member dedicated to delivering assistance at
                the highest standard of quality.
              </p>
            </>
          }
        />
      </section>
    
    </>
  );
}
