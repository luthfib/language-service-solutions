import Link from 'next/link';
const ServiceCard = ({ logo, title, text, path }) => (
    <>
        <Link href={`services/${path || logo}`} legacyBehavior>
            <a
                id={`${logo}`}
                className="flex items-center justify-center h-full bg-wheat rounded-3xl max-w-sm min-h-[25rem]"
            >
                <div className="group grid justify-center items-center w-full p-14 ">
                    <div className="grid gap-5 md:gap-10 justify-items-center col-start-1 row-start-1 md:group-hover:opacity-0 transition-opacity">
                        <img
                            width="130"
                            height="130"
                            src={`/icons/${logo}.svg`}
                            alt={logo}
                        />
                        <h4 className="text-center text-3xl uppercase mb-5 md:mb-0 ">
                            {title}
                        </h4>
                    </div>

                    <div className="grid gap-5 md:opacity-0 md:col-start-1 md:row-start-1 group-hover:opacity-100 transition-opacity ">
                        <h4 className="text-center text-3xl uppercase hidden md:block ">
                            {title}
                        </h4>
                        <p className="text-center text-lg">{text}</p>
                        <span className="uppercase text-center text-xl text-blue ">
                            Read More{' '}
                        </span>
                    </div>
                </div>
            </a>
        </Link>
    </>
);

export default ServiceCard;
