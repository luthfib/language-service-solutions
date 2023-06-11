import Dots from '../../components/Icons/dots';
import React from 'react';
import { SEO } from '../../lib/utils/SEO';
import Wave from '../../components/Wave';
import ServiceSingle from '../../components/serviceSingle';

export default function Home() {
    return (
        <>
            <SEO
                title="In-Person Interpretation"
                description="We’re proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces in person."
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />

            <section className=" margin-bottom-2">
                <h1 className="text-center uppercase sm:text-6xl text-3xl mb-10">
                    In-Person Interpretation
                </h1>
            </section>

            <section className="mb-16">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>

            <section className="mb-16">
                <ServiceSingle
                    background="var(--wheat)"
                    logo={'inperson_int'}
                    innerText={
                        <>
                            <p className="m-0">
                                We’re proud to provide your organization with
                                the capacity to reach your Spanish-speaking
                                clients and create multilingual spaces in
                                person.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                WHAT IS In-person INTERPRETATION?
                            </h3>
                            <p className="m-0">
                                In-person interpretation is conducted face to
                                face making it the most effective form of
                                interpretation. It includes both consecutive and
                                simultaneous interpretation.
                            </p>
                        </>
                    }
                />
            </section>
            <section className="mb-16">
                <h2 className="text-center sm:text-4xl text-3xl ">Modes</h2>
            </section>

            <section className="mb-16">
                <ServiceSingle
                    background="var(--wheat)"
                    shadow="var(--elevation-3-wheat)"
                    innerText={
                        <>
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                SIMULTANEOUS INTERPRETATION
                            </h3>
                            <p className="m-0 font-thin">
                                Simultaneous interpreting is the rendition of a
                                source language into a target language at the
                                same time the source language is being
                                spoken. This means that the entire audience will
                                experience the message being transmitted in
                                real-time, creating a more uniform experience
                                for all participants regardless of language. It
                                also offers the advantage that it keeps meeting
                                times more efficient as there is no need to
                                account for additional time for interpretation.
                                Our sophisticated wireless equipment and
                                experienced simultaneous interpreters create a
                                fully multilingual space.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                EXAMPLES OF COMMON USES
                            </h3>
                            <p className="m-0 font-thin">
                                Conferences, meetings, ceremonies,
                                presentations, workshops, and trainings.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                BENEFITS
                            </h3>
                            <p className="m-0 font-thin">
                                Simultaneous interpreting is a great tool to
                                provide access to information to a large group
                                of English- and non-English speakers at the same
                                time (or simultaneously) without having to pause
                                and wait, because the interpretation occurs at
                                the same time the speaker is presenting. We at
                                Language Service Solutions, LLC, take pride in
                                providing precise, high-quality interpretation
                                that shortens meeting times and allows
                                information to flow without pause. We have been
                                rendering this service for more than 15 years
                                with great results.
                            </p>
                            <br />
                        </>
                    }
                />
            </section>

            <section className="mb-16">
                <ServiceSingle
                    background="var(--wheat)"
                    img={'SimTranslation.JPG'}
                    innerText={
                        <>
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Consecutive INTERPRETATION
                            </h3>
                            <p className="m-0">
                                Consecutive interpreting is a mode of
                                interpreting in which the speaker makes a speech
                                (or says a few sentences) in the source language
                                whilst the interpreter takes notes. The
                                interpreter then reproduces what the speaker has
                                said for the audience in the target language.
                                The audience hears the speaker and the
                                interpreter in turns, or consecutively.
                                Typically used in smaller settings, our team of
                                experienced interpreters can offer an
                                exceptional level of professionalism,
                                reliability, and confidentiality.
                            </p>
                            <br />

                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                EXAMPLES OF COMMON USES
                            </h3>
                            <p className="m-0">
                                Interviews, house visits, one-on-one meetings,
                                immigration appointments, medical appointments,
                                and community events.
                            </p>
                            <br />

                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                BENEFITS
                            </h3>
                            <p className="m-0">
                                The service does not need audio, electronic,
                                and/or technical equipment, making it more
                                affordable and personal. If used in the right
                                setting, the attention of the audience can
                                increase as they can see and hear the speaker’s
                                tone of voice and the body language as well as
                                the interpreter’s, thereby increasing their
                                understanding of the message.
                            </p>
                            <br />

                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                HAVE QUESTIONS OR NEED AN ESTIMATE?
                            </h3>
                            <p className="m-0">
                                Please contact us by phone, e-mail, or through
                                this website. We’ll be happy to answer any
                                questions you may have and give you a free
                                estimate.
                            </p>
                            <br />
                        </>
                    }
                />
            </section>
            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
