import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/helpers.css';
import Layout from '../components/Layout';
import { Metadata } from 'next';
import Script from 'next/script';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
    metadataBase: new URL('https://languageservicesolutions.com'),
    title: {
        default: 'Language Service Solutions',
        template: '%s | Language Service Solutions',
    },
    description:
        'Professional translation, transcription, interpretation, subtitling, and multilingual event support services. Over 20 years of experience providing language services for organizations and communities.',
    keywords: [
        'translation',
        'transcription',
        'interpretation',
        'subtitling',
        'multilingual',
        'language services',
        'virtual interpretation',
        'in-person interpretation',
        'professional translation',
    ],
    authors: [{ name: 'Language Service Solutions' }],
    creator: 'Language Service Solutions',
    publisher: 'Language Service Solutions',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://languageservicesolutions.com',
        siteName: 'Language Service Solutions',
        title: 'Language Service Solutions',
        description:
            'Professional translation, transcription, interpretation, subtitling, and multilingual event support services. Over 20 years of experience.',
        images: [
            {
                url: '/icons/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Language Service Solutions Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Language Service Solutions',
        description:
            'Professional translation, transcription, interpretation, subtitling, and multilingual event support services.',
        images: ['/icons/logo.svg'],
    },
    alternates: {
        canonical: 'https://languageservicesolutions.com',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Language Service Solutions',
        alternateName: 'LSS',
        url: 'https://languageservicesolutions.com',
        logo: 'https://languageservicesolutions.com/icons/logo.svg',
        description:
            'Professional translation, transcription, interpretation, subtitling, and multilingual event support services. Over 20 years of experience.',
        foundingDate: '2004',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: ['English', 'Spanish', 'French'],
        },
        sameAs: [
            // Add social media links if available
        ],
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://languageservicesolutions.com',
        name: 'Language Service Solutions',
        image: 'https://languageservicesolutions.com/icons/logo.svg',
        description:
            'Professional translation, transcription, interpretation, subtitling, and multilingual event support services.',
        url: 'https://languageservicesolutions.com',
        telephone: '', // Add phone number if available
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            // Add address if available
        },
        areaServed: {
            '@type': 'Country',
            name: 'United States',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Language Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Virtual Interpretation',
                        description: 'Professional virtual interpretation services',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Translation',
                        description: 'Professional translation services',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'In-Person Interpretation',
                        description: 'Professional in-person interpretation services',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Transcription',
                        description: 'Professional transcription services',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Subtitling',
                        description: 'Professional subtitling services',
                    },
                },
            ],
        },
    };

    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <StructuredData data={organizationSchema} />
                <StructuredData data={localBusinessSchema} />
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-177857813-1"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-177857813-1');
                    `}
                </Script>
            </head>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
