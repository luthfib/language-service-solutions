const ServiceSingle = ({ innerText }) => (
  <>
    <div>{innerText}</div>
    <style jsx>{`
        div {
          background: var(--primary-light);
          border-radius: var(--border-radius);
          width: 90%;
          padding: 0px 40px 30px;
          text-align: left;
          box-shadow: var(--elevation-3);
        }
  
        @media (max-width: 768px) {
          div {
            padding: 0px 40px 30px;
            width: 100%;
          }
  
      `}</style>
  </>
);

export default ServiceSingle;
