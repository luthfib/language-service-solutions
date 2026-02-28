import { Metadata } from 'next';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import Wave from '@/components/Wave';
import Dots from '@/components/Icons/dots';

export const metadata: Metadata = {
    title: 'Our Services',
    description:
        "We provide a wide range of language services, including translation, Virtual Interpretation, In-Person Interpretation, subtitling, and transcription. Our team of experienced linguists is committed to providing high-quality, accurate, and culturally-sensitive translations.",
    keywords: [
        'translation services',
        'interpretation services',
        'transcription',
        'subtitling',
        'virtual interpretation',
        'in-person interpretation',
        'language services',
        'professional translation',
        'simultaneous interpretation',
    ],
    openGraph: {
        title: 'Our Services - Language Service Solutions',
        description:
            "We provide a wide range of language services, including translation, Virtual Interpretation, In-Person Interpretation, subtitling, and transcription. Our team of experienced linguists is committed to providing high-quality, accurate, and culturally-sensitive translations.",
        url: 'https://languageservicesolutions.com/services',
        type: 'website',
        images: [
            {
                url: '/icons/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Language Service Solutions Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Services - Language Service Solutions',
        description:
            'Professional translation, interpretation, transcription, and subtitling services with over 20 years of experience.',
        images: ['/icons/logo.svg'],
    },
};

export default function ServicesPage() {
    return (
        <>
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />

            <section className="mb-16 py-14">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-8xl uppercase font-bold text-gray-900 mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        With over 20 years of experience, Language Service
                        Solutions provides comprehensive language services to
                        meet all your communication needs.
                </p>
                </div>
            </section>

            <section className="mb-16">
                <Dots direction="up" color="var(--yellow)" size={25} />
            </section>

            <section className="mb-16">
                <h2 className="text-center sm:text-4xl text-3xl">
                    What We Offer
                </h2>
            </section>

            <section className="mb-16">
                <div className="flex flex-wrap items-center gap-10 justify-center h-full w-[95%]">
                    <ServiceCard
                        path={'virtualInterpretation'}
                        logo={'virtual_int'}
                        title={'Virtual  Interpretation'}
                        text={
                            'We’re proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces virtually.'
                        }
                    />

                    {/* <ServiceCard
                            logo={'simultaneousInterpretation'}
                            title={'simultaneous Interpretation'}
                            text={
                                'Our sophisticated wireless equipment and experienced simultaneous interpreters create a fully bilingual space.'
                            }
                            /> */}

                    <ServiceCard
                        path={'inpersoninterpretation'}
                        logo={'inperson_int'}
                        title={'In-Person Interpretation'}
                        text={
                            'We’re proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces in person.'
                        }
                    />
                    <ServiceCard
                        path={'translation'}
                        logo={'translation'}
                        title={'Translation'}
                        text={
                            'We provide the highest level of accuracy in translation. Our specialization in English - Spanish uses the latest software and a professional team to deliver the best work possible.'
                        }
                    />
                    <ServiceCard
                        path={'transcriptions'}
                        logo={'transcription'}
                        title={'transcription'}
                        text={
                            'Our team works at a professional level to provide affordable audio or video transcriptions with the the highest degree of word-for-word accuracy.'
                        }
                    />
                    <ServiceCard
                        path={'subtitling'}
                        logo={'subtitling'}
                        title={'subtitling'}
                        text={
                            'Our experienced team offers the highest quality subtitling for all types of videos. We not only translate accurately but also localize the dialects, maintaining a smooth, relevant read.'
                        }
                    />
                    {/* <ServiceCard
                    logo={'medicalInterpretation'}
                    title={'Medical Interpretation'}
                    text={
                        'We have more than 15 years of experience facilitating communication between patients with limited English proficiency, and physicians, nurses, lab technicians, and other healthcare providers'
                    }
                    /> */}
                </div>
            </section>

            <section className="mb-16">
                <Button link="/contact" text="Book a service" title="Book a service" />
            </section>

            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
