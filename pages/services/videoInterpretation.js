import Banner from "../../components/Banner.jsx";
import Dots from "../../components/Icons/dots";
import React from "react";
import { SEO } from "../../lib/utils/SEO.js";
import ServiceSingle from "../../components/TextBox";

export default function Home() {
  return (
    <>
      <SEO
        title="Video Interpretation"
        description="Language Service Solutions is proud to provide your organization with the capacity to reach your Spanish-speaking clients seamlessly and without delay by offering our Video Remote Interpreting service."
      />
      <section className="margin-top-1 margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"In-Person Interpretation"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          logo={"simultaneousInterpretation"}
          innerText={
            <>
              <p className="m-0">
                We’re proud to provide your organization with the capacity to
                reach your Spanish-speaking clients and create multilingual
                spaces in person.
              </p>
              <br />
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                WHAT IS In-person INTERPRETATION?
              </h4>
              <p className="m-0">
                In-person interpretation is conducted face to face making it the
                most effective form of interpretation. It includes both
                consecutive and simultaneous interpretation.
              </p>
            </>
          }
        />
      </section>
      <section className="margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"Modes"}
          dots={false}
        />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          background="var(--wheat)"
          innerText={
            <>
              <h4 className="headline text-black m-0 small-margin-bottom upperCase font-weight-strong">
                SIMULTANEOUS INTERPRETATION
              </h4>
              <p className="m-0 font-weight-small">
                Simultaneous interpreting is the rendition of a source language
                into a target language at the same time the source language is
                being spoken. This means that the entire audience will
                experience the message being transmitted in real-time, creating
                a more uniform experience for all participants regardless of
                language. It also offers the advantage that it keeps meeting
                times more efficient as there is no need to account for
                additional time for interpretation. Our sophisticated wireless
                equipment and experienced simultaneous interpreters create a
                fully multilingual space.
              </p>
              <br />
              <h4 className="headline text-black m-0 small-margin-bottom upperCase font-weight-strong">
                EXAMPLES OF COMMON USES
              </h4>
              <p className="m-0 font-weight-small">
                Conferences, meetings, ceremonies, presentations, workshops, and
                trainings.
              </p>
              <br />
              <h4 className="headline text-black m-0 small-margin-bottom upperCase font-weight-strong">
                BENEFITS
              </h4>
              <p className="m-0 font-weight-small">
                Simultaneous interpreting is a great tool to provide access to
                information to a large group of English- and non-English
                speakers at the same time (or simultaneously) without having to
                pause and wait, because the interpretation occurs at the same
                time the speaker is presenting. We at Language Service
                Solutions, LLC, take pride in providing precise, high-quality
                interpretation that shortens meeting times and allows
                information to flow without pause. We have been rendering this
                service for more than 15 years with great results.
              </p>
              <br />
            </>
          }
        />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          img={"SimTranslation.JPG"}
          innerText={
            <>
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                Consecutive INTERPRETATION
              </h4>
              <p className="m-0">
                Consecutive interpreting is a mode of interpreting in which the
                speaker makes a speech (or says a few sentences) in the source
                language whilst the interpreter takes notes. The interpreter
                then reproduces what the speaker has said for the audience in
                the target language. The audience hears the speaker and the
                interpreter in turns, or consecutively. Typically used in
                smaller settings, our team of experienced interpreters can offer
                an exceptional level of professionalism, reliability, and
                confidentiality.
              </p>
              <br />

              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                EXAMPLES OF COMMON USES
              </h4>
              <p className="m-0">
                Interviews, house visits, one-on-one meetings, immigration
                appointments, medical appointments, and community events.
              </p>
              <br />

              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                BENEFITS
              </h4>
              <p className="m-0">
                The service does not need audio, electronic, and/or technical
                equipment, making it more affordable and personal. If used in
                the right setting, the attention of the audience can increase as
                they can see and hear the speaker’s tone of voice and the body
                language as well as the interpreter’s, thereby increasing their
                understanding of the message.
              </p>
              <br />

              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                HAVE QUESTIONS OR NEED AN ESTIMATE?
              </h4>
              <p className="m-0">
                Please contact us by phone, e-mail, or through this website.
                We’ll be happy to answer any questions you may have and give you
                a free estimate.
              </p>
              <br />
            </>
          }
        />
      </section>
    </>
  );
}
