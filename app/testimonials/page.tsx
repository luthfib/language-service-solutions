import { Metadata } from 'next';
import Button from '../../components/Button';
import Dots from '../../components/Icons/dots';
import Elon from '../../components/Icons/Elon';
import React from 'react';
import SAF from '../../components/Icons/SAF';
import SDI from '../../components/Icons/SDI';
import ServiceSingle from '../../components/serviceSingle';
import Wave from '../../components/Wave';
export const metadata: Metadata = {
    title: 'Client Testimonials',
    description:
        'Read testimonials from our satisfied clients who have used our professional translation, interpretation, and language services. See why organizations trust Language Service Solutions.',
    keywords: [
        'client testimonials',
        'reviews',
        'language services testimonials',
        'translation reviews',
        'interpretation feedback',
        'customer satisfaction',
        'language service solutions reviews',
    ],
    openGraph: {
        title: 'Client Testimonials - Language Service Solutions',
        description:
            'Read testimonials from our satisfied clients who have used our professional translation, interpretation, and language services.',
        url: 'https://languageservicesolutions.com/testimonials',
        type: 'website',
        images: [
            {
                url: '/icons/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Language Service Solutions Testimonials',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Client Testimonials - Language Service Solutions',
        description:
            'Read testimonials from our satisfied clients who have used our professional translation, interpretation, and language services.',
        images: ['/icons/logo.svg'],
    },
};

export default function TestimonialsPage() {
    return (
        <>
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />

            <section className="mb-16 py-14">
                <div className="text-center">
                    <h1 className="text-4xl md:text-8xl uppercase font-bold text-gray-900 mb-6">
                        Testimonials
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Read testimonials from our satisfied clients who have used our professional translation, interpretation, and language services.
                    </p>
                </div>
            </section>

            <section className="mb-16">
                <Dots direction="up" color="var(--yellow)" size={25} />
            </section>

            <section className="mb-16">
                <ServiceSingle
                    logo=""
                    logoImg={''}
                    img={''}
                    background="var(--green)"
                    innerText={
                        <>
                            <div className="p-8 md:p-12 text-(--green-darker)">
                            <blockquote>
                                Murtado Bustillo put together a great
                                interpreting team at the SDIA Annual General
                                Meeting and Networking Conference which was
                                invaluable in our many meetings and workshops.
                                Without Murtado's team of simultaneous
                                interpreters in English, Spanish and French,
                                communication between the members of our
                                international network would have been very
                                difficult during this two-week event. As it w   as,
                                things went really smoothly throughout. A
                                wonderful, professional service!
                            </blockquote>
                            <p className="letter-spacing--small m-0 small-margin-bottom text-xl mb-4">
                                Soleen Lees, Commincation Coordinator <br />{' '}
                                Susila Dharma International Association(SDIA){' '}
                            </p>
                            <SDI />
                            </div>
                        </>
                    }
                />
            </section>

            <section className="mb-16">
                <ServiceSingle
                    logo=""
                    logoImg={''}
                    img={''}
                    background="var(--green)"
                    innerText={
                        <>
                            <div className="p-8 md:p-12 text-(--green-darker)">
                            <blockquote>
                                I have been working with great interpreters at
                                Language Service Solutions for the last 10
                                years. They are skilled, reliable, professional,
                                and a pleasure to work with. They really care
                                about language justie and that all the community
                                members are able to participate in meetings,
                                conferences, and events.
                            </blockquote>
                            <p className="letter-spacing--small m-0 small-margin-bottom text-xl mb-4">
                                Nadeen Bir <br /> Advocacy and Organizing
                                Director{' '}
                            </p>
                            <SAF />
                            </div>
                        </>
                    }
                />
            </section>

            <section className="mb-16">
                <ServiceSingle
                    logo=""
                    logoImg={''}
                    img={''}
                    background="var(--green)"
                    innerText={
                        <>
                            <div className="p-8 md:p-12 text-(--green-darker)">
                            <blockquote>
                                As a non-profit serving a diverse population of
                                students and families, we take very seriously
                                our mission to ensure that all information we
                                share is equitably received by both our
                                English-speaking and or Spanish-speaking
                                families. Murtado and the staff of Language
                                Service Solutions have helped us better meet our
                                goal by providing professional and reliable
                                interpretation and translation services. In
                                addition to being knowledgable, they have a
                                genuine, warm style that instantly puts our
                                families at ease. The work that we do is
                                certainly enhanced by our partnership with
                                Language Service Solutions.
                            </blockquote>
                            <p className="letter-spacing--small m-0 small-margin-bottom text-xl mb-4">
                                Katherine Wicke LaPlante, Elon Academy, <br />{' '}
                                Assistant Director of Counseling and Family
                                Programs
                            </p>
                            <Elon />
                            </div>
                        </>
                    }
                />
            </section>

            <section className="mb-16">
                <Button link="/contact" text="Book a service" title="Book a service" />
            </section>

            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
