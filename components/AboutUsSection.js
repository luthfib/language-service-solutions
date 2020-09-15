const AboutUs = (props) => (
  <>
    <div>
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
    </div>
    <style jsx>{`
      div {
        background: var(--primary-light);
        border-radius: var(--border-radius);
        width: 90%;
        padding: 0px 80px 30px;
        text-align: center;
        box-shadow: var(--elevation-3);
      }

      h2 {
        text-align: center;
        color: var(--white);
        text-transform: uppercase;
      }

      @media (max-width: 768px) {
        div {
          padding: 0px 40px 30px;
          width: 100%;
        }

    `}</style>
  </>
);

export default AboutUs;
