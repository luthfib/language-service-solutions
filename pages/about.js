import React, { useRef, useState } from 'react';

import AboutUsGallery from '../components/AboutUsGallery';
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
            text={'About us'}
            dots={false}
          />
        </section>
        <section className='margin-bottom-1'>
          <Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
        </section>

        <section className='margin-bottom-1'>
          <AboutUsGallery />
        </section>

        <section className=' margin-bottom-1'>
          <Banner
            bgColor={''}
            height={'90px'}
            width={'90%'}
            headingLevel={'h2'}
            color={'#000'}
            margin={''}
            text={'Our team is ready to help you'}
            dots={false}
          />
        </section>
        <section className='margin-bottom-1'>
          <Textbox
            logo={''}
            img={''}
            textAlign={'center'}
            innerText={
              <>
                <p className='no-margin-top'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <br />
                <p className='no-margin-top'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <br />
                <p className='no-margin-top'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <br />
              </>
            }
          />
        </section>
        <section className='margin-bottom-2'>
          <Banner
            bgColor={''}
            height={'90px'}
            width={'90%'}
            headingLevel={'h2'}
            color={'#000'}
            margin={''}
            fontSize={'like-2'}
            text={'why us?'}
            dots={false}
          />
        </section>

        <section className='margin-bottom-1'>
          <Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
        </section>

        <section className='margin-bottom-1'>
          <Textbox
            logo={''}
            img={''}
            textAlign={'center'}
            innerText={
              <>
                <p className='no-margin-top'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <br />
                <h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
                  MedicalInterpretation has never been easier
                </h4>
                <p className='no-margin-top'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <br />
                <h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
                  MedicalInterpretation has never been easier
                </h4>
                <p className='no-margin-top'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <br />
                <h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
                  MedicalInterpretation has never been easier
                </h4>
                <p className='no-margin-top'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </>
            }
          />
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
