import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/helpers.css';
import Layout from '../components/Layout';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Language Service Solutions',
    description:
        'Professional translation, transcription, interpretation, subtitling, and multilingual event support services',
    keywords:
        'translation, transcription, interpretation, subtitling, multilingual, language services',
    authors: [{ name: 'Language Service Solutions' }],
    creator: 'Language Service Solutions',
    publisher: 'Language Service Solutions',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
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
