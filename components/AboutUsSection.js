const AboutUs = (props) => (
  <>
    <div className="about-holder">
      <div className="about-us">
        <h2>about us</h2>
        <p>
          LANGUAGE SERVICE SOLUTIONS, LLC has over 20 years of experience
          providing translation and interpretation services as well as
          consulting around language services for organizations and communities.
        </p>
        <p>
          Our focus on equity and access drives us to facilitate community
          connections while eliminating language barriers, making us one of the
          most trusted full-service language providers in the Triangle (North
          Carolina). 
        </p>
        <p>
          We work to ensure everyone’s voices are heard and included in
          meaningful and impactful discussions and spaces. Our company promotes
          best practices around inclusive multilingual spaces where all
          languages are valued and respected equally to allow all speakers and
          listeners to benefit from a diversity in perspective and experience.
        </p>
      </div>
    </div>
    <style jsx>{`
      .about-holder {
        background: var(--wheat);
        border-radius: var(--border-radius);
        width: var(--element-width);
        padding: var(--element-padding);
        box-shadow: var(--elevation-3-wheat);
      }

      .about-us {
        max-width: 500px;
        margin: auto;
      }

      h2 {
        text-align: center;
        color: var(--primary-font-color);
        text-transform: uppercase;
      }
    `}</style>
  </>
);

export default AboutUs;
