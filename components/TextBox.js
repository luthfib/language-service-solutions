const renderLogo = (logo, logoImg) => {
  if (logo) {
    return (
      <>
        <div className="icon ">
          <img width="80px" height="80px" src={`/icons/${logo}.svg`} />
        </div>
        <style jsx>
          {`
            .icon {
              align-self: center;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid var(--white);
              border-radius: 50%;
              width: 140px;
              height: 140px;
              margin-bottom: 30px;
              margin-right: auto;
              margin-left: auto;
            }
          `}
        </style>
      </>
    );
  } else if (logoImg) {
    return (
      <>
        <div className="icon ">
          <img width="100%" height="100%" src={`/icons/${logoImg}`} />
        </div>
        <style jsx>
          {`
            .icon {
              align-self: center;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              max-width: 250px;
              max-height: 200px;
              margin-bottom: 30px;
              background: var(--white);
            }

            .icon img {
              object-fit: contain;
            }
          `}
        </style>
      </>
    );
  }
};
const renderImg = (img) => {
  if (img) {
    return (
      <>
        <div className="img-wrapper margin-top-1">
          <img src={`/imgs/${img}`} />
        </div>
        <style jsx>
          {`
            .img-wrapper {
              height: 350px;
              text-align: center;
            }

            .img-wrapper img {
              height: 100%;
              width: 90%;
              object-fit: cover;
              border-radius: 5px;
            }

            @media (max-width: 768px) {
              .img-wrapper {
                height: 200px;
              }
            }
          `}
        </style>
      </>
    );
  }
};

const ServiceSingle = ({ innerText, logo, logoImg, img, textAlign }) => (
  <>
    <div className="serviceSingle">
      <div className="serviceDescription ">
        <div className="serviceContainer">
          {renderLogo(logo, logoImg)}
          {innerText}
        </div>
      </div>
      {renderImg(img)}
    </div>
    <style jsx>{`

      .serviceSingle {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content:center;
        align-items: center;
      }

      .serviceContainer {
        max-width: 500px;
        margin: auto;
        text-align: left;       
      }

      .serviceContainer h4 {
          text-align: center;
      }

      .serviceDescription {
          background: var(--primary-medium);
          border-radius: var(--border-radius);
          width: 90%;
          padding: 40px 40px;
          box-shadow: var(--elevation-3);
          display: flex;
          flex-flow: column;
          text-align: ${textAlign};
          font-weight: bold;
      }

 


      
        @media (max-width: 768px) {
          .serviceDescription {
            padding: 40px 30px;
            width: 100%;
          }

          .img-wrapper {
          height: 150px;
        }
  
      `}</style>

    <style jsx global>{`
      .headline {
        letter-spacing: 2px;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
      }

      .text-white {
        color: var(--white);
      }

      .text-align-left {
        text-align: left;
      }
      .text-align-center {
        text-align: center;
      }

      .no-margin {
        margin: 0;
      }

      .no-margin-top {
        margin-top: 0;
      }

      .small-margin-bottom {
        margin-bottom: 5px;
      }

      .upperCase {
        text-transform: upperCase;
      }
    `}</style>
  </>
);

export default ServiceSingle;
