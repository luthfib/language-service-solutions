import React, { useState, useRef } from 'react';

import Banner from '../components/Banner';
import Dots from '../components/Icons/dots';
import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Textbox from '../components/TextBox';

import { useOnWindowScroll } from '../hooks/useOnWindowScroll';

export default function Home() {
  const [open, setOpen] = useState(false);
  const header = useRef();
  useOnWindowScroll(header, 'scrolled', 20);

  return (
    <div className='container'>
      <Head>
        <title>Language Service Solutions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header ref={header}>
        <Navbar open={open} setOpen={setOpen}></Navbar>
      </header>

      <main>
      <section className='margin-top-1 margin-bottom-2'>
          <Banner
            bgColor={''}
            height={'90px'}
            width={'90%'}
            headingLevel={'h1'}
            color={'#000'}
            margin={''}
            text={'Testimonials'}
            dots={false}
          />
        </section>
  
        <section className='margin-bottom-1'>
          <Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
        </section>

        <section className='margin-bottom-1'>
          <Textbox
            logoImg={''}
            img={''}
            textAlign={'left'}
            innerText={
                <>
              <blockquote>
              Murtado Bustillo put together a great interpreting team at the SDIA Annual General Meeting and Networking Conference which was invaluable in our many meetings and workshops. Without Murtado’s team of simultaneous interpreters in English, Spanish and French, communication between the members of our international network would have been very difficult during this two-week event. As it was, things went really smoothly throughout. A wonderful, professional service!                
              </blockquote>
                <h4 className='headline text-white no-margin-top small-margin-bottom'>
                Soleen Lees, Commincation Coordinator <br/>  Susila Dharma International Association(SDIA) </h4>
                <img src={`/icons/logo_sdia.png`} />

                </>
            }
          />
        </section>
        <section className='margin-bottom-1'>
          <Textbox
            logoImg={''}
            img={''}
            textAlign={'left'}
            innerText={
                <>
              <blockquote>
              I have been working with great interpreters at Language Service Solutions for the last 10 years. They are skilled, reliable, professional, and a pleasure to work with. They really care about language justie and that all the community members are able to participate in meetings, conferences, and events.
              </blockquote>
                <h4 className='headline text-white no-margin-top small-margin-bottom'>
                Nadeen Bir  <br/> Advocacy and Organizing Director </h4>
                <img src={`/icons/SAFLogo.png`} />

                </>
            }
          />
        </section>
        <section className='margin-bottom-1'>
          <Textbox
            logoImg={''}
            img={''}
            textAlign={'left'}
            innerText={
                <>
              <blockquote>
                Thank you Language Service Solutions for always providing interpretation and translation services. Your staff is always top notch and we absolutely love that your leadership team works so closely with us to ensure our satisfaction. Your team really does help us live out our mission to provide dynamic care to our Spanish speaking populations. Your services are invaluable to our organization and we do appreciate your prompt and courteous responses to all our requests. We are happy to recommend you to anyone in the Triangle area looking for certified medical interpreters and or quick affordable translation services!
                
              </blockquote>
                <h4 className='headline text-white no-margin-top small-margin-bottom'>
                Amber Robinson, Patient Advocate,  <br/> Manager of Interpreter Services
                </h4>
                <img src={`/icons/Duke_logo.png`} />

                </>
            }
          />
        </section>
        <section className='margin-bottom-1'>
          <Textbox
            logoImg={''}
            img={''}
            textAlign={'left'}
            innerText={
                <>
              <blockquote>
              As a non-profit serving a diverse population of students and families, we take very seriously our mission to ensure that all information we share is equitably received by both our English-speaking and or Spanish-speaking families. Murtado and the staff of Language Service Solutions have helped us better meet our goal by providing professional and reliable interpretation and translation services. In addition to being knowledgable, they have a genuine, warm style that instantly puts our families at ease. The work that we do is certainly enhanced by our partnership with Language Service Solutions.               
              </blockquote>
                <h4 className='headline text-white no-margin-top small-margin-bottom'>
                Katherine Wicke LaPlante, Elon Academy,  <br/> Assistant Director of Counseling and Family Programs
                </h4>
                <img src={`/icons/Elon_logo.png`} />

                </>
            }
          />
        </section>
        <section className='margin-bottom-1'>
          <a href='mailto:murtado@languageservicesolutions' className='banner-wrapper'>
            <Banner
              bgColor={'#626262'}
              height={'90px'}
              width={'90%'}
              headingLevel={'h2'}
              color={'var(--white)'}
              margin={''}
              text={'Book a service'}
              dots={true}
            />
          </a>
        </section>
      </main>
      <Footer />
      <style jsx>{`

       img {
         height: 63px;
         width: 200px;
         background: var(--white);
         object-fit: contain;
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
        @media (hover: hover) {
          .banner-wrapper:hover {
            transform: scale(1.03);
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

          --nav-height: 100px;
          /* Shadows Vercel */

          --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
          --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
          --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
          --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
          --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);

          /* Shadows level up tuts */

          --elevation-0: inset 0 7px 9px -7px rgba(0, 0, 0, 0.7);
          --elevation-1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          --elevation-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
          --elevation-3: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
          --elevation-4: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
          --elevation-5: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

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
          width:100%;
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

        h1,h2,
        h3 {
          letter-spacing: 6px;
        }

        h1, .like-1 {
          font-size: 2em;
        }     

        h2, .like-2 {
          font-size: 1.5em;
        }   

         h3, .like-3 {
          font-size: 1.17em;
        }

        h4 {
          font-size: 1em;
        }
        
        blockquote {
            quotes: "“" "”" "‘" "’";
           margin: 0; 
           position: relative;
           margin-bottom: 10px;
        }

        blockquote:before {
            content: open-quote; 
            padding-right: 3px;
        }

        blockquote:after {
            content: close-quote;  
            padding-left: 3px;
        }

        blockquote:before, 
        blockquote:after {
            position: relative;
            line-height:0;
            top: 10px;
            font-size: 35px;
            color: var(--white);
            opacity: .9;
        }
    

        a,
        a:hover,
        a:active,
        a:visited {
          color: inherit;
          text-decoration: none;
        }

        .no-margin {
          margin: 0;
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
