import React from "react";
import Banner from "../../components/Banner.jsx";
import Dots from "../../components/Icons/dots";
import ServiceCard from "../../components/ServiceCard";

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
          text={"Our Services"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>
      <section className="margin-bottom-1">
        <div className="card-container">
          <ServiceCard
            path={"virtualInterpretation"}
            logo={"videoInterpretation"}
            title={"Virtual Interpretation"}
            text={
              "We’re proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces virtually."
            }
          />

          {/* <ServiceCard
					logo={'simultaneousInterpretation'}
					title={'simultaneous Interpretation'}
					text={
						'Our sophisticated wireless equipment and experienced simultaneous interpreters create a fully bilingual space.'
					}
				/> */}
          <ServiceCard
            path={"inpersoninterpretation"}
            logo={"simultaneousInterpretation"}
            title={"In-Person Interpretation"}
            text={
              "We’re proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces in person."
            }
          />
          <ServiceCard
            logo={"translation"}
            title={"Translation"}
            text={
              "We provide the highest level of accuracy in translation. Our specialization in English - Spanish uses the latest software and a professional team to deliver the best work possible."
            }
          />
          <ServiceCard
            logo={"transcriptions"}
            title={"transcriptions"}
            text={
              "Our team works at a professional level to provide affordable audio or video transcriptions with the the highest degree of word-for-word accuracy."
            }
          />
          <ServiceCard
            logo={"subtitling"}
            title={"subtitling"}
            text={
              "Our experienced team offers the highest quality subtitling for all types of videos. We not only translate accurately but also localize the dialects, maintaining a smooth, relevant read."
            }
          />
          {/* <ServiceCard
					logo={'medicalInterpretation'}
					title={'Medical Interpretation'}
					text={
						'We have more than 15 years of experience facilitating communication between patients with limited English proficiency, and physicians, nurses, lab technicians, and other healthcare providers'
					}
				/> */}
        </div>
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
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          width: 95%;
          height: 100%;
        }



		
      `}</style>
    </>
  );
}
