const AboutUsGAllery = (props) => (
  <>
    <div className='aboutGallery'>
      <div className='img-wrapper'>
        <img src='imgs/TeamGroup.JPG' />
      </div>
      <div className='img-wrapper many'>
        <div className='inner-wrapper'>
          <img src='imgs/sar.jpeg' loading="lazy" />
        </div>
        <div className='inner-wrapper'>
          <img src='imgs/sah.jpeg' loading="lazy"/>
        </div>
        <div className='inner-wrapper'>
          <img src='imgs/rico.jpeg' loading="lazy" />
        </div>
      </div>
    </div>
    <style jsx>{`
      .aboutGallery {
        width: 90%;
        height: 700px;
      }

      .img-wrapper {
        width: 100%;
        height: 65%;
        display: flex;
      }

      .img-wrapper.many {
        height: 35%;
      }

      .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
      }

      .inner-wrapper {
        width: 100%;
        height: 100%;
        padding: 8px 4px 0;
      }

      .inner-wrapper:last-of-type {
        padding-right: 0px;
      }

      .inner-wrapper:first-of-type {
        padding-left: 0px;
      }

      @media (max-width: 768px) {
          .aboutGallery {
            width: 100%;
            height: 400px;
          }

          .img-wrapper {
          height: 55%;
        }

        .img-wrapper.many {
          height: 45%;
        }

          .inner-wrapper {
            padding: 6px 3px 0;
          }

          .inner-wrapper:first-of-type img {
            border-top-right-radius: var(--border-radius-mobile);
            border-bottom-right-radius: var(--border-radius-mobile);
          }
          .inner-wrapper:last-of-type img {
            border-top-left-radius: var(--border-radius-mobile);
            border-bottom-left-radius: var(--border-radius-mobile);
          }
          .inner-wrapper:nth-child(2) img {
            border-radius: var(--border-radius-mobile); border-bottom-left-radius: var(--border-radius-mobile);
          }
        }

      @media (min-width: 1000px) {
        .img-wrapper {
          height: 60%;
        }

        .img-wrapper.many {
          height: 40%;
        }
      }
    `}</style>
  </>
);

export default AboutUsGAllery;
