import React from "react";

import Banner from "../../components/Banner.jsx";
import Dots from "../../components/Icons/dots";
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
          text={"Virtual Interpretation"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          logo={"telephonicInterpretation"}
          innerText={
            <>
              <p className="no-margin-top">
                We’re proud to provide your organization with the capacity to
                reach your Spanish-speaking clients and create multilingual
                spaces virtually.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase ">
                WHAT IS VIRTUAL INTERPRETATION?
              </h4>
              <p className="no-margin-top">
                Virtual interpretation is a video-telecommunication service that
                became widely used as a response to the COVID-19 pandemic and is
                now here to stay as it provides a solution to create
                multilingual spaces and reach audiences at all levels. It
                includes Video Remote Interpreting (VRI) and telephonic
                interpretation.
              </p>
              <br />
            </>
          }
        />
      </section>
      <section className="margin-bottom-1">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={"50"}
          text={"Video Remote Interpreting"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <ServiceSingle
          background="var(--wheat)"
          shadow="var(--elevation-3-wheat)"
          innerText={
            <>
              <p className="no-margin-top font-weight-small">
                Language Service Solutions is proud to provide your organization
                with the capacity to reach your Spanish-speaking clients
                seamlessly and without delay by offering our Video Remote
                Interpreting service.
              </p>
              <br />
              <h4 className="headline text-black no-margin-top small-margin-bottom upperCase font-weight-strong">
                WHAT IS Video Remote interpreting
              </h4>
              <p className="no-margin-top font-weight-small">
                Video Remote Interpreting is the most relevant form of
                technology that is changing the way we communicate today.
                Virtual interpretation connects multiple parties together
                without an interpreter physically present reducing costs and
                maximizing effectiveness and inclusion. It provides the benefit
                of multilingual communication with the convenience of
                over-the-phone interpretation.
              </p>
              <br />
              <h4 className="headline text-black  no-margin-top small-margin-bottom upperCase  font-weight-strong">
                EXAMPLES OF COMMON USES
              </h4>
              <p className="no-margin-top font-weight-small">
                Virtual conferences, presentations, workshops, trainings,
                townhall meetings, public meetings, and parent-teacher
                conferences.
              </p>
              <br />
              <h4 className="headline text-black  no-margin-top small-margin-bottom upperCase  font-weight-strong">
                Modes
              </h4>
              <p className="no-margin-top font-weight-small">
                Simultaneous: Simultaneous interpreting is the rendition of a
                source language into a target language at the same time the
                source language is being spoken. The audience thus chooses the
                desired language and everyone hears the message (transmitted
                either by the speaker or the interpreter) at the same time.
                Consecutive: Consecutive interpreting is a mode of interpreting
                in which the speaker makes a speech (or says a few sentences) in
                the source language whilst the interpreter takes notes. The
                interpreter then reproduces what the speaker has said for the
                audience in the target language. The audience hears the speaker
                and the interpreter in turns, or consecutively.
              </p>
              <br />
              <h4 className="headline text-black  no-margin-top small-margin-bottom upperCase font-weight-strong">
                HAVE QUESTIONS OR NEED AN ESTIMATE?
              </h4>
              <p className="no-margin-top font-weight-small">
                Please contact us by phone, e-mail, or through this website.
                We’ll be happy to answer any questions you may have and give you
                a free estimate.
              </p>
            </>
          }
        />
      </section>
      <section className="margin-bottom-1">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={"50"}
          text={"Telephonic Interpretation"}
          dots={false}
        />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          // logo={"telephonicInterpretation"}
          innerText={
            <>
              <p className="no-margin-top">
                Language Service Solutions is proud to provide your organization
                with the capacity to reach your Spanish-speaking clients
                seamlessly and without delay by offering our telephonic
                interpretation service.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase ">
                WHAT IS TELEPHONIC INTERPRETATION?
              </h4>
              <p className="no-margin-top">
                This type of interpretation refers to, as it sounds,
                interpretation done over the phone. You simply call us and the
                interpreter will walk you through the simple process. The main
                difference to all other types of interpretation is that since it
                is done consecutively over the phone it reduces the need for an
                interpreter to be physically present at the time of the
                appointment. Saving you time and money.
              </p>
              <br />

              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase ">
                EXAMPLES OF COMMON USES
              </h4>
              <p className="no-margin-top">
                Family therapies, one-on-one meetings or sessions, follow-ups,
                interviews, house visits, conference calls with clients,
                parent-teacher conferences.
              </p>
              <br />

              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase ">
                DEPENDABLE. CONFIDENTIAL. AFFORDABLE.
              </h4>
              <p className="no-margin-top">
                Our team of professional interpreters will guarantee you have a
                confidential and culturally appropriate experience throughout
                the process. Based in the Triangle, we are familiar with the
                locations, organizations and the community, giving us the local
                awareness and knowledge to guarantee provide high quality
                service that is relevant to your needs. Additionally, we can
                offer to dispatch an interpreter to meet you wherever you are,
                should your needs change—something many other companies cannot
                offer.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase ">
                QUESTIONS OR CONCERNS?
              </h4>
              <p className="no-margin-top">
                Still not sure if this service is right for you? Call us today
                for your free consultation and we’ll address any
                questions/concerns you have and help you find the best solution
                for your needs.
              </p>
              <br />
            </>
          }
        />
      </section>
    </>
  );
}