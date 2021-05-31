import React, { useRef, useState } from "react";

import Banner from "../components/Banner.jsx";
import Dots from "../components/Icons/Dots";
import Duke from "../components/Icons/Duke";
import Elon from "../components/Icons/Elon";
import SAF from "../components/Icons/SAF";
import SDI from "../components/Icons/SDI";
import Textbox from "../components/TextBox";

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
          text={"Testimonials"}
          dots={false}
        />
      </section>

      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--primary-yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <Textbox
          logoImg={""}
          img={""}
          textAlign={"left"}
          innerText={
            <>
              <blockquote>
                Murtado Bustillo put together a great interpreting team at the SDIA Annual General Meeting and
                Networking Conference which was invaluable in our many meetings and workshops. Without Murtado’s team
                of simultaneous interpreters in English, Spanish and French, communication between the members of our
                international network would have been very difficult during this two-week event. As it was, things
                went really smoothly throughout. A wonderful, professional service!
              </blockquote>
              <h3 className="headline text-white no-margin-top small-margin-bottom">
                Soleen Lees, Commincation Coordinator <br /> Susila Dharma International Association(SDIA){" "}
              </h3>
              <SDI />
            </>
          }
        />
      </section>
      <section className="margin-bottom-1">
        <Textbox
          logoImg={""}
          img={""}
          textAlign={"left"}
          innerText={
            <>
              <blockquote>
                I have been working with great interpreters at Language Service Solutions for the last 10 years. They
                are skilled, reliable, professional, and a pleasure to work with. They really care about language
                justie and that all the community members are able to participate in meetings, conferences, and
                events.
              </blockquote>
              <h3 className="headline text-white no-margin-top small-margin-bottom">
                Nadeen Bir <br /> Advocacy and Organizing Director{" "}
              </h3>
              <SAF />
            </>
          }
        />
      </section>
      <section className="margin-bottom-1">
        <Textbox
          logoImg={""}
          img={""}
          textAlign={"left"}
          innerText={
            <>
              <blockquote>
                Thank you Language Service Solutions for always providing interpretation and translation services.
                Your staff is always top notch and we absolutely love that your leadership team works so closely with
                us to ensure our satisfaction. Your team really does help us live out our mission to provide dynamic
                care to our Spanish speaking populations. Your services are invaluable to our organization and we do
                appreciate your prompt and courteous responses to all our requests. We are happy to recommend you to
                anyone in the Triangle area looking for certified medical interpreters and or quick affordable
                translation services!
              </blockquote>
              <h3 className="headline text-white no-margin-top small-margin-bottom">
                Amber Robinson, Patient Advocate, <br /> Manager of Interpreter Services
              </h3>
              <Duke />
            </>
          }
        />
      </section>
      <section className="margin-bottom-1">
        <Textbox
          logoImg={""}
          img={""}
          textAlign={"left"}
          innerText={
            <>
              <blockquote>
                As a non-profit serving a diverse population of students and families, we take very seriously our
                mission to ensure that all information we share is equitably received by both our English-speaking and
                or Spanish-speaking families. Murtado and the staff of Language Service Solutions have helped us
                better meet our goal by providing professional and reliable interpretation and translation services.
                In addition to being knowledgable, they have a genuine, warm style that instantly puts our families at
                ease. The work that we do is certainly enhanced by our partnership with Language Service Solutions.
              </blockquote>
              <h3 className="headline text-white no-margin-top small-margin-bottom">
                Katherine Wicke LaPlante, Elon Academy, <br /> Assistant Director of Counseling and Family Programs
              </h3>
              <Elon />
            </>
          }
        />
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
  );
}
