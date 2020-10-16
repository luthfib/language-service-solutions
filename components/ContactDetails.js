import Logo from './Icons/logo';

const ContactDetails = () => {
  return (
    <>
      <div className='details'>
        <div className='inner-details'>
          
          <div className='contact-container'>
            <h4>CONTACT DETAILS</h4>
            <div>
            <img src='/icons/phone.svg' />
            <small>Phone: (919) 949-9272</small>
            </div>
            <div>
            <img src='/icons/email.svg' />
            <small>Email: murtado@languageservicesolutions</small>
            </div>
            <ul>
              <li className='icon'>
                <a href='#'>
                  <img src='/icons/facebook.svg' />
                </a>
              </li>
              <li className='icon'>
                <a href='#'>
                  <img src='/icons/youtube.svg' />
                </a>
              </li>
              <li className='icon'>
                <a href='#'>
                  <img src='/icons/twitter.svg' />
                </a>
              </li>
              <li className='icon'>
                <a href='#'>
                  <img src='/icons/linkedin.svg' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .details {
            --logo-size: 90px;
            background-color: var(--primary-medium);
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .inner-details {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 25px 0 25px;
            max-width: 700px;
          }
          
          .lss {
            font-size: 26px;
            line-height: 26px;
            font-weight: 100;
            color: #353535;
          }

          .contact-container {
            display: flex;
            flex-direction: column;
            text-align:left;
          }

          ul {
            display: flex;
            flex-direction: row;
            margin-left: 0;
            padding-left: 0;
            list-style: none;
            margin-top: 40px;
          }

          li {
            background-color: var(--white);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 5px;
            transition: transform 0.3s ease-in, filter 0.3s ease-in;
          }

          li a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }

          li a img {
            width: 100%;
            height: 55%;
          }

          h4 {
            font-size: 26px;
            margin: 16px 0;
            text-align:center;
            color: var(--white);
            letter-spacing: 2px;
          }

          small {
            color: #3b3b3b;
            font-size: 16px;
            font-weight: bold;
          }
          @media (hover: hover) {
            li:hover {
            transform: scale(1.1);
            filter: invert(100%);
            }
          }

          @media (max-width: 550px) {
            .inner-details {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            ul {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactDetails;
