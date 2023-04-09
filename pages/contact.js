import Banner from "../components/Banner.jsx";
import ContactDetails from "../components/ContactDetails";
import ContactImg from "../public/imgs/Contact.jpg";
import Dots from "../components/Icons/dots";
import Image from "next/image";
import { SEO } from "../lib/utils/SEO.js";

export default function Home() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="If you want to hire Language Service Solutions feel free to Contact US"
      />
      <section className="margin-top-1 margin-bottom-2">
        <Banner
          bgColor={""}
          height={"90px"}
          width={"90%"}
          headingLevel={"h1"}
          color={"var(--green-darker)"}
          margin={""}
          text={"Contact us"}
          dots={false}
        />
      </section>

      <section className="margin-bottom-1">
        <Dots direction={"up"} color={"var(--yellow)"} size={"10"} />
      </section>

      <section className="margin-bottom-1 text-center h-80 w-[90%] relative">
        <Image
          src={ContactImg}
          alt="Contact us Image"
          layout="fill"
          className="h-full w-[90%] rounded-3xl object-cover"
          priority
        />
      </section>

      <section className="margin-bottom-1">
        <ContactDetails />
      </section>
      <section className="margin-bottom-1">
        <Banner
          bgColor={"var(--green-darker)"}
          height={"90px"}
          width={"90%"}
          headingLevel={"h2"}
          color={"var(--white)"}
          margin={""}
          text={"Contact us"}
          dots={true}
        />
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .img-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </>
  );
}
