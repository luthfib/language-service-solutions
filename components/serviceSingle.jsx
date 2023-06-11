const renderLogo = (logo, logoImg) => {
    if (logo) {
        return (
            <>
                <div className="self-center relative flex justify-center align-items-center mx-auto m-8">
                    <img
                        width="150"
                        height="150"
                        src={`/icons/${logo}.svg`}
                        alt={logo}
                    />
                </div>
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
                <div className="mt-16 text-center w-full h-52 sm:h-80">
                    <img
                        src={`/imgs/${img}`}
                        alt="Service"
                        height="320"
                        width="1260"
                        className="w-full h-full object-cover object-center rounded-3xl"
                    />
                </div>
            </>
        );
    }
};

const ServiceSingle = ({ innerText, logo, logoImg, img, background }) => (
    <>
        <div className=" flex flex-col w-full items-center justify-center">
            <div
                className="serviceDescription rounded-3xl w-full flex flex-col font-bold p-default"
                style={{
                    background: background || 'var(--green)',
                }}
            >
                <div className={`max-w-2xl m-auto text-left font-normal `}>
                    {renderLogo(logo, logoImg)}
                    {innerText}
                </div>
            </div>
            {renderImg(img)}
        </div>
    </>
);

export default ServiceSingle;
