import Button from '../components/Button.jsx';
import ContactDetails from '../components/ContactDetails';
import ContactImg from '../public/imgs/Contact.jpg';
import Dots from '../components/Icons/dots';
import Image from 'next/image';
import { SEO } from '../lib/utils/SEO.js';
import Wave from '../components/Wave.jsx';

export default function Home() {
    return (
        <>
            <SEO
                title="Contact Us"
                description="If you want to hire Language Service Solutions feel free to Contact US"
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />
            <section className="mb-10 ">
                <svg
                    className="max-w-md mb-8 w-full p-x"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492.79 63.6"
                >
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m24.6,60.6c-5.95,0-11.04-2.11-15.26-6.34-4.22-4.22-6.34-9.31-6.34-15.26v-14.4c0-5.95,2.11-11.04,6.34-15.26,4.22-4.22,9.31-6.34,15.26-6.34,2.26,0,4.8.54,7.63,1.62s5.09,2.37,6.77,3.85l-1.8,2.02-1.8,2.02c-1.3-1.15-3-2.12-5.11-2.92-2.11-.79-4.01-1.19-5.69-1.19-4.46,0-8.28,1.58-11.45,4.75-3.17,3.17-4.75,6.98-4.75,11.45v14.4c0,4.46,1.58,8.28,4.75,11.45s6.98,4.75,11.45,4.75c1.68,0,3.58-.4,5.69-1.19,2.11-.79,3.82-1.76,5.11-2.92l1.8,2.02,1.8,2.02c-1.68,1.49-3.92,2.77-6.73,3.85-2.81,1.08-5.36,1.62-7.67,1.62Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m59.45,9.34c4.22-4.22,9.31-6.34,15.26-6.34s11.04,2.11,15.26,6.34c4.22,4.22,6.34,9.31,6.34,15.26v14.4c0,5.95-2.11,11.04-6.34,15.26-4.22,4.22-9.31,6.34-15.26,6.34s-11.04-2.11-15.26-6.34-6.34-9.31-6.34-15.26v-14.4c0-5.95,2.11-11.04,6.34-15.26Zm31.46,29.66v-14.4c0-4.46-1.58-8.28-4.75-11.45-3.17-3.17-6.98-4.75-11.45-4.75s-8.28,1.58-11.45,4.75c-3.17,3.17-4.75,6.98-4.75,11.45v14.4c0,4.46,1.58,8.28,4.75,11.45s6.98,4.75,11.45,4.75,8.28-1.58,11.45-4.75,4.75-6.98,4.75-11.45Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m118.78,14.3v46.3h-5.4V3h5.4l12.6,23.18,12.6,23.11V3h5.4v57.6h-5.4l-12.6-23.18-12.6-23.11Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m181.78,60.6V8.4h-15.34V3h36v5.4h-15.26v52.2h-5.4Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m222.17,44.4l-2.16,8.14-2.09,8.06h-5.62l7.63-28.8,7.63-28.8h5.47l7.63,28.8,7.63,28.8h-5.4l-2.09-8.06-2.16-8.14h-16.49Zm8.14-30.53l-3.31,12.53-3.38,12.6h13.61l-3.38-12.6-3.31-12.53-.07.22-.07.22v-.22l-.07-.22Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m284.09,60.6c-5.95,0-11.04-2.11-15.26-6.34-4.22-4.22-6.34-9.31-6.34-15.26v-14.4c0-5.95,2.11-11.04,6.34-15.26s9.31-6.34,15.26-6.34c2.26,0,4.8.54,7.63,1.62,2.83,1.08,5.09,2.37,6.77,3.85l-1.8,2.02-1.8,2.02c-1.3-1.15-3-2.12-5.11-2.92-2.11-.79-4.01-1.19-5.69-1.19-4.46,0-8.28,1.58-11.45,4.75-3.17,3.17-4.75,6.98-4.75,11.45v14.4c0,4.46,1.58,8.28,4.75,11.45s6.98,4.75,11.45,4.75c1.68,0,3.58-.4,5.69-1.19,2.11-.79,3.82-1.76,5.11-2.92l1.8,2.02,1.8,2.02c-1.68,1.49-3.92,2.77-6.73,3.85-2.81,1.08-5.36,1.62-7.67,1.62Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m329.02,60.6V8.4h-15.34V3h36v5.4h-15.26v52.2h-5.4Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m431.47,55.34c-3.5,3.5-7.75,5.26-12.74,5.26s-9.24-1.75-12.74-5.26c-3.5-3.5-5.26-7.75-5.26-12.74V3h5.4v39.6c0,3.5,1.23,6.48,3.71,8.93,2.47,2.45,5.44,3.67,8.89,3.67s6.42-1.22,8.89-3.67c2.47-2.45,3.71-5.42,3.71-8.93V3h5.4v39.6c0,4.99-1.75,9.24-5.26,12.74Z"
                            />
                            <path
                                className="headline-svg"
                                fill="none"
                                stroke="var(--green-darker)"
                                strokeMiterlimit="10"
                                strokeWidth="6px"
                                d="m484.54,55.34c-3.5,3.5-7.75,5.26-12.74,5.26s-9.24-1.75-12.74-5.26c-3.5-3.5-5.26-7.75-5.26-12.74h5.4c0,3.5,1.23,6.48,3.71,8.93,2.47,2.45,5.45,3.67,8.93,3.67s6.44-1.22,8.89-3.67,3.67-5.41,3.67-8.89-1.22-6.46-3.67-8.93c-2.45-2.47-5.42-3.71-8.93-3.71-3.74,0-6.94-1.32-9.58-3.96-2.64-2.64-3.96-5.82-3.96-9.54s1.32-6.9,3.96-9.54c2.64-2.64,5.83-3.96,9.58-3.96s6.94,1.32,9.58,3.96c2.64,2.64,3.96,5.83,3.96,9.58h-5.47v-.07c0-2.21-.79-4.1-2.38-5.69-1.58-1.58-3.49-2.38-5.72-2.38s-4.14.79-5.72,2.38-2.38,3.49-2.38,5.72.79,4.14,2.38,5.72,3.5,2.38,5.76,2.38c4.99,0,9.24,1.75,12.74,5.26,3.5,3.5,5.26,7.75,5.26,12.74s-1.75,9.24-5.26,12.74Z"
                            />
                        </g>
                    </g>
                    <style>
                        {`
                            .headline-svg {
                                fill: none;
                                stroke: var(--green-darker);
                                stroke-miterlimit: 10;
                                stroke-width: 6px;
                            }
                        `}
                    </style>
                </svg>

                <h1 className="opacity-0 absolute left-0"> Contact us</h1>
            </section>

            <section className="margin-bottom-1">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>

            <section className="margin-bottom-1 text-center h-80 w-[90%] relative">
                <Image
                    src={ContactImg}
                    alt="Contact us Image"
                    layout="fill"
                    className="h-full w-[90%] rounded-3xl object-cover"
                    priority
                />
            </section>

            <section className="margin-bottom-1">
                <ContactDetails />
            </section>
            <section className="margin-bottom-1">
                <Button
                    bgColor={'var(--green-darker)'}
                    height={'90px'}
                    width={'90%'}
                    headingLevel={'h2'}
                    color={'var(--white)'}
                    margin={''}
                    text={'Contact us'}
                    dots={true}
                />
            </section>

            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />

            <style jsx>{`
                @media (max-width: 768px) {
                    .img-wrapper {
                        height: 200px;
                    }
                }
            `}</style>
        </>
    );
}
