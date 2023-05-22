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
                title="Transcriptions"
                description="Our team works at a professional level to provide affordable audio or video transcriptions with the the highest degree of word-for-word accuracy."
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />

            <section className=" margin-bottom-2">
                <h1 className="text-center uppercase sm:text-6xl text-3xl mb-10">
                    Transcriptions{' '}
                </h1>
            </section>
            <section className="margin-bottom-1">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>
            <section className="margin-bottom-1">
                <ServiceSingle
                    background="var(--wheat)"
                    logo={'transcription'}
                    img={'Transcription.jpg'}
                    innerText={
                        <>
                            <p className="m-0">
                                Our team works at a professional level to
                                provide affordable audio or video transcriptions
                                with the the highest degree of word-for-word
                                accuracy.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                What is transcription?
                            </h3>
                            <p className="m-0">
                                Transcription refers to taking any audio or
                                video file and converting it into a text file.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Examples of common uses
                            </h3>
                            <p className="m-0">
                                Focus groups, medical records, community
                                surveys, and research
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                We can help
                            </h3>
                            <p className="m-0">
                                Converting audio and video files to text
                                documents is a time-consuming process that can
                                place a significant burden on your business.
                                Here at Language Service Solutions, LLC, our
                                team is professionally trained to make this
                                process seamless, saving you time and money.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Questions or concerns?
                            </h3>
                            <p className="m-0">
                                We can work with a variety of file formats.
                                Contact us today. Our friendly team will respond
                                promptly with the answers you need for your
                                specific situation.  
                            </p>
                        </>
                    }
                />
            </section>
            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
