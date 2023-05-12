import Button from '../../components/Button.jsx';
import Dots from '../../components/Icons/dots';
import React from 'react';
import { SEO } from '../../lib/utils/SEO.js';
import ServiceSingle from '../../components/TextBox';

export default function Home() {
    return (
        <>
            <SEO
                title="Translations"
                description="We provide the highest level of accuracy in translation. Our specialization in English - Spanish uses the latest software and a professional team to deliver the best work possible."
            />
            <section className="margin-top-1 margin-bottom-2">
                <Button
                    bgColor={''}
                    height={'90px'}
                    width={'90%'}
                    headingLevel={'h1'}
                    color={'var(--green-darker)'}
                    margin={''}
                    text={'Translation'}
                    dots={false}
                />
            </section>
            <section className="margin-bottom-1">
                <Dots direction={'up'} color={'var(--yellow)'} size={'10'} />
            </section>

            <section className="margin-bottom-1">
                <ServiceSingle
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
                            <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                                What is translation?
                            </h4>
                            <p className="m-0">
                                Translation is the transfer of a message from
                                one language to another in any written form.  
                            </p>
                            <br />
                            <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                                Examples of common uses
                            </h4>
                            <p className="m-0">
                                Books, brochures, surveys, speeches, press
                                releases, meeting minutes, and medical
                                information
                            </p>
                            <br />
                            <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                                Accuracy and experience
                            </h4>
                            <p className="m-0">
                                Our fast and reliable team of experienced
                                translators works to ensure an accurate
                                translation within your requested time frame.
                                Our many satisfied customers come to us for an
                                outstanding product.
                            </p>
                            <br />
                            <h4 className="headline text-white m-0 small-margin-bottom upperCase">
                                Have questions or need an estimate?
                            </h4>
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
        </>
    );
}
