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
                title="Subtitling"
                description="Our experienced team offers the highest quality subtitling for all types of videos. We not only translate accurately but also localize the dialects, maintaining a smooth, relevant read."
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />

            <section className=" margin-bottom-2">
                <h1 className="text-center uppercase sm:text-6xl text-3xl mb-10">
                    Subtititling
                </h1>
            </section>
            <section className="margin-bottom-1">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>

            <section className="margin-bottom-1">
                <ServiceSingle
                    background="var(--wheat)"
                    logo={'subtitling'}
                    img={'Subtitling.jpg'}
                    innerText={
                        <>
                            <p className="m-0">
                                Our experienced team offers the highest quality
                                subtitling for all types of videos. We not only
                                translate accurately but also localize the
                                dialects, maintaining a smooth, relevant read.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                What is subtitling?
                            </h3>
                            <p className="m-0">
                                Subtitling is translating recorded speech from
                                one language to another and placing the text at
                                the bottom of a screen so that viewers who don’t
                                speak the original language can understand
                                what’s being said.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Examples of common uses
                            </h3>
                            <p className="m-0">
                                Video clips, speeches, commercials, movies, and
                                media campaigns
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Space and timing
                            </h3>
                            <p className="m-0">
                                We take great care to consider the length of
                                time a subtitle will appear and the number of
                                characters it can contain so viewers can read it
                                at normal speed. Our team is fluent in both the
                                target and source language, and understands the
                                parallels and contrasts between the two—cultural
                                and otherwise. Our attention to local nuance
                                gives viewers a comfortable reading experience
                                in which all cultural idioms and expressions
                                have been translated with a rigorous attention
                                to detail.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Questions? No problem.
                            </h3>
                            <p className="m-0">
                                We work closely with all of our clients to
                                provide service that’s efficient, effective, and
                                fast. Simply get in touch with our team to begin
                                working with a member dedicated to delivering
                                assistance at the highest standard of quality.
                            </p>
                        </>
                    }
                />
            </section>
        </>
    );
}
