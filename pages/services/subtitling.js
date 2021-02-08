import React, { useRef, useState } from "react";

import Banner from "../../components/Banner";
import Dots from "../../components/Icons/dots";
import Footer from "../../components/Footer";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import ServiceSingle from "../../components/TextBox";
import { useOnWindowScroll } from "../../hooks/useOnWindowScroll";

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
        <section className="margin-top-1 margin-bottom-2">
          <Banner
            bgColor={""}
            height={"90px"}
            width={"90%"}
            headingLevel={"h1"}
            color={"#000"}
            margin={""}
            text={"Subtititling"}
            dots={false}
          />
        </section>
        <section className="margin-bottom-1">
          <Dots direction={"up"} color={"#bcbcbc"} size={"10"} />
        </section>

        <section className="margin-bottom-1">
          <ServiceSingle
            logo={"subtitling"}
            img={"TeamOutside.JPG"}
            innerText={
              <>
                <p className="no-margin-top">
                  Our experienced team offers the highest quality subtitling for
                  all types of videos. We not only translate accurately but also
                  localize the dialects, maintaining a smooth, relevant read.
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  What is subtitling?
                </h4>
                <p className="no-margin-top">
                  Subtitling is translating recorded speech from one language to
                  another and placing the text at the bottom of a screen so that
                  viewers who don’t speak the original language can understand
                  what’s being said.
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  Examples of common uses
                </h4>
                <p className="no-margin-top">
                  Video clips, speeches, commercials, movies, and media
                  campaigns
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  Space and timing
                </h4>
                <p className="no-margin-top">
                  We take great care to consider the length of time a subtitle
                  will appear and the number of characters it can contain so
                  viewers can read it at normal speed. Our team is fluent in
                  both the target and source language, and understands the
                  parallels and contrasts between the two—cultural and
                  otherwise. Our attention to local nuance gives viewers a
                  comfortable reading experience in which all cultural idioms
                  and expressions have been translated with a rigorous attention
                  to detail.
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  Questions? No problem.
                </h4>
                <p className="no-margin-top">
                  We work closely with all of our clients to provide service
                  that’s efficient, effective, and fast. Simply get in touch
                  with our team to begin working with a member dedicated to
                  delivering assistance at the highest standard of quality.
                </p>
              </>
            }
          />
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .logo {
          height: 1em;
        }

        .banner-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          transition: transform 0.3s ease;
          background-image: var(--gradient1);
        }

        @media (hover: hover) {
          .banner-wrapper:hover {
            transform: scale(1.03);
          }
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: 'matiasregular';
          src: url('/fonts/matias-webfont.woff2') format('woff2'),
            url('/fonts/matias-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');
        :root {
         
        }
        html,
        body {
          padding: 0px;
          margin: 0px;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-family: 'matiasregular', 'Open Sans', sans-serif;
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
          width: 100%;
        }

        * {
          box-sizing: border-box;
        }

        h1,h2,
        h3 {
          letter-spacing: 6px;
        }
        h2 {
          letter-spacing: 6px;
          font-size: 32px;
        }

        h3 {
          letter-spacing: 6px;
          font-size: 24px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .margin-1 {
          margin: 60px 0;
        }

        .margin-top-1 {
          margin-top: 60px;
        }

        .margin-bottom-1 {
          margin-bottom: 60px;
        }

        .margin-2 {
          margin: 25px 0;
        }

        .margin-top-2 {
          margin-top: 25px;
        }

        .margin-bottom-2 {
          margin-bottom: 25px;
        }

        .shadow-3 {
          box-shadow: var(--elevation-3);
        }

        .scrolled {
          --nav-height: 85px;
        }
        .scrolled + main {
          --nav-height: 85px;
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
            margin: 40px 0;
          }

          .margin-top-1 {
            margin-top: 40px;
          }

          .margin-bottom-1 {
            margin-bottom: 40px;
          }

          @media (max-width: 768px) {
          :root {
            --border-radius: 0;
          }
          .margin-1 {
            margin: 40px 0;
          }

          .margin-top-1 {
            margin-top: 40px;
          }

          .margin-bottom-1 {
            margin-bottom: 40px;
          }
          .scrolled {
            --nav-height: 80px;
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
