import React, { useState, useRef } from "react";

import AboutUs from "../components/AboutUsSection";
import Banner from "../components/Banner";
import Dots from "../components/Icons/dots";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Services from "../components/ServicesElement";
import { useOnWindowScroll } from "../hooks/useOnWindowScroll";

export default function Home() {
  const [open, setOpen] = useState(false);
  const header = useRef();
  useOnWindowScroll(header, "scrolled", 20);

  return (
    <div className="container">
      <Head>
        <title>Language Service Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header ref={header}>
        <Navbar open={open} setOpen={setOpen}></Navbar>
      </header>

      <main>
        <Gallery />
        <section className="margin-1">
          <Dots direction={"up"} color={"#bcbcbc"} size={"10"} />
        </section>
        <section className="">
          <AboutUs />
        </section>
        <section className="margin-top-1">
          <Services />
        </section>
        <section className="margin-1">
          <a
            href="mailto:murtado@languageservicesolutions"
            className="banner-wrapper"
          >
            <Banner
              bgColor={"#626262"}
              height={"90px"}
              width={"90%"}
              headingLevel={"h3"}
              color={"var(--white)"}
              margin={""}
              text={"CONTACT US"}
              dots={true}
            />
          </a>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .logo {
          height: 1em;
        }

        .banner-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          transition: transform 0.3s ease;
        }
      `}</style>
      <style jsx global>{`
        @font-face {
          font-family: "matiasregular";
          src: url("/fonts/matias-webfont.woff2") format("woff2"),
            url("/fonts/matias-webfont.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }

        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap");
        :root {
          /* colors */

          --primary-dark: #346278;
          --primary-medium: #539b92;
          --primary-light: #7fbba1;
          --white: #fff;
          --black: #000;
          --transparent: #ffffff00;

          --gradient: linear-gradient(
            to right,
            var(--primary-dark),
            var(--primary-medium),
            var(--primary-light)
          );
          --gradient2: linear-gradient(
            to left,
            var(--primary-dark),
            var(--primary-medium),
            var(--primary-light)
          );

          --gradient3: linear-gradient(
            10deg,
            var(--primary-light),
            var(--primary-medium),
            var(--primary-dark)
          );

          --nav-height: 120px;
          /* Shadows Vercel */

          --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
          --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
          --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
          --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
          --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);

          /* Shadows level up tuts */

          --elevation-0: inset 0 7px 9px -7px rgba(0, 0, 0, 0.7);
          --elevation-1: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          --elevation-2: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
          --elevation-3: 0 10px 20px rgba(0, 0, 0, 0.1),
            0 6px 6px rgba(0, 0, 0, 0.1);
          --elevation-4: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          --elevation-5: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);

          /* max-width content */
          --content-width: 1400px;

          /* border-radius */
          --border-radius-mobile: 20px;
          --border-radius: 20px;
        }
        html,
        body {
          padding: 0px;
          margin: 0px;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-family: "matiasregular", "Open Sans", sans-serif;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: var(--content-width);
          margin: 0 auto;
        }

        header {
          width: 100%;
          background-image: var(--gradient);
          position: fixed;
          top: 0;
          z-index: 9999999;
          box-shadow: var(--shadow-small);
        }

        section {
          width: 100%;
          display: flex;
          justify-content: center;
          border-radius: var(--border-radius);
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          padding-top: var(--nav-height);
          transition: padding-top 0.5s ease;
        }

        * {
          box-sizing: border-box;
        }

        h2,
        h3 {
          letter-spacing: 6px;
        }
        h2 {
          font-size: 32px;
        }

        h3 {
          font-size: 24px;
        }

        h4 {
          font-size: 18px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .no-margin {
          margin: 0;
        }

        .margin-1 {
          margin: 35px 0;
        }

        .margin-top-1 {
          margin-top: 35px;
        }

        .margin-bottom-1 {
          margin-bottom: 35px;
        }

        .shadow-3 {
          box-shadow: var(--elevation-3);
        }

        .scrolled {
          --nav-height: 95px;
        }
        .scrolled + main {
          --nav-height: 95px;
        }
        .scrolled .navigation {
          --logo-size: 60px;
          --logo-circle: 70px;
        }

        @media (max-width: 768px) {
          :root {
            --border-radius: 0;
          }
          .margin-1 {
            margin: 25px 0;
          }

          .margin-top-1 {
            margin-top: 25px;
          }

          .margin-bottom-1 {
            margin-bottom: 25px;
          }
          .scrolled {
            --nav-height: 90px;
          }

          .scrolled .navigation {
            --hamburger-size: 25px;
            --logo-size: 50px;
            --logo-circle: 60px;
          }
        }
      `}</style>
    </div>
  );
}
