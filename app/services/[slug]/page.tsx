import { Metadata } from 'next';
import Container from '../../../components/Container';
import ServiceSingle from '../../../components/serviceSingle';
import Wave from '../../../components/Wave';
import { notFound } from 'next/navigation';
import StructuredData from '../../../components/StructuredData';

const serviceData: Record<string, {
    title: string;
    description: string;
    logo: string;
    logoImg?: string;
    img?: string;
    background?: string;
    content: React.ReactNode;
}> = {
    virtualInterpretation: {
        title: 'Virtual Interpretation',
        description: 'We provide professional virtual interpretation services to help you reach your Spanish-speaking clients and create multilingual spaces virtually.',
        logo: 'virtual_int',
        img: 'VideoInterpretation.jpg',
        background: 'var(--wheat)',
        content: (
            <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6  uppercase">
                    Virtual Interpretation
                </h1>
                <p className="mb-4">
                    We're proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces virtually.
                </p>
                <br />
                <h2 className="letter-spacing--small uppercase text-xl mb-2">
                    WHAT IS VIRTUAL INTERPRETATION?
                </h2>
                <p className="mb-4">
                    Virtual interpretation is a video-telecommunication service that became widely used as a response to the COVID-19 pandemic and is now here to stay as it provides a solution to create multilingual spaces and reach audiences at all levels. It includes Video Remote Interpreting (VRI) and telephonic interpretation.
                </p>
                <br />
                <h2 className=" sm:text-4xl text-3xl mb-4">
                    Video Remote Interpreting
                </h2>
                <p className="mb-4 font-thin">
                    Language Service Solutions is proud to provide your organization with the capacity to reach your Spanish-speaking clients seamlessly and without delay by offering our Video Remote Interpreting service.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    WHAT IS Video Remote interpreting
                </h3>
                <p className="mb-4 font-thin">
                    Video Remote Interpreting is the most relevant form of technology that is changing the way we communicate today. Virtual interpretation connects multiple parties together without an interpreter physically present reducing costs and maximizing effectiveness and inclusion. It provides the benefit of multilingual communication with the convenience of over-the-phone interpretation.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    EXAMPLES OF COMMON USES
                </h3>
                <p className="mb-4 font-thin">
                    Virtual conferences, presentations, workshops, trainings, townhall meetings, public meetings, and parent-teacher conferences.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Modes
                </h3>
                <p className="mb-4 font-thin">
                    Simultaneous: Simultaneous interpreting is the rendition of a source language into a target language at the same time the source language is being spoken. The audience thus chooses the desired language and everyone hears the message (transmitted either by the speaker or the interpreter) at the same time. Consecutive: Consecutive interpreting is a mode of interpreting in which the speaker makes a speech (or says a few sentences) in the source language whilst the interpreter takes notes. The interpreter then reproduces what the speaker has said for the audience in the target language. The audience hears the speaker and the interpreter in turns, or consecutively.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    HAVE QUESTIONS OR NEED AN ESTIMATE?
                </h3>
                <p className="mb-4 font-thin">
                    Please contact us by phone, e-mail, or through this website. We'll be happy to answer any questions you may have and give you a free estimate.
                </p>
                <br />
                <h2 className=" sm:text-4xl text-3xl mb-4">
                    TELEPHONIC INTERPRETATION
                </h2>
                <p className="mb-4">
                    Language Service Solutions is proud to provide your organization with the capacity to reach your Spanish-speaking clients seamlessly and without delay by offering our telephonic interpretation service.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    WHAT IS TELEPHONIC INTERPRETATION?
                </h3>
                <p className="mb-4">
                    This type of interpretation refers to, as it sounds, interpretation done over the phone. You simply call us and the interpreter will walk you through the simple process. The main difference to all other types of interpretation is that since it is done consecutively over the phone it reduces the need for an interpreter to be physically present at the time of the appointment. Saving you time and money.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    EXAMPLES OF COMMON USES
                </h3>
                <p className="mb-4">
                    Family therapies, one-on-one meetings or sessions, follow-ups, interviews, house visits, conference calls with clients, parent-teacher conferences.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    DEPENDABLE. CONFIDENTIAL. AFFORDABLE.
                </h3>
                <p className="mb-4">
                    Our team of professional interpreters will guarantee you have a confidential and culturally appropriate experience throughout the process. Based in the Triangle, we are familiar with the locations, organizations and the community, giving us the local awareness and knowledge to guarantee provide high quality service that is relevant to your needs. Additionally, we can offer to dispatch an interpreter to meet you wherever you are, should your needs change—something many other companies cannot offer.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    QUESTIONS OR CONCERNS?
                </h3>
                <p className="mb-4">
                    Still not sure if this service is right for you? Call us today for your free consultation and we'll address any questions/concerns you have and help you find the best solution for your needs.
                </p>
            </>
        ),
    },
    translation: {
        title: 'Translation Services',
        description: 'We provide the highest level of accuracy in translation. Our specialization in English - Spanish uses the latest software and a professional team to deliver the best work possible.',
        logo: 'translation',
        img: 'Translation.jpg',
        background: 'var(--wheat)',
        content: (
            <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6  uppercase">
                    Translation
                </h1>
                <p className="mb-4">
                    We provide the highest level of accuracy in translation. Our specialization in English - Spanish uses the latest software and a professional team to deliver the best work possible.
                </p>
                <br />
                <h2 className="letter-spacing--small uppercase text-xl mb-2">
                    What is translation?
                </h2>
                <p className="mb-4">
                    Translation is the transfer of a message from one language to another in any written form.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Examples of common uses
                </h3>
                <p className="mb-4">
                    Books, brochures, surveys, speeches, press releases, meeting minutes, and medical information
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Accuracy and experience
                </h3>
                <p className="mb-4">
                    Our fast and reliable team of experienced translators works to ensure an accurate translation within your requested time frame. Our many satisfied customers come to us for an outstanding product.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Have questions or need an estimate?
                </h3>
                <p className="mb-4">
                    Please contact us by phone, e-mail, or through this website. We'll be happy to answer any questions you may have as well as provide you with a free estimate.
                </p>
            </>
        ),
    },
    inpersoninterpretation: {
        title: 'In-Person Interpretation',
        description: 'We provide professional in-person interpretation services to help you reach your Spanish-speaking clients and create multilingual spaces in person.',
        logo: 'inperson_int',
        img: 'SimTranslation.JPG',
        background: 'var(--wheat)',
        content: (
            <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6  uppercase">
                    In-Person Interpretation
                </h1>
                <p className="mb-4">
                    We're proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces in person.
                </p>
                <br />
                <h2 className="letter-spacing--small uppercase text-xl mb-2">
                    WHAT IS In-person INTERPRETATION?
                </h2>
                <p className="mb-4">
                    In-person interpretation is conducted face to face making it the most effective form of interpretation. It includes both consecutive and simultaneous interpretation.
                </p>
                <br />
                <h2 className=" sm:text-4xl text-3xl mb-4">Modes</h2>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    SIMULTANEOUS INTERPRETATION
                </h3>
                <p className="mb-4 font-thin">
                    Simultaneous interpreting is the rendition of a source language into a target language at the same time the source language is being spoken. This means that the entire audience will experience the message being transmitted in real-time, creating a more uniform experience for all participants regardless of language. It also offers the advantage that it keeps meeting times more efficient as there is no need to account for additional time for interpretation. Our sophisticated wireless equipment and experienced simultaneous interpreters create a fully multilingual space.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    EXAMPLES OF COMMON USES
                </h3>
                <p className="mb-4 font-thin">
                    Conferences, meetings, ceremonies, presentations, workshops, and trainings.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    BENEFITS
                </h3>
                <p className="mb-4 font-thin">
                    Simultaneous interpreting is a great tool to provide access to information to a large group of English- and non-English speakers at the same time (or simultaneously) without having to pause and wait, because the interpretation occurs at the same time the speaker is presenting. We at Language Service Solutions, LLC, take pride in providing precise, high-quality interpretation that shortens meeting times and allows information to flow without pause. We have been rendering this service for more than 15 years with great results.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Consecutive INTERPRETATION
                </h3>
                <p className="mb-4">
                    Consecutive interpreting is a mode of interpreting in which the speaker makes a speech (or says a few sentences) in the source language whilst the interpreter takes notes. The interpreter then reproduces what the speaker has said for the audience in the target language. The audience hears the speaker and the interpreter in turns, or consecutively. Typically used in smaller settings, our team of experienced interpreters can offer an exceptional level of professionalism, reliability, and confidentiality.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    EXAMPLES OF COMMON USES
                </h3>
                <p className="mb-4">
                    Interviews, house visits, one-on-one meetings, immigration appointments, medical appointments, and community events.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    BENEFITS
                </h3>
                <p className="mb-4">
                    The service does not need audio, electronic, and/or technical equipment, making it more affordable and personal. If used in the right setting, the attention of the audience can increase as they can see and hear the speaker's tone of voice and the body language as well as the interpreter's, thereby increasing their understanding of the message.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    HAVE QUESTIONS OR NEED AN ESTIMATE?
                </h3>
                <p className="mb-4">
                    Please contact us by phone, e-mail, or through this website. We'll be happy to answer any questions you may have and give you a free estimate.
                </p>
            </>
        ),
    },
    transcriptions: {
        title: 'Transcription Services',
        description: 'Our team works at a professional level to provide affordable audio or video transcriptions with the highest degree of word-for-word accuracy.',
        logo: 'transcription',
        img: 'Transcription.jpg',
        background: 'var(--wheat)',
        content: (
            <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6  uppercase">
                    Transcriptions
                </h1>
                <p className="mb-4">
                    Our team works at a professional level to provide affordable audio or video transcriptions with the the highest degree of word-for-word accuracy.
                </p>
                <br />
                <h2 className="letter-spacing--small uppercase text-xl mb-2">
                    What is transcription?
                </h2>
                <p className="mb-4">
                    Transcription refers to taking any audio or video file and converting it into a text file.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Examples of common uses
                </h3>
                <p className="mb-4">
                    Focus groups, medical records, community surveys, and research
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    We can help
                </h3>
                <p className="mb-4">
                    Converting audio and video files to text documents is a time-consuming process that can place a significant burden on your business. Here at Language Service Solutions, LLC, our team is professionally trained to make this process seamless, saving you time and money.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Questions or concerns?
                </h3>
                <p className="mb-4">
                    We can work with a variety of file formats. Contact us today. Our friendly team will respond promptly with the answers you need for your specific situation.
                </p>
            </>
        ),
    },
    subtitling: {
        title: 'Subtitling Services',
        description: 'Our experienced team offers the highest quality subtitling for all types of videos. We not only translate accurately but also localize the dialects, maintaining a smooth, relevant read.',
        logo: 'subtitling',
        img: 'Subtitling.jpg',
        background: 'var(--wheat)',
        content: (
            <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6  uppercase">
                    Subtitling
                </h1>
                <p className="mb-4">
                    Our experienced team offers the highest quality subtitling for all types of videos. We not only translate accurately but also localize the dialects, maintaining a smooth, relevant read.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    What is subtitling?
                </h3>
                <p className="mb-4">
                    Subtitling is translating recorded speech from one language to another and placing the text at the bottom of a screen so that viewers who don't speak the original language can understand what's being said.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Examples of common uses
                </h3>
                <p className="mb-4">
                    Video clips, speeches, commercials, movies, and media campaigns
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Space and timing
                </h3>
                <p className="mb-4">
                    We take great care to consider the length of time a subtitle will appear and the number of characters it can contain so viewers can read it at normal speed. Our team is fluent in both the target and source language, and understands the parallels and contrasts between the two—cultural and otherwise. Our attention to local nuance gives viewers a comfortable reading experience in which all cultural idioms and expressions have been translated with a rigorous attention to detail.
                </p>
                <br />
                <h3 className="letter-spacing--small uppercase text-xl mb-2">
                    Questions? No problem.
                </h3>
                <p className="mb-4">
                    We work closely with all of our clients to provide service that's efficient, effective, and fast. Simply get in touch with our team to begin working with a member dedicated to delivering assistance at the highest standard of quality.
                </p>
            </>
        ),
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData[slug];
    
    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The requested service page could not be found.',
        };
    }

    const serviceTitle = service.title;
    const serviceDescription = service.description;

    return {
        title: serviceTitle,
        description: serviceDescription,
        keywords: [
            serviceTitle.toLowerCase(),
            'language services',
            'translation',
            'interpretation',
            'transcription',
            'subtitling',
            'professional language services',
        ],
        openGraph: {
            title: `${serviceTitle} - Language Service Solutions`,
            description: serviceDescription,
            url: `https://languageservicesolutions.com/services/${slug}`,
            type: 'website',
            images: [
                {
                    url: service.logoImg ? `/icons/${service.logoImg}.svg` : '/icons/logo.svg',
                    width: 1200,
                    height: 630,
                    alt: `${serviceTitle} - Language Service Solutions`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${serviceTitle} - Language Service Solutions`,
            description: serviceDescription,
            images: [service.logoImg ? `/icons/${service.logoImg}.svg` : '/icons/logo.svg'],
        },
        alternates: {
            canonical: `https://languageservicesolutions.com/services/${slug}`,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://languageservicesolutions.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://languageservicesolutions.com/services',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: service.title,
                item: `https://languageservicesolutions.com/services/${slug}`,
            },
        ],
    };

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: 'Language Service Solutions',
            url: 'https://languageservicesolutions.com',
        },
        areaServed: {
            '@type': 'Country',
            name: 'United States',
        },
        serviceType: 'Language Services',
    };

    return (
        <>
            <StructuredData data={breadcrumbSchema} />
            <StructuredData data={serviceSchema} />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />
            <Container background={'var(--wheat)'}>
                <ServiceSingle
                    innerText={service.content}
                    logo={service.logo}
                    logoImg={service.logoImg}
                    img={service.img}
                    background={service.background || 'var(--wheat)'}
                />
            </Container>
            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
