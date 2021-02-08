import Banner from './Banner';
const ServicesElement = (props) => (
  <>
    <div className='services'>
      <h2>Services We Offer</h2>
      <div className='services-container'>
        <div className='service telephone'>
          <a href='/services/telephonicInterpretation' className='icon '>
            <img width='50px' height='50px' src='/icons/telephonicInterpretation.svg' />
          </a>
          <p>Telephonic Interpretations</p>
        </div>

        <div className='service medical'>
          <a href='/services/medicalInterpretation' className='icon '>
            <img width='50px' height='50px' src='/icons/medicalInterpretation.svg' />
          </a>
          <p>Medical Interpretation</p>
        </div>

        <div className='service translation'>
          <a href='/services/translation' className='icon '>
            <img width='50px' height='50px' src='/icons/translation.svg' />
          </a>
          <p>translation</p>
        </div>

        <div className='service video'>
          <a href='/services/videoInterpretation' className='icon '>
            <img width='50px' height='50px' src='/icons/videoInterpretation.svg' />
          </a>
          <p>video Interpretation</p>
        </div>

        <div className='service simultaneus'>
          <a href='/services/simultaneousInterpretation' className='icon '>
            <img width='50px' height='50px' src='/icons/simultaneousInterpretation.svg' />
          </a>
          <p>simultaneus Interpretation</p>
        </div>

        <div className='service transcriptions'>
          <a href='/services/transcriptions' className='icon '>
            <img width='50px' height='50px' src='/icons/transcriptions.svg' />
          </a>
          <p>transcriptions</p>
        </div>

        <div className='service subs'>
          <a href='/services/subtitling' className='icon '>
            <img width='50px' height='50px' src='/icons/subtitling.svg' />
          </a>
          <p>subtitling</p>
        </div>
      </div>
      <a className='banner-wrapper' href='/services'>
        <Banner
          bgColor={'#fff8f83b'}
          height={'35px'}
          width={'var(--banner-services)'}
          headingLevel={'h4'}
          color={'var(--white)'}
          text={'MORE INFORMATION'}
          dots={false}
        />
      </a>
    </div>
    <style jsx>{`
      .services {
        background: var(--primary-medium);
        border-radius: var(--border-radius);
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 30px 5px;
        height: 740px;
        box-shadow: var(--elevation-3);
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

      .service {
        --distance: 90px;

        position: absolute;
        display: inline-flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 150px;
        text-transform: uppercase;
       
      }

   

      .service.telephone {
        top: 0%;
        left: 50%;
        transform: translateX(-50%);
      }
      .service.medical {
        top: var(--distance);
        left: 5%;
      }
      .service.translation {
        top: var(--distance);
        right: 5%;
      }

      .service.video {
        top: calc(var(--distance) * 2);
        left: 50%;
        transform: translateX(-50%);
      }

      .service.simultaneus {
        top: calc(var(--distance) * 3);
        left: 50%;
        left: 5%;
      }

      .service.transcriptions {
        top: calc(var(--distance) * 3);
        right: 5%;
      }

      .service.subs {
        top: calc(var(--distance) * 4);
        left: 50%;
        transform: translateX(-50%);
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
      .banner-wrapper {
        transition: background-color 0.3s ease;
        border-radius: var(--border-radius-mobile);
      }
      .banner-wrapper:hover {
        background-color: var(--white);
      }

      h2 {
        text-align: center;
        color: var(--white);
        text-transform: uppercase;
      }

      p {
        width: 90%;
        margin-top: 8px;
      }

      @media (max-width: 768px) {
        .services {
          height: 870px;
          width: 100%;
        }

        .service {
          --distance: 90px;
        }

        .service.telephone {
          top: 0%;
          left: 5%;
          transform: translateX(0%);
        }
        .service.medical {
          top: 0%;
          right: 5%;
          left: auto;
          transform: translateX(0%);
        }

        .service.translation {
          top: calc(var(--distance) * 1.8);
          right: 5%;
        }

        .service.video {
          top: calc(var(--distance) * 3.6);
          left: 5%;
          right: auto;
          transform: translateX(0%);
        }

        .service.simultaneus {
          top: calc(var(--distance) * 1.8);
          left: 50%;
          left: 5%;
        }

        .service.transcriptions {
          top: calc(var(--distance) * 3.6);
          left: auto;
          right: 5%;
        }

        .service.subs {
          top: calc(var(--distance) * 5.5);
        }
      }
    `}</style>

    <style jsx global>
      {`
        :root {
          --banner-services: 350px;
        }

        .banner-wrapper:hover h4 {
          color: var(--primary-medium);
          transition: color 0.3s ease;
        }

        @media (max-width: 768px) {
          :root {
            --banner-services: 280px;
          }
        }
      `}
    </style>
  </>
);

export default ServicesElement;
