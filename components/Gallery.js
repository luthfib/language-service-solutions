import { useState, useEffect } from "react";
import { Swipeable } from "react-swipeable";

const Gallery = () => {
  const imgs = ["/imgs/TeamOutside.JPG", "/imgs/TeamGroup.JPG"];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImg >= imgs.length - 1) {
        setCurrentImg(0);
      } else {
        setCurrentImg((currentImg) => currentImg + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImg]);

  const setCurrentImgIdx = (e) => {
    const imgIdx = parseInt(e.target.dataset.imgIdx);
    console.log("Current Image", imgIdx);
    setCurrentImg(imgIdx);
  };

  const rotateImage = (addOrSubtractAmount) => {
    let amount = addOrSubtractAmount;
    if (currentImg + amount > imgs.length - 1) {
      setCurrentImg(0);
    } else if (currentImg + amount < 0) {
      setCurrentImg(imgs.length - 1);
    } else {
      setCurrentImg(currentImg + addOrSubtractAmount);
    }
  };

  return (
    <>
      <Swipeable
        onSwiped={(eventData) => {
          rotateImage(eventData.dir == "Left" ? -1 : 1);
        }}
      >
        <div className="img-container">
          <a className="carousel-control-prev">
            <div>
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                onClick={(e) => rotateImage(-1)}
              ></span>

              <span className="sr-only"></span>
            </div>
          </a>
          <a className="carousel-control-next">
            <div>
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                onClick={(e) => rotateImage(1)}
              ></span>
              <span className="sr-only"></span>
            </div>
          </a>
          <ol className="carousel-indicators">
            <li
              className={currentImg == 0 ? "active" : ""}
              data-img-idx="0"
              onClick={(e) => setCurrentImgIdx(e)}
            ></li>
            <li
              className={currentImg == 1 ? "active" : ""}
              data-img-idx="1"
              onClick={(e) => setCurrentImgIdx(e)}
            ></li>
            {/* <li></li> */}
          </ol>

          <img src={imgs[currentImg]} />
        </div>
      </Swipeable>
      <style jsx>
        {`
          .img-container {
            display: inline-block;
            position: relative;
          }
          a:not([href]):not([tabindex]),
          a:not([href]):not([tabindex]):focus,
          a:not([href]):not([tabindex]):hover {
            color: inherit;
            text-decoration: none;
          }

          a:not([href]),
          a:not([href]):hover {
            color: inherit;
            text-decoration: none;
          }
          .carousel-control-prev,
          .carousel-control-next,
          .carousel-item-prev,
          .carousel-item-next {
            z-index: 2;
          }

          .carousel-control-prev {
            left: 0;
          }

          .carousel-control-next {
            right: 0;
          }

          .carousel-control-next,
          .carousel-control-prev {
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 7.5%;
            color: #fff;
            text-align: center;
            opacity: 0.8;
            transition: opacity 0.15s ease;
          }
          a,
          a:hover,
          a:active,
          a:visited {
            color: inherit;
            -webkit-text-decoration: none;
            text-decoration: none;
          }

          a {
            color: #007bff;
            text-decoration: none;
            background-color: transparent;
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          .carousel-indicators .active {
            opacity: 0.9;
            transform: scale(1.5);
          }

          .carousel-control-next-icon,
          .carousel-control-prev-icon {
            display: inline-block;
            width: 80px;
            height: 80px;
            cursor: pointer;
            background: no-repeat 50%/100% 100%;
          }

          @media (max-width: 768px) {
            .carousel-control-next-icon,
            .carousel-control-prev-icon {
              width: 40px;
              height: 40px;
            }
          }

          .carousel-control-prev-icon {
            background-image: url(/icons/arrow_left.svg);
          }

          .carousel-control-next-icon {
            background-image: url(/icons/arrow_right.svg);
          }

          .carousel .carousel-control-next-icon,
          .carousel .carousel-control-prev-icon {
            width: 30px;
            height: 30px;
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
};

export default Gallery;
