const ServiceSingle = ({ innerText, logo }) => (
  <>
    <div className='serviceSingle'>
      <div className='icon '>
        <img width='80px' height='80px' src={`/icons/${logo}.svg`} />
      </div>
      {innerText}
    </div>
    <style jsx>{`
        .serviceSingle {
          background: var(--primary-light);
          border-radius: var(--border-radius);
          width: 90%;
          padding: 40px 40px;
          text-align: left;
          box-shadow: var(--elevation-3);
          display: flex;
          flex-flow: column;
        }

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
      
        @media (max-width: 768px) {
          .serviceSingle {
            padding: 40px 30px;
            width: 100%;
          }
  
      `}</style>

    <style jsx global>{`
      .headline {
        letter-spacing: 2px;
      }

      .white {
        color: var(--white);
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
