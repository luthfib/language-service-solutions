const renderLogo = (logo, logoImg) => {
    if (logo) {
        return (
            <>
                <div className="icon ">
                    <img
                        width="150px"
                        height="150px"
                        src={`/icons/${logo}.svg`}
                        alt={logo}
                    />
                </div>
                <style jsx>
                    {`
                        .icon {
                            align-self: center;
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
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
                    <img
                        src={`/imgs/${img}`}
                        alt="Service"
                        height="350"
                        width="1260"
                    />
                </div>
                <style jsx>
                    {`
                        .img-wrapper {
                            height: 350px;
                            width: 100%;
                            text-align: center;
                        }

                        .img-wrapper img {
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                            border-radius: var(--border-radius);
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

const ServiceSingle = ({
    innerText,
    logo,
    logoImg,
    img,
    textAlign,
    background,
    shadow,
    color,
}) => (
    <>
        <div className="serviceSingle">
            <div className="serviceDescription ">
                <div className="serviceContainer max-w-2xl">
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
                justify-content: center;
                align-items: center;
            }

            .serviceContainer {
                margin: auto;
                text-align: left;
                font-weight: 400;
            }

            .serviceContainer h4 {
                text-align: center;
            }

            .serviceDescription {
                background: ${background || 'var(--primary-medium)'};
                border-radius: var(--border-radius);
                width: 100%;
                padding: var(--element-padding);
                display: flex;
                flex-flow: column;
                text-align: ${textAlign};
                font-weight: bold;
            }

            @media (max-width: 768px) {
                .img-wrapper {
                    height: 150px;
                }
            }
        `}</style>

        <style jsx global>{`
            p:last-of-type {
                margin-bottom: 0;
            }

            blockquote {
                quotes: '“' '”' '‘' '’';
                margin: 0;
                position: relative;
                margin-bottom: 20px;
                line-height: 1.6em;
                letter-spacing: 0.7px;
            }

            blockquote:before {
                content: open-quote;
                padding-right: 3px;
            }

            blockquote:after {
                content: close-quote;
                padding-left: 3px;
            }

            blockquote:before,
            blockquote:after {
                position: relative;
                line-height: 0;
                top: 10px;
                font-size: 35px;
                color: var(--white);
                opacity: 0.9;
            }

            .headline {
                letter-spacing: 3px;
                font-weight: 400;
            }

            .text-white {
                color: var(--white);
            }

            .font-weight-strong {
                font-weight: 900;
            }

            .font-weight-small {
                font-weight: 100;
            }

            .text-black {
                color: var(--primary-font-color);
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
