import Banner from "../components/Banner.jsx";
import Container from "../components/Container";
import Dots from "../components/Icons/dots";
import React from "react";
import StaffIcon from "../components/Icons/Staff";
import Textbox from "../components/TextBox";

export default function Home() {
  return (
    <>
      <section className="margin-top-1 margin-bottom-2">
        <Banner
          height={"90px"}
          width={"100%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"About us"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <Container className="section" background="var(--wheat)">
          <h2 className="headline">MEET THE TEAM!</h2>
          <div className="staff-member-container">
            <div className="staff-member">
              <StaffIcon path="/staff/Farlan.svg" />
              <h3 className="staff-member-name letter-spacing--small all-caps">Farlan Hermosa</h3>
              <p className="staff-member-description">
                joined the Language Services Solutions team in ____ as a translator and has expanded to providing
                expertise for media projects. Farlan holds a Bachelor’s degree in Visual Art and Multimedia Production.
                He enjoys using his skills to ensure content is adapted to the preferences and needs of the target
                audience.
              </p>
            </div>
            <div className="staff-member">
              <StaffIcon path="/staff/Lucas.svg" />
              <h3 className="staff-member-name letter-spacing--small all-caps">Lucas Franco</h3>
              <p className="staff-member-description">
                Joined the Language Services solutions team in ____ and focuses on technical translations, writing and
                editing. Oscar is a software engineer with experience in project management, digital animation, and
                technical writing. He likes to work on projects that combine technical expertise and an understanding of
                the target audience. He worked on an interactive media project that highlighted the diverse cultures in
                the many regions of Colombia, South America.
              </p>
            </div>
            <div className="staff-member">
              <StaffIcon path="/staff/Chairin.svg" />
              <h3 className="staff-member-name letter-spacing--small all-caps">Chairin Hermosa</h3>
              <p className="staff-member-description">
                Chairin Hermosa joined the Language Service Solutions team in _____ as a translator and has expanded her
                scope of work to include transcriptions, editing and interpretation in Spanish and English. Chairin
                holds a Bachelor’s degree in Education, with a concentration in Languages and Childhood Education. She
                values human interaction and fellowship, two elements that have been essential in her work as a teacher
                and as an interpreter in diverse contexts and settings, primordially around community engagement
              </p>
            </div>
            <div className="staff-member">
              <StaffIcon path="/staff/Laura.svg" />
              <h3 className="staff-member-name letter-spacing--small all-caps">Laura Bautista</h3>
              <p className="staff-member-description">
                Joined the Language Services Solutions team in ______ and uses her skills experience to support project
                management and technical writing. Laura holds a Bachelor’s degree in International Business
                Administration and enjoys working on projects that serve and empower communities and focus on language
                justice and access. She loves to spend time with her family in her free time.
              </p>
            </div>
            <div className="staff-member">
              <StaffIcon path="/staff/Murtado.svg" />
              <h3 className="staff-member-name letter-spacing--small all-caps">Murtado Bustillo</h3>
              <p className="staff-member-description">
                Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation
                and interpretation work over the past 20 years. His experience spans a variety areas and contexts,
                including providing language services for the local community, non-profit and health care organizations,
                universities and research projects, and other community-centered projects. He is passionate about
                working with organizations to provide language access and create a spirit of inclusion and belonging in
                communities.
              </p>
              <p className="staff-member-description">
                Murtado is conscientious about the diversity of the communities where he works, and that no single
                approach works for everyone. He continues to educate himself on emerging technologies, community and
                client needs, and best practices, to provide the most comprehensive solutions that work for each of his
                clients’ individual needs. In his free time, he enjoys playing soccer and volleyball.
              </p>
            </div>
            <div className="staff-member">
              <StaffIcon path="/staff/Latimah.svg" />
              <h3 className="staff-member-name letter-spacing--small all-caps">Latimah B. Arrechea</h3>
              <p className="staff-member-description">
                Joined the Language Service Solutions team in ____. She provides support in document translation and
                transcriptions, in both English and Spanish. Latimah holds a Bachelor’s degree in Chemistry. She is
                fluent in Spanish, English and Indonesian. Her travels across the globe contributed to her passion for
                languages and research and provided a solid foundation in her understanding of and respect for cultural
                diversity. She loves community work and sees language justice work as an opportunity to break down
                racial inequalities and improve access to opportunities
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className=" margin-bottom-1">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h2"}
          color={"var(--green-darker)"}
          margin={""}
          text={"Our team is ready to help you"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Textbox
          textAlign={"center"}
          innerText={
            <>
              <p className="no-margin-top">
                Our team is passionate about language access and justice, understanding and addressing the diverse
                communication and language needs of communities, and engaging with clients and the communities we serve.
              </p>
            </>
          }
        />
      </section>
      <section className="margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          headingLevel={"h2"}
          color={"var(--green-darker)"}
          margin={""}
          fontSize={"like-2"}
          text={"why us?"}
          dots={false}
        />
      </section>

      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <Textbox
          textAlign={"center"}
          innerText={
            <>
              <p className="no-margin-top">
                Language Service Solutions LLC, is proud to offer one of the most complete and affordable English
                Spanish services to bridge today's language gaps. Whatever your need is we can help. We offer
                simultaneous interpreting, video subtitling, written translation, interpretation, transcriptions and
                more. We have years of solid experience in the field ensuring our clients a high level of accuracy and
                efficiency.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                Quality guaranteed. Every time.
              </h4>
              <p className="no-margin-top">
                Our friendly and expert staff is equipped to meet the full range of communication needs. We abide by
                strict ethical standards while providing one of the most affordable services in the area. With more than
                15 years of experience in this field, we work ardently to bring a professional standard of language
                services to our costumers.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                Services tailored to fit.
              </h4>
              <p className="no-margin-top">
                We work closely with you to create a custom plan that gives you superb service at an affordable price.
                Contact us at any time for rapid follow-up, beginning with a free, personalized quote.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">Privacy</h4>
              <p className="no-margin-top">
                We believe that trust is essential in all of our business relationships. Therefore, we will never share
                information with anyone. Your files will be restricted and password-protected. We maintain a high
                standard of confidentiality.
              </p>
            </>
          }
        />
      </section>
      <style jsx>{`
        .staff-member-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          row-gap: 80px;
          padding-bottom: 40px;
          padding-top: 40px;
        }

        @media (max-width: 868px) {
          .staff-member-container {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 80px;
            padding-bottom: 40px;
            padding-top: 40px;
          }
        }

        .staff-member-name {
          text-align: center;
        }

        .staff-member-description {
          text-align: center;
          font-weight: 100;
        }

        .headline {
          text-align: center;
        }
      `}</style>
    </>
  );
}
