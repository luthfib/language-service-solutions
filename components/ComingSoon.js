const ComingSoon = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-inner">
          <div className="picwrapper">
            <img src="imgs/logo.svg" alt="LOGO" />
          </div>

          <p class="className">
            Our website is under maintenance
            <br />
            coming back soon
          </p>
          <p className="text">
            Contact us:
            <br />
            Phone: (919) 949-9272 
            <br/>
            Email: murtado@language&shy;servicesolutions
          </p>
        </div>
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
          :root {
            --primary-dark: #346278;
            --primary-medium: #539b92;
            --primary-light: #7fbba1;
            --gradient: linear-gradient(
              to right,
              var(--primary-dark),
              var(--primary-medium),
              var(--primary-light)
            );
            --elevation-3: 0 10px 20px rgba(0, 0, 0, 0.1),
              0 6px 6px rgba(0, 0, 0, 0.1);
          }

          *,
          body {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            background-color: rgba(255, 255, 255, 0.3);
            min-height: 100vh;
          }

          .wrapper {
            height: 100vh;
            background-image: var(--gradient);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .wrapper-inner {
            max-width: 90%;
            width: 880px;

            box-shadow: var(--elevation-3);
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 0.3);
            padding: 35px;
            text-align: center;
          }

          .text {
            font-family: "Poppins", sans-serif;
            font-size: 30px;
            color: #000000b8;
            line-height: 1.6;
            letter-spacing: 1.3px;
          }

          .picwrapper {
            display: block;
            width: 100%;
            text-align: center;
          }
          .picwrapper img {
            max-width: 100%;
            height: 200px;
            width: 200px;
            border-radius: 50%;
            /* background-image: var(--gradient); */
          }

          @media (max-width: 600px) {
            .text {
              font-family: "Poppins", sans-serif;
              font-size: 18px;
            }

            .picwrapper img {
              height: 150px;
              width: 150px;
              /* background-image: var(--gradient); */
            }
          }
        `}
      </style>
    </>
  );
};

 export default ComingSoon