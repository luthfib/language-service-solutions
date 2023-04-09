import Banner from "../../components/Banner.jsx";
import Dots from "../../components/Icons/dots";
import React from "react";
import { SEO } from "../../lib/utils/SEO.js";
import ServiceSingle from "../../components/TextBox";

export default function Home() {
  return (
    <>
      <SEO
        title="Medical Interpretation"
        description="We’re proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces in person."
      />
      <section className="margin-top-1 margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"Medical Interpretation"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          logo={"medicalInterpretation"}
          img={"TeamOutside.JPG"}
          innerText={
            <>
              <p className="m-0">
                We have more than 15 years of experience facilitating
                communication between patients with limited English proficiency,
                and physicians, nurses, lab technicians, and other healthcare
                providers.
              </p>
              <br />
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                Quality guaranteed. Every time.
              </h4>
              <p className="m-0">
                Our friendly staff knows the Triangle’s healthcare facilities
                and is equipped to meet the full range of their communication
                needs. We abide by strict ethical standards while providing one
                of the most affordable services in the area. With more than 15
                years of experience in this field, we work ardently to bring a
                professional standard of language services to the medical
                community.
              </p>
              <br />
              <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                Experience to make a difference
              </h4>
              <p className="m-0">
                Our team of certified medical interpreters can ensure levels of
                accuracy, awareness of confidentiality requirements, and
                professionalism that many other companies cannot. Dedicated to
                quality, we let you relax, knowing that where attention to
                detail could determine a health outcome, you made the right
                choice. Our interpreters will always arrive on time, prepared to
                deliver the best service for the assignment. Our strict control
                process assures that we match your case with an interpreter with
                the right skills to handle it.
              </p>
              <br />
            </>
          }
        />
      </section>
    </>
  );
}
