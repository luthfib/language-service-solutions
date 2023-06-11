import Button from './Button.jsx';
import Link from 'next/link';
import { useRef } from 'react';

const ServicesElement = (props) => {
    const containerRef = useRef(null);
    const imgSize = 150;

    return (
        <>
            <div className="services bg-wheat rounded-3xl w-full p-16 md:px-14">
                <h2 className="uppercase sm:text-4xl text-3xl text-center">
                    Services We Offer
                </h2>
                <div
                    ref={containerRef}
                    className="services-container grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid lg:justify-between gap-y-14 gap-x-8 mt-14 mb-16"
                >
                    <div className="service lg:even:pt-4 telephone ">
                        <Link
                            href="/services/virtualInterpretation"
                            legacyBehavior
                        >
                            <a
                                href="/services/virtualInterpretation"
                                className="icon grid justify-center text-center justify-items-center gap-3 grid-rows-[max-content] "
                            >
                                <img
                                    width={imgSize}
                                    height={imgSize}
                                    src="/icons/virtual_int.svg"
                                    alt="virtual interpretation"
                                />
                                <p className="uppercase text-lg max-w-[10rem]">
                                    virtual Interpretation
                                </p>
                            </a>
                        </Link>
                    </div>

                    <div className="service lg:even:pt-4 translatio ">
                        <Link href="/services/translation" legacyBehavior>
                            <a
                                href="/services/translation"
                                className="icon grid justify-center text-center justify-items-center gap-3 grid-rows-[max-content] "
                            >
                                <img
                                    width={imgSize}
                                    height={imgSize}
                                    src="/icons/translation.svg"
                                    alt="translation"
                                />
                                <p className="uppercase text-lg max-w-[10rem]">
                                    translation
                                </p>
                            </a>
                        </Link>
                    </div>

                    <div className="service lg:even:pt-4 in-perso ">
                        <Link
                            href="/services/inpersoninterpretation"
                            legacyBehavior
                        >
                            <a
                                href="/services/inpersoninterpretation"
                                className="icon grid justify-center text-center justify-items-center gap-3 grid-rows-[max-content] "
                            >
                                <img
                                    width={imgSize}
                                    height={imgSize}
                                    src="/icons/inperson_int.svg"
                                    alt="inperson interpretation"
                                />
                                <p className="uppercase text-lg max-w-[10rem]">
                                    in-person Interpretation
                                </p>
                            </a>
                        </Link>
                    </div>

                    <div className="service lg:even:pt-4 transcription ">
                        <Link href="/services/transcriptions" legacyBehavior>
                            <a
                                href="/services/transcriptions"
                                className="icon grid justify-center text-center justify-items-center gap-3 grid-rows-[max-content] "
                            >
                                <img
                                    width={imgSize}
                                    height={imgSize}
                                    src="/icons/transcription.svg"
                                    alt="transcription"
                                />
                                <p className="uppercase text-lg max-w-[10rem]">
                                    transcriptions
                                </p>
                            </a>
                        </Link>
                    </div>

                    <div className="service lg:even:pt-4 sub ">
                        <Link href="/services/subtitling" legacyBehavior>
                            <a
                                href="/services/subtitling"
                                className="icon grid justify-center text-center justify-items-center gap-3 grid-rows-[max-content] "
                            >
                                <img
                                    width={imgSize}
                                    height={imgSize}
                                    src="/icons/subtitling.svg"
                                    alt="subtitling"
                                />
                                <p className="uppercase text-lg max-w-[10rem]">
                                    subtitling
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button link={'/services/'} text={'MORE INFORMATION'} />
                </div>
            </div>
            <style jsx>{`
                .service {
                    --distance: ${imgSize}px;
                    --left: 5%;
                    --right: 5%;
                    --timing: 0.5s;
                    --delay: 0.1s;
                    transition: top var(--timing) ease-in var(--delay),
                        left var(--timing) ease-in var(--delay),
                        right var(--timing) ease-in var(--delay),
                        transform var(--timing) ease-in var(--delay),
                        opacity var(--timing) ease-in var(--delay);
                    opacity: 1;
                    position: relative;
                }

                @media (min-width: 1024px) {
                    .service:nth-child(even) {
                        padding-top: calc(var(--distance) / 1.5);
                    }
                }
            `}</style>
        </>
    );
};

export default ServicesElement;
