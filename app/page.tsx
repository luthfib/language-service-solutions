import Dots from '../components/Icons/dots';
import React from 'react';
import Services from '../components/ServicesElement';
import Landing from '../components/Landing';
import Wave from '../components/Wave';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Language Service Solutions - Bridging the gap to communication freedom',
    description:
        'LANGUAGE SERVICE SOLUTIONS, LLC has over 20 years of experience providing translation and interpretation services as well as consulting around language services for organizations and communities.',
    keywords: [
        'translation',
        'interpretation',
        'transcription',
        'subtitling',
        'language services',
        'multilingual',
        'professional translation',
        'interpretation services',
        'virtual interpretation',
        'in-person interpretation',
    ],
    openGraph: {
        title: 'Language Service Solutions - Bridging the gap to communication freedom',
        description:
            'LANGUAGE SERVICE SOLUTIONS, LLC has over 20 years of experience providing translation and interpretation services as well as consulting around language services for organizations and communities.',
        type: 'website',
        url: 'https://languageservicesolutions.com',
        images: [
            {
                url: '/icons/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Language Service Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Language Service Solutions - Bridging the gap to communication freedom',
        description:
            'Over 20 years of experience providing translation and interpretation services for organizations and communities.',
        images: ['/icons/logo.svg'],
    },
};

export default function HomePage() {
    return (
        <>
            <>
                <section className="px-0">
                    <Landing />
                </section>

                <section className="mb-10 ">
                  
                    <h1 className="text-4xl md:text-6xl uppercase font-bold text-gray-900 mb-6 max-w-4xl mx-auto text-center">
                        Bridging the gap to communication freedom
                    </h1>
                </section>

                <section className="mb-16">
                    <Dots
                        direction={'up'}
                        color={'var(--yellow)'}
                        size={25}
                    />
                </section>

                <section className="mb-16">
                    <Services />
                </section>
                <section className="mb-16">
                    <div className="max-w-2xl text-center">
                        <h2 className="sm:text-4xl text-3xl mb-4 uppercase">about us</h2>
                        <p className="mb-4">
                            LANGUAGE SERVICE SOLUTIONS, LLC has over 20 years of
                            experience providing translation and interpretation
                            services as well as consulting around language
                            services for organizations and communities.
                        </p>
                        <p className="mb-4">
                            Our focus on equity and access drives us to
                            facilitate community connections while eliminating
                            language barriers, making us one of the most trusted
                            full-service language providers in the Triangle
                            (North Carolina). 
                        </p>
                        <p>
                            We work to ensure everyone’s voices are heard and
                            included in meaningful and impactful discussions and
                            spaces. Our company promotes best practices around
                            inclusive multilingual spaces where all languages
                            are valued and respected equally to allow all
                            speakers and listeners to benefit from a diversity
                            in perspective and experience.
                        </p>
                    </div>
                </section>
                <section className="mb-16">
                    <Dots
                        direction={'down'}
                        color={'var(--yellow)'}
                        size={25}
                    />
                </section>

                <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
            </>
        </>
    );
}
