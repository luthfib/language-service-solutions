'use client';

import Button from './Button.jsx';
import Link from 'next/link';
import { useRef } from 'react';
import styles from '@/styles/modules/ServicesElement.module.css';

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
                    <div className={`${styles.service} lg:even:pt-4 telephone`}>
                        <Link
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
                        </Link>
                    </div>

                    <div
                        className={`${styles.service} lg:even:pt-4 translatio`}
                    >
                        <Link
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
                        </Link>
                    </div>

                    <div className={`${styles.service} lg:even:pt-4 in-perso`}>
                        <Link
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
                        </Link>
                    </div>

                    <div
                        className={`${styles.service} lg:even:pt-4 transcription`}
                    >
                        <Link
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
                        </Link>
                    </div>

                    <div className={`${styles.service} lg:even:pt-4 sub`}>
                        <Link
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
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button link={'/services/'} text={'MORE INFORMATION'} />
                </div>
            </div>
        </>
    );
};

export default ServicesElement;
