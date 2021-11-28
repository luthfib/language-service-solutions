import { useEffect, useRef } from "react";

import Banner from "./Banner.jsx";
import { useOnVieport } from "../hooks/useOnVieport.js";
const ServicesElement = (props) => {
  const telephoneRef = useRef(null);
  const isVisible = useOnVieport(telephoneRef);

  return (
    <>
      <div className="services">
        <h2>Services We Offer</h2>
        <div ref={telephoneRef} className="services-container">
          <div className={`service telephone ${isVisible && "appear"}`}>
            <a href="/services/telephonicInterpretation" className="icon ">
              <img
                width="50px"
                height="50px"
                src="/icons/telephonicInterpretation.svg"
                alt="Telephone"
              />
            </a>
            <p>virtual Interpretations</p>
          </div>

          <div className="service translation">
            <a href="/services/translation" className="icon ">
              <img
                width="50px"
                height="50px"
                src="/icons/translation.svg"
                alt="translation"
              />
            </a>
            <p>translation</p>
          </div>

          <div className="service in-person">
            <a href="/services/simultaneousInterpretation" className="icon ">
              <img
                width="50px"
                height="50px"
                src="/icons/simultaneousInterpretation.svg"
                alt="simultaneous interpretation"
              />
            </a>
            <p>in-person Interpretation</p>
          </div>

          <div className="service transcriptions">
            <a href="/services/transcriptions" className="icon ">
              <img
                width="50px"
                height="50px"
                src="/icons/transcriptions.svg"
                alt="transcription"
              />
            </a>
            <p>transcriptions</p>
          </div>

          <div className="service subs">
            <a href="/services/subtitling" className="icon ">
              <img
                width="50px"
                height="50px"
                src="/icons/subtitling.svg"
                alt="subtitling"
              />
            </a>
            <p>subtitling</p>
          </div>
        </div>
        <Banner
          link={"/services/"}
          bgColor={"var(--white)"}
          height={"35px"}
          headingLevel={"h4"}
          color={"var(--green-dark)"}
          text={"MORE INFORMATION"}
          dots={false}
        />
      </div>
      <style jsx>{`
        .services {
          background: var(--primary-medium);
          border-radius: var(--border-radius);
          width: var(--element-width);
          padding: var(--element-padding);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 740px;
          box-shadow: var(--shadow-primary-medium);
        }

        .services-container {
          position: relative;
          padding: 0 10%;
          height: 100%;
          width: 100%;
          max-width: 500px;
          text-align: center;
          margin-top: 20px;
        }

         {
          /* animation  */
        }
        @media (min-width: 998.9px) {
          .services-container:not(.animate) .service {
            top: calc(var(--distance) * 2);
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            opacity: 0;
          }
        }

        .service {
          --distance: 90px;
          --left: 5%;
          --right: 5%;
          --timing: 0.5s;
          --delay: 0.1s;
          transition: top var(--timing) ease-in var(--delay),
            left var(--timing) ease-in var(--delay),
            right var(--timing) ease-in var(--delay),
            transform var(--timing) ease-in var(--delay),
            opacity var(--timing) ease-in var(--delay);
          opacity: 1;
          position: absolute;
          display: inline-flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          width: min-content;
          text-transform: uppercase;
        }

        .service.telephone {
          --delay: 0.3s;
          top: 0%;
          left: calc(var(--left) * 10);
          transform: translate3d(-50%, 0, 0);
        }
        .service.medical {
          top: var(--distance);
          left: var(--left);
          transform: translate3d(0%, 0, 0);
          --delay: 0.8s;
        }
        .service.translation {
          --delay: 0s;
          top: calc(var(--distance) * 2);
          left: calc(var(--left) * 10);
          transform: translate3d(-50%, 0, 0);
        }

        .service.in-person {
          --delay: 0.7s;
          top: calc(var(--distance) * 2);
          left: var(--left);
          transform: translate3d(0%, 0, 0);
        }

        .service.transcriptions {
          --delay: 0.5s;
          top: calc(var(--distance) * 2);
          right: var(--right);
          transform: translate3d(0%, 0, 0);
        }

        .service.subs {
          --delay: 0.6s;
          top: calc(var(--distance) * 4);
          left: calc(var(--left) * 10);
          transform: translate3d(-50%, 0, 0);
        }

        .icon {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #000;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          filter: invert(100%);
          transition: transform 0.3s ease;
        }

        .icon:hover {
          transform: scale(1.08);
        }

        h2 {
          text-align: center;
          color: var(--white);
          text-transform: uppercase;
        }

        p {
          width: 100%;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .services {
            height: unset;
          }

          .services-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
            justify-items: center;
            align-items: flex-start;
            margin-bottom: 20px;
          }

          .service {
            --distance: 100px;
            --left: 0%;
            --right: 0%;
            position: static;
          }

          .service.telephone {
            top: 0%;
            transform: translateX(0%);
          }
          .service.medical {
            top: 0%;
            right: var(--right);
            left: auto;
            transform: translateX(0%);
          }

          .service.translation {
            top: calc(var(--distance) * 1.8);
            transform: translateX(0%);
          }

          .service.video {
            top: calc(var(--distance) * 3.6);
            left: var(--left);
            right: auto;
            transform: translateX(0%);
          }

          .service.simultaneus {
            top: calc(var(--distance) * 1.8);
          }

          .service.transcriptions {
            top: calc(var(--distance) * 3.6);
            left: auto;
            right: var(--right);
          }

          .service.subs {
            --left: 5%;
            top: calc(var(--distance) * 5.5);
            transform: translateX(0%);
          }
        }
      `}</style>

      <style jsx global>
        {`
					.services .banner-wrapper {
						--element-width: 350px;
					
					}

					.services .banner {
						transition: background-color 0.3s ease;
						border-radius: var(--border-radius);
						padding: 1.25em;
					}

					.banner:hover {
						background-color: var(--white);
					}

					.banner:hover h4 {
						color: var(--primary-medium);
						transition: color 0.3s ease;
					}

					@media (max-width: 768px) {
						.services .banner-wrapper {
						--element-width: 280px;
					}
					
				`}
      </style>
    </>
  );
};

export default ServicesElement;
