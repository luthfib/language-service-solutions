import Dots from '../../components/Icons/dots';
import React from 'react';
import { SEO } from '../../lib/utils/SEO';
import ServiceSingle from '../../components/serviceSingle';
import Wave from '../../components/Wave';

export default function Home() {
    return (
        <>
            <SEO
                title="Translations"
                description="We provide the highest level of accuracy in translation. Our specialization in English - Spanish uses the latest software and a professional team to deliver the best work possible."
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />

            <section className=" margin-bottom-2">
                <h1 className="text-center uppercase sm:text-6xl text-3xl mb-10">
                    Translation
                </h1>
            </section>
            <section className="mb-16">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>

            <section className="mb-16">
                <ServiceSingle
                    background="var(--wheat)"
                    logo={'translation'}
                    img={'Translation.jpg'}
                    innerText={
                        <>
                            <p className="m-0">
                                We provide the highest level of accuracy in
                                translation. Our specialization in English -
                                Spanish uses the latest software and a
                                professional team to deliver the best work
                                possible.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                What is translation?
                            </h3>
                            <p className="m-0">
                                Translation is the transfer of a message from
                                one language to another in any written form.  
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Examples of common uses
                            </h3>
                            <p className="m-0">
                                Books, brochures, surveys, speeches, press
                                releases, meeting minutes, and medical
                                information
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Accuracy and experience
                            </h3>
                            <p className="m-0">
                                Our fast and reliable team of experienced
                                translators works to ensure an accurate
                                translation within your requested time frame.
                                Our many satisfied customers come to us for an
                                outstanding product.
                            </p>
                            <br />
                            <h3 className=" letter-spacing--small uppercase text-xl mb-2">
                                Have questions or need an estimate?
                            </h3>
                            <p className="m-0">
                                Please contact us by phone, e-mail, or through
                                this website. We’ll be happy to answer any
                                questions you may have as well as provide you
                                with a free estimate.
                            </p>
                        </>
                    }
                />
            </section>
            <Wave position={'bottom'} marginClass={'md:mt-[-8vw]'} />
        </>
    );
}
