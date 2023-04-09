import Banner from "../../components/Banner.jsx";
import Dots from "../../components/Icons/dots";
import React from "react";
import { SEO } from "../../lib/utils/SEO.js";
import ServiceSingle from "../../components/TextBox";

export default function Home() {
  return (
    <>
      <SEO
        title="Simultaneous Interpretation"
        description="Simultaneous interpreting is the rendition of a source language into a target language at the same time the source language is being spoken. This means that the entire audience will experience the message being transmitted in real-time, creating a more uniform experience for all participants regardless of language. It also offers the advantage that it keeps meeting times more efficient as there is no need to account for additional time for interpretation. Our sophisticated wireless equipment and experienced simultaneous interpreters create a fully multilingual space."
      />
      <section className="margin-top-1 margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"Simultaneous Interpretation"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          logo={"simultaneousInterpretation"}
          img={"SimTranslation.JPG"}
          innerText={
            <>
              <p className="m-0">
                Our sophisticated wireless equipment and experienced
                simultaneous interpreters create a fully bilingual space.
              </p>
              <br />
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                What is simultaneous interpretation?
              </h4>
              <p className="m-0">
                Simultaneous interpreting is the rendition of a source language
                into a target language at the same time the source language is
                being spoken. 
              </p>
              <br />
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                Examples of common uses
              </h4>
              <p className="m-0">
                Conferences, meetings, ceremonies, presentations, workshops, and
                trainings
              </p>
              <br />
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                Benefits
              </h4>
              <p className="m-0">
                Simultaneous interpreting is a great tool to provide access to
                information to a large group of English- and non-English
                speakers at the same time without having to pause and wait,
                because the interpretation occurs at the same time the speaker
                is presenting. We at Language Service Solutions, LLC, take pride
                in providing precise, high-quality interpretation that shortens
                meetings and allows information to flow without pause. We have
                been rendering this service for more than 15 years with great
                results.
              </p>
              <br />
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                Have questions or need an estimate?
              </h4>
              <p className="m-0">
                Please contact us by phone, e-mail, or through this website.
                We’ll be happy to answer any questions you may have and give you
                a free estimate.
              </p>
            </>
          }
        />
      </section>
    </>
  );
}
