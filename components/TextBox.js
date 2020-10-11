const renderLogo = (logo) => {
  if(logo) {
    return (
      <>
       <div className='icon '>
          <img width='80px' height='80px' src={`/icons/${logo}.svg`} />
        </div>
        <style jsx>{`
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
          }
          
          `}
        </style>
      </>
    )
  } 
}
const renderImg = (img) => {
  if(img) {
    return (
    <>
      <div className='img-wrapper margin-bottom-1'>
        <img src={`/imgs/${img}`} />
      </div>
      <style jsx>{`
        
      .img-wrapper {
        height: 300px;
      }
      .img-wrapper img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      @media (max-width: 768px) {
          .img-wrapper {
          height: 150px;
        }
        `}
      </style>
    </>
    )
  } 
}
const ServiceSingle = ({ innerText, logo, img, textAlign }) => (
  <>
    <div className='serviceSingle'>
      <div className='serviceDescription margin-bottom-1'>
       {renderLogo(logo)}
        {innerText}
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
        .serviceDescription {
          background: var(--primary-light);
          border-radius: var(--border-radius);
          width: 90%;
          padding: 40px 40px;
          box-shadow: var(--elevation-3);
          display: flex;
          flex-flow: column;
          text-align: ${textAlign}
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
      }

      .text-white {
        color: var(--white);
      }

      .text-align-left{
        text-align: left;
      }
      .text-align-center{
        text-align: center;
      }

      .no-margin {
        margin: 0;
      }

      .no-margin-top {
        margin-top: 0;
      }

      .small-margin-bottom {
        margin-bottom: 2px;
      }

      .upperCase {
        text-transform: upperCase;
      }
    `}</style>
  </>
);

export default ServiceSingle;
