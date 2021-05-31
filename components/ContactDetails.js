import Logo from "./Icons/Logo";

const ContactDetails = () => {
  return (
    <>
      <div className="details">
        <div className="inner-details">
          <div className="contact-container">
            <h2>CONTACT DETAILS</h2>
            <div>
              <img src="/icons/phone.svg" alt="phone icon" />
              <span className="circle"></span>
              <small>Phone: (919) 949-9272</small>
            </div>
            <div>
              <img src="/icons/email.svg" alt="email icon" />
              <span className="circle"></span>
              <small>Email: murtado@languageservicesolutions.com</small>
            </div>
            <ul>
              <li className="icon">
                <a href="https://www.facebook.com/Language-Service-Solutions-LLC-1682091685354287/">
                  <img src="/icons/facebook.svg" alt="facebook icon" />
                </a>
              </li>
              {/* <li className="icon">
                <a href="#">
                  <img src="/icons/youtube.svg" />
                </a>
              </li> */}
              {/* <li className='icon'>
                <a href='#'>
                  <img src='/icons/twitter.svg' />
                </a>
              </li> */}
              <li className="icon">
                <a href="https://www.linkedin.com/company/language-service-solutions">
                  <img src="/icons/linkedin.svg" alt="linkedin icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .details {
            --logo-size: 90px;
            background-color: var(--primary-medium);
            width: var(--element-width);
            padding: var(--element-padding);
            display: flex;
            justify-content: center;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-primary-medium);
          }

          .inner-details {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            max-width: 700px;
          }

          .lss {
            font-size: 26px;
            line-height: 26px;
            font-weight: 100;
          }

          .contact-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }

          .contact-container div {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 20px;
          }
          .contact-container div:first-of-type {
            margin-top: 15px;
          }

          .contact-container div img {
            height: 15px;
            width: 15px;
            margin-right: 20px;
            position: relative;
            filter: invert(100%);
          }
          .contact-container div .circle {
            height: 27px;
            width: 27px;
            border: 1px solid var(--white);
            position: absolute;
            border-radius: 50%;
            top: 50%;
            left: 0%;
            transform: translate(-6px, -50%);
          }

          ul {
            display: flex;
            flex-direction: row;
            margin-left: 0;
            padding-left: 0;
            list-style: none;
            margin-top: 20px;
            justify-content: center;
          }

          li {
            background-color: var(--white);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 8px;
            transition: transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;
          }

          li a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }

          li a img {
            width: 100%;
            height: 55%;
          }

          h2 {
            font-size: 26px;
            margin: 16px 0;
            text-align: center;
            color: var(--white);
            letter-spacing: 2px;
          }

          small {
            font-size: 16px;
            font-weight: bold;
          }

          li:hover,li:focus  {
            transform: scale(1.1);
            filter: invert(100%);
            box-shadow:  0 3px 6px rgba(255, 255, 255, 0.16), 0 3px 6px rgba(255, 255, 255, 0.16);
          }
          

          @media (max-width: 550px) {
            .inner-details {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            ul {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactDetails;
