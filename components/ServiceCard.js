import Banner from './Banner';
const ServiceCard = ({ logo, title, text }) => (
  <>
    <a href='#' className='card-wrapper'>
      <div className='card'>
        <a href='#' className='icon '>
          <img width='80px' height='80px' src={`/icons/${logo}.svg`} />
        </a>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </a>
    <style jsx>{`
      .card-wrapper {
      }
      .card {
        background: var(--primary-medium);
        border-radius: var(--border-radius-mobile);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: var(--elevation-3);
        width: 100%;
        max-width: 300px;
        padding: 30px 55px;
        text-align: center;
        margin: 0px 22.5px 45px 22.5px;
      }

      .icon {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--white);
        border-radius: 50%;
        width: 150px;
        height: 150px;
        transition: transform 0.3s ease;
      }

      .icon:hover {
        transform: scale(1.08);
      }

      h4 {
        margin: 10px 0 0px;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: 2px;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #3f3f3f;
        font-weight: 700;
      }

      .banner-wrapper {
        transition: background-color 0.3s ease;
        border-radius: var(--border-radius);
      }
      .banner-wrapper:hover {
        background-color: var(--white);
      }

      @media (max-width: 768px) {
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

export default ServiceCard;
