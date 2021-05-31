import React from "react";

import Banner from "../../components/Banner.jsx";
import Dots from "../../components/Icons/Dots";
import ServiceSingle from "../../components/TextBox";

export default function Home() {  

  return (
    <>
      <section className="margin-top-1 margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"Video Interpretation"}
          dots={false}
        />
      </section>
      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1">
        <ServiceSingle
          logo={"videoInterpretation"}
          img={"VideoInterpretation.jpg"}
          innerText={
            <>
              <p className="no-margin-top">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                Interpreting videos has never been easier
              </h4>
              <p className="no-margin-top">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                Interpreting videos has never been easier
              </h4>
              <p className="no-margin-top">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <br />
              <h4 className="headline text-white no-margin-top small-margin-bottom upperCase">
                Interpreting videos has never been easier
              </h4>
              <p className="no-margin-top">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </>
          }
        />
      </section>
    </>
  );
}
