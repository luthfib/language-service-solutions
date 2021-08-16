const AboutUs = (props) => (
  <>
    <div className="about-holder">
      <div className="about-us">
        <h2>about us</h2>
        <p>
         Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years. His experience spans a variety areas and contexts, including providing language services for the local community, non-profit and health care organizations, universities and research projects, and other community-centered projects. He is passionate about working with organizations to provide language access and create a spirit of inclusion and belonging in communities. 
        </p>
        <p>Murtado is conscientious about the diversity of the communities where he works, and that no single approach works for everyone. He continues to educate himself on emerging technologies, community and client needs, and best practices, to provide the most comprehensive solutions that work for each of his clients’ individual needs. In his free time, he enjoys playing soccer and volleyball.

        </p>

      </div>
    </div>
    <style jsx>{`
      .about-holder {
        background: var(--wheat);
        border-radius: var(--border-radius);
        width: var(--element-width);
        padding: var(--element-padding);
        box-shadow: var(--shadow-primary-light);
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
