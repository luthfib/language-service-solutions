const AboutUs = (props) => (
  <>
    <section>
      <h2>about us</h2>
      <p>
        LANGUAGE SERVICE SOLUTIONS, LLC has been in the field of Spanish/English language services
        since 2000. As a result of 15 years of solid experience, we have become one of the most
        trusted full-service language providers in the Triangle
      </p>
      <p>
        Headquartered in Durham, Language Service Solutions, LLC, is a consurtiom of certified,
        professional interpreters and translators with extensive experience eliminating language
        barriers betweeen businesses, nonprofits, and healthcare facilities--small and large--and
        the clients they serve
      </p>
      <p>
        Our professional, friendly, and experienced team works hard to provide our clients with the
        best service. We are bi-cultural/bilingual group of professionals who understand the subtle
        cultural differences that play a role in communication
      </p>
    </section>
    <style jsx>{`
      section {
        background: var(--primary-light);
        border-radius: var(--border-radius);
        width: 90%;
        padding: 0px 80px 30px 80px;
      }

      h2 {
        text-align: center;
        color: var(--white);
        text-transform: uppercase;
      }
    `}</style>
  </>
);

export default AboutUs;
