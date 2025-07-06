import Container from '../../components/Container';
import Dots from '../../components/Icons/dots';
import React from 'react';
import StaffTeam from '../../components/StaffTeam';
import Wave from '../../components/Wave';
import SEO from '../../components/SEO';
import { Metadata } from 'next';
import styles from '@/styles/modules/OurTeam.module.css';

export const metadata: Metadata = {
    title: 'Our Team - Language Service Solutions',
    description:
        'Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years',
    keywords:
        'language services team, translation team, interpretation team, professional linguists',
    openGraph: {
        title: 'Our Team - Language Service Solutions',
        description:
            'Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years',
    },
};

export default function OurTeamPage() {
    return (
        <>
            <SEO
                title="Our Team"
                description="Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years"
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />
            <section className="mb-10 ">
                <svg
                    className="max-w-sm mb-8 w-full p-x"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 408.77 63.6"
                >
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                            <path
                                className={styles.headlineSvg}
                                d="m9.34,9.34c4.22-4.22,9.31-6.34,15.26-6.34s11.04,2.11,15.26,6.34c4.22,4.22,6.34,9.31,6.34,15.26v14.4c0,5.95-2.11,11.04-6.34,15.26-4.22,4.22-9.31,6.34-15.26,6.34s-11.04-2.11-15.26-6.34c-4.22-4.22-6.34-9.31-6.34-15.26v-14.4c0-5.95,2.11-11.04,6.34-15.26Zm31.46,29.66v-14.4c0-4.46-1.58-8.28-4.75-11.45-3.17-3.17-6.98-4.75-11.45-4.75s-8.28,1.58-11.45,4.75c-3.17,3.17-4.75,6.98-4.75,11.45v14.4c0,4.46,1.58,8.28,4.75,11.45s6.98,4.75,11.45,4.75,8.28-1.58,11.45-4.75,4.75-6.98,4.75-11.45Z"
                            />
                            <path
                                className={styles.headlineSvg}
                                d="m94.01,55.34c-3.5,3.5-7.75,5.26-12.74,5.26s-9.24-1.75-12.74-5.26c-3.5-3.5-5.26-7.75-5.26-12.74V3h5.4v39.6c0,3.5,1.24,6.48,3.71,8.93,2.47,2.45,5.44,3.67,8.89,3.67s6.42-1.22,8.89-3.67c2.47-2.45,3.71-5.42,3.71-8.93V3h5.4v39.6c0,4.99-1.75,9.24-5.26,12.74Z"
                            />
                            <path
                                className={styles.headlineSvg}
                                d="m132.53,3c5.47,0,10.14,1.93,14,5.8,3.86,3.86,5.8,8.53,5.8,14,0,3.36-1.06,6.76-3.17,10.19-2.11,3.43-4.66,5.92-7.63,7.45,1.15.72,2.36,1.76,3.64,3.13,1.27,1.37,2.24,2.65,2.92,3.85.67,1.25,1.25,2.8,1.73,4.64.48,1.85.72,3.49.72,4.93v3.6h-5.4v-3.6c0-3.98-1.4-7.38-4.21-10.19-2.81-2.81-6.2-4.21-10.19-4.21h-9v18h-5.4V3h16.2Zm10.15,29.95c1.2-1.15,2.21-2.72,3.02-4.72.82-1.99,1.22-3.8,1.22-5.44,0-3.98-1.4-7.38-4.21-10.19-2.81-2.81-6.2-4.21-10.19-4.21h-10.8v28.8h10.87c1.63,0,3.43-.41,5.4-1.22,1.97-.82,3.53-1.82,4.68-3.02Z"
                            />
                            <path
                                className={styles.headlineSvg}
                                d="m218.71,60.6V8.4h-15.34V3h36v5.4h-15.26v52.2h-5.4Z"
                            />
                            <path
                                className={styles.headlineSvg}
                                d="m261.84,60.6h-5.4V3h36v5.4h-30.6v16.2h16.2v5.4h-16.2v25.2h30.6v5.4h-30.6Z"
                            />
                            <path
                                className={styles.headlineSvg}
                                d="m319.37,44.4l-2.16,8.14-2.09,8.06h-5.62l7.63-28.8,7.63-28.8h5.47l7.63,28.8,7.63,28.8h-5.4l-2.09-8.06-2.16-8.14h-16.49Zm8.14-30.53l-3.31,12.53-3.38,12.6h13.61l-3.38-12.6-3.31-12.53-.07.22-.07.22v-.22l-.07-.22Z"
                            />
                            <path
                                className={styles.headlineSvg}
                                d="m367.97,42.24v18.36h-5.4V3h5.4l8.14,10.8,8.06,10.8,8.14-10.8,8.06-10.8h5.4v57.6h-5.4V12l-5.9,7.92-5.98,7.92-2.16,2.88-2.16,2.88-2.16-2.88-2.16-2.88-5.9-7.92-5.98-7.92v30.24Z"
                            />
                        </g>
                    </g>
                </svg>

                <h1 className="opacity-0 absolute left-0"> Our Team</h1>
            </section>

            <section className="mb-16">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>

            <section className="mb-16">
                <Container background="var(--wheat)">
                    <h2 className="text-center sm:text-4xl text-3xl mb-14">
                        MEET THE TEAM!
                    </h2>
                    <StaffTeam />
                </Container>
            </section>

            <section className="mb-16">
                <Dots direction={'down'} color={'var(--yellow)'} size={'25'} />
            </section>

            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
