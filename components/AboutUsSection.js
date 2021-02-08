const AboutUs = (props) => (
  <>
    <div className="about-holder">
      <div className="about-us">
        <h2>about us</h2>
        <p>
          LANGUAGE SERVICE SOLUTIONS, LLC has been in the field of
          Spanish/English language services since 2000. As a result of 15 years
          of solid experience, we have become one of the most trusted
          full-service language providers in the Triangle
        </p>
        <p>
          Headquartered in Durham, Language Service Solutions, LLC, is a
          consurtiom of certified, professional interpreters and translators
          with extensive experience eliminating language barriers betweeen
          businesses, nonprofits, and healthcare facilities--small and
          large--and the clients they serve
        </p>
        <p>
          Our professional, friendly, and experienced team works hard to provide
          our clients with the best service. We are bi-cultural/bilingual group
          of professionals who understand the subtle cultural differences that
          play a role in communication
        </p>
      </div>
    </div>
    <style jsx>{`
      .about-holder {
        background: var(--primary-light);
        border-radius: var(--border-radius);
        width: 90%;
        padding: 30px 80px ;
        box-shadow: var(--elevation-3);
      }

      .about-us {
        max-width: 500px;
        margin: auto;
      }

      h2 {
        text-align: center;
        color: var(--white);
        text-transform: uppercase;
      }

      @media (max-width: 768px) {
        .about-holder {
          padding: 30px 40px;
          width: 100%;
        }

    `}</style>
  </>
);

export default AboutUs;
