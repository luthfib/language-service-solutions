import Wave from '@/components/Wave';
import ContactForm from '../../components/contactForm';
import { Metadata } from 'next';
import Dots from '@/components/Icons/dots';

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Contact Language Service Solutions for all your language service needs. We provide professional translation, interpretation, transcription, and subtitling services. Get in touch today!',
    keywords: [
        'contact us',
        'language service solutions',
        'language services',
        'language translation',
        'language interpretation',
        'language transcription',
        'language subtitling',
        'language virtual interpretation',
        'get in touch',
    ],
    openGraph: {
        title: 'Contact Us - Language Service Solutions',
        description:
            'Contact Language Service Solutions for all your language service needs. We provide professional translation, interpretation, transcription, and subtitling services.',
        url: 'https://languageservicesolutions.com/contact',
        type: 'website',
        images: [
            {
                url: '/icons/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Contact Language Service Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us - Language Service Solutions',
        description:
            'Get in touch with Language Service Solutions for professional translation, interpretation, transcription, and subtitling services.',
        images: ['/icons/logo.svg'],
    },
};

export default function ContactPage() {
    return (
        <>
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />
            <section className="mb-16 py-14">
                <div className="text-center">
                    <h1 className="text-4xl md:text-8xl uppercase font-bold text-gray-900 mb-6">
                        Contact us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Contact us for all your language service needs.
                    </p>
                </div>
            </section>
            <section className="mb-16">
                <Dots direction="up" color="var(--yellow)" size={25} />
            </section>
            <section className="mb-16  relative">
                <ContactForm />
            </section>
            <section className="mb-16">
                <Dots direction="down" color="var(--yellow)" size={25} />
            </section>

            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
