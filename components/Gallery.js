const Gallery = () => (
  <>
    <div className="img-container">
      <ol className="carousel-indicators">
        <li className="active"></li>
        <li></li>
        <li></li>
      </ol>

      <img src="/imgs/TeamGroup.JPG" />
    </div>
    <style jsx>
      {`
        .img-container {
          display: inline-block;
          position: relative;
        }
        .carousel-indicators .active {
          opacity: 0.9;
          transform: scale(1.1);
        }
        div {
          width: 100%;
          height: 50%;
        }
        .carousel-indicators {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 15;
          display: flex;
          justify-content: center;
          padding-left: 0;
          margin-right: 15%;
          margin-left: 15%;
          list-style: none;
        }

        .carousel-indicators li {
          box-sizing: content-box;
          flex: 0 1 auto;
          width: 30px;
          height: 3px;
          margin-right: 3px;
          margin-left: 3px;
          text-indent: -999px;
          cursor: pointer;
          background-color: #fff;
          background-clip: padding-box;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          opacity: 0.5;
          transition: opacity 0.6s ease;
          width: 0.625rem;
          height: 0.625rem;
          cursor: pointer;
          border-radius: 50%;
        }
        img {
          width: 100%;
        }
      `}
    </style>
  </>
);

export default Gallery;
