import Container from '../../components/Container';
import Dots from '../../components/Icons/dots';
import React from 'react';
import StaffTeam from '../../components/StaffTeam';
import Wave from '../../components/Wave';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team',
    description:
        'Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years. Meet our experienced team of professional linguists.',
    keywords: [
        'language services team',
        'translation team',
        'interpretation team',
        'professional linguists',
        'Murtado Bustillos',
        'language experts',
    ],
    openGraph: {
        title: 'Our Team - Language Service Solutions',
        description:
            'Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years.',
        url: 'https://languageservicesolutions.com/ourteam',
        type: 'website',
        images: [
            {
                url: '/icons/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Language Service Solutions Team',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Team - Language Service Solutions',
        description:
            'Meet our experienced team of professional linguists with over 20 years of expertise in translation and interpretation.',
        images: ['/icons/logo.svg'],
    },
};

export default function OurTeamPage() {
    return (
        <>
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />
            <section className="mb-16 py-14">
                <div className="text-center">
                    <h1 className="text-4xl md:text-8xl uppercase font-bold text-gray-900 mb-6">
                        Our Team
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our team of experienced linguists.
                    </p>
                </div>
            </section>

            <section className="mb-16">
                <Dots direction="up" color="var(--yellow)" size={25} />
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
                <div className="max-w-2xl text-center">
                    <h2 className="sm:text-4xl text-3xl mb-4 uppercase">  Our team is ready to help you</h2>
                    <p className="mb-4">
                        Our team is passionate about language access and justice, understanding and addressing the diverse communication and language needs of communities, and engaging with clients and the communities we serve.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">
                        Why us?
                    </h3>
                    <p className="mb-4">
                        Language Service Solutions LLC, is proud to offer one of the most complete and affordable English Spanish services to bridge today's language gaps. Whatever your need is we can help. We offer simultaneous interpreting, video subtitling, written translation, interpretation, transcriptions and more. We have years of solid experience in the field ensuring our clients a high level of accuracy and efficiency.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">
                        Quality guaranteed. Every time.
                    </h3>
                    <p className="mb-4">
                        Our friendly and expert staff is equipped to meet the full range of communication needs. We abide by strict ethical standards while providing one of the most affordable services in the area. With more than 15 years of experience in this field, we work ardently to bring a professional standard of language services to our costumers.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">
                        Services tailored to fit.
                    </h3>
                    <p className="mb-4">
                        We work closely with you to create a custom plan that gives you superb service at an affordable price. Contact us at any time for rapid follow-up, beginning with a free, personalized quote.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">
                        Privacy
                    </h3>
                    <p>
                        We believe that trust is essential in all of our business relationships. Therefore, we will never share information with anyone. Your files will be restricted and password-protected. We maintain a high standard of confidentiality.
                    </p>
                </div>
            </section>

            <section className="mb-16">
                <Dots direction="down" color="var(--yellow)" size={25} />
            </section>

            <Wave position="bottom" marginClass="md:mt-[-8vw]" />
        </>
    );
}
