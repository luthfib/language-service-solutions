import Button from '../../components/Button.jsx';
import Dots from '../../components/Icons/dots';
import React from 'react';
import { SEO } from '../../lib/utils/SEO.js';
import ServiceSingle from '../../components/TextBox';
import Wave from '../../components/Wave.jsx';

export default function Home() {
    return (
        <>
            <SEO
                title="Virtual Interpretation"
                description="We’re proud to provide your organization with the capacity to reach your Spanish-speaking clients and create multilingual spaces virtually."
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />
            <section className=" margin-bottom-2">
                <h1 className="text-center uppercase sm:text-6xl text-3xl mb-10">
                    Virtual Interpretation
                </h1>
            </section>
            <section className="margin-bottom-1">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>

            <section className="margin-bottom-1">
                <ServiceSingle
                    background="var(--wheat)"
                    logo={'virtual_int'}
                    innerText={
                        <>
                            <p className="m-0">
                                We’re proud to provide your organization with
                                the capacity to reach your Spanish-speaking
                                clients and create multilingual spaces
                                virtually.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                WHAT IS VIRTUAL INTERPRETATION?
                            </h3>
                            <p className="m-0">
                                Virtual interpretation is a
                                video-telecommunication service that became
                                widely used as a response to the COVID-19
                                pandemic and is now here to stay as it provides
                                a solution to create multilingual spaces and
                                reach audiences at all levels. It includes Video
                                Remote Interpreting (VRI) and telephonic
                                interpretation.
                            </p>
                            <br />
                        </>
                    }
                />
            </section>
            <section className="margin-bottom-1">
                <h2 className="text-center sm:text-4xl text-3xl ">
                    Video Remote Interpreting
                </h2>
            </section>
            <section className="margin-bottom-1">
                <ServiceSingle
                    background="var(--wheat)"
                    shadow="var(--elevation-3-wheat)"
                    innerText={
                        <>
                            <p className="m-0 font-weight-small">
                                Language Service Solutions is proud to provide
                                your organization with the capacity to reach
                                your Spanish-speaking clients seamlessly and
                                without delay by offering our Video Remote
                                Interpreting service.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                WHAT IS Video Remote interpreting
                            </h3>
                            <p className="m-0 font-weight-small">
                                Video Remote Interpreting is the most relevant
                                form of technology that is changing the way we
                                communicate today. Virtual interpretation
                                connects multiple parties together without an
                                interpreter physically present reducing costs
                                and maximizing effectiveness and inclusion. It
                                provides the benefit of multilingual
                                communication with the convenience of
                                over-the-phone interpretation.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                EXAMPLES OF COMMON USES
                            </h3>
                            <p className="m-0 font-weight-small">
                                Virtual conferences, presentations, workshops,
                                trainings, townhall meetings, public meetings,
                                and parent-teacher conferences.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Modes
                            </h3>
                            <p className="m-0 font-weight-small">
                                Simultaneous: Simultaneous interpreting is the
                                rendition of a source language into a target
                                language at the same time the source language is
                                being spoken. The audience thus chooses the
                                desired language and everyone hears the message
                                (transmitted either by the speaker or the
                                interpreter) at the same time. Consecutive:
                                Consecutive interpreting is a mode of
                                interpreting in which the speaker makes a speech
                                (or says a few sentences) in the source language
                                whilst the interpreter takes notes. The
                                interpreter then reproduces what the speaker has
                                said for the audience in the target language.
                                The audience hears the speaker and the
                                interpreter in turns, or consecutively.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                HAVE QUESTIONS OR NEED AN ESTIMATE?
                            </h3>
                            <p className="m-0 font-weight-small">
                                Please contact us by phone, e-mail, or through
                                this website. We’ll be happy to answer any
                                questions you may have and give you a free
                                estimate.
                            </p>
                        </>
                    }
                />
            </section>

            <section className="margin-bottom-1">
                <h2 className="text-center sm:text-4xl text-3xl ">
                    TELEPHONIC INTERPRETATION
                </h2>
            </section>
            <section className="margin-bottom-1">
                <ServiceSingle
                    background={'var(--wheat)'}
                    img={'VideoInterpretation.jpg'}
                    // logo={"telephonicInterpretation"}
                    innerText={
                        <>
                            <p className="m-0">
                                Language Service Solutions is proud to provide
                                your organization with the capacity to reach
                                your Spanish-speaking clients seamlessly and
                                without delay by offering our telephonic
                                interpretation service.
                            </p>
                            <br />
                            <h3 className="letter-spacing--small uppercase text-xl mb-2">
                                WHAT IS TELEPHONIC INTERPRETATION?
                            </h3>
                            <p className="m-0">
                                This type of interpretation refers to, as it
                                sounds, interpretation done over the phone. You
                                simply call us and the interpreter will walk you
                                through the simple process. The main difference
                                to all other types of interpretation is that
                                since it is done consecutively over the phone it
                                reduces the need for an interpreter to be
                                physically present at the time of the
                                appointment. Saving you time and money.
                            </p>
                            <br />

                            <h3 className="  letter-spacing--small uppercase text-xl mb-2">
                                EXAMPLES OF COMMON USES
                            </h3>
                            <p className="m-0">
                                Family therapies, one-on-one meetings or
                                sessions, follow-ups, interviews, house visits,
                                conference calls with clients, parent-teacher
                                conferences.
                            </p>
                            <br />

                            <h3 className="  letter-spacing--small uppercase text-xl mb-2">
                                DEPENDABLE. CONFIDENTIAL. AFFORDABLE.
                            </h3>
                            <p className="m-0">
                                Our team of professional interpreters will
                                guarantee you have a confidential and culturally
                                appropriate experience throughout the process.
                                Based in the Triangle, we are familiar with the
                                locations, organizations and the community,
                                giving us the local awareness and knowledge to
                                guarantee provide high quality service that is
                                relevant to your needs. Additionally, we can
                                offer to dispatch an interpreter to meet you
                                wherever you are, should your needs
                                change—something many other companies cannot
                                offer.
                            </p>
                            <br />
                            <h3 className="  letter-spacing--small uppercase text-xl mb-2">
                                QUESTIONS OR CONCERNS?
                            </h3>
                            <p className="m-0">
                                Still not sure if this service is right for you?
                                Call us today for your free consultation and
                                we’ll address any questions/concerns you have
                                and help you find the best solution for your
                                needs.
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
