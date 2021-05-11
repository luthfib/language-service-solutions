import Logo from "./Icons/logo";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useRef } from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="inner-footer">
          <div className="logo-container">
            <a href="#" className="logo">
              <Logo width={"var(--logo-size)"} height={"var(--logo-size)"} />
            </a>
            <h4 className="lss">
              LANGUAGE <br /> SERVICE <br /> SOLUTIONS, LLC
            </h4>
          </div>
          <div className="contact-container">
            <p>CONTACT US</p>
            <small>Phone: (919) 949-9272</small>
            <small>Email: murtado@languageservicesolutions</small>
            <ul>
              <li className="icon">
                <a href="https://www.facebook.com/Language-Service-Solutions-LLC-1682091685354287/">
                  <img src="/icons/facebook.svg" />
                </a>
              </li>
              {/* <li className="icon">
                <a href="#">
                  <img src="/icons/youtube.svg" />
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  <img src="/icons/twitter.svg" />
                </a>
              </li> */}
              <li className="icon">
                <a href="ttps://www.linkedin.com/company/language-service-solutions">
                  <img src="/icons/linkedin.svg" alt="Linkedin Hyperlink" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            --logo-size: 90px;
            background-image: var(--gradient2);
            width: 100vw;
            display: flex;
            justify-content: center;
          }
          .inner-footer {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 25px 0 25px;
            max-width: 700px;
          }
          .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo {
            border: 2px solid var(--white);
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .lss {
            font-size: 26px;
            line-height: 26px;
            font-weight: 100;
            color: #353535;
          }

          .contact-container {
            display: flex;
            flex-direction: column;
          }

          ul {
            display: flex;
            flex-direction: row;
            margin-left: 0;
            padding-left: 0;
            list-style: none;
          }

          li {
            background-color: var(--white);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 5px;
            transition: transform 0.3s ease-in, filter 0.3s ease-in;
          }

          li a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }

          li:hover {
            transform: scale(1.1);
            filter: invert(100%);
          }

          li a img {
            width: 100%;
            height: 55%;
          }

          p {
            font-size: 18px;
            margin: 16px 0;
          }

          small {
            color: #3b3b3b;
          }
          @media (hover: hover) {
          }

          @media (max-width: 550px) {
            .inner-footer {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .contact-container {
              text-align: center;
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

export default Footer;
