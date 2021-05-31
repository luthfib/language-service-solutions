import React, { useRef, useState } from "react";

import Banner from "../../components/Banner.jsx";
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
            color={"var(--green-darker)"}
            margin={""}
            text={"Translation"}
            dots={false}
          />
        </section>
        <section className="margin-bottom-1">
          <Dots direction={"up"} color={"#bcbcbc"} size={"10"} />
        </section>

        <section className="margin-bottom-1">
          <ServiceSingle
            logo={"translation"}
            img={"Translation.jpg"}
            innerText={
              <>
                <p className="no-margin-top">
                  We provide the highest level of accuracy in translation. Our specialization in English - Spanish uses
                  the latest software and a professional team to deliver the best work possible.
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  What is translation?
                </h4>
                <p className="no-margin-top">
                  Translation is the transfer of a message from one language to another in any written form.  
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  Examples of common uses
                </h4>
                <p className="no-margin-top">
                  Books, brochures, surveys, speeches, press releases, meeting minutes, and medical information
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  Accuracy and experience
                </h4>
                <p className="no-margin-top">
                  Our fast and reliable team of experienced translators works to ensure an accurate translation within
                  your requested time frame. Our many satisfied customers come to us for an outstanding product.
                </p>
                <br />
                <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                  Have questions or need an estimate?
                </h4>
                <p className="no-margin-top">
                  Please contact us by phone, e-mail, or through this website. We’ll be happy to answer any questions
                  you may have as well as provide you with a free estimate.
                </p>
              </>
            }
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
