import Button from '../components/Button.jsx';
import Container from '../components/Container';
import Dots from '../components/Icons/dots';
import React from 'react';
import { SEO } from '../lib/utils/SEO.js';
import StaffIcon from '../components/Icons/Staff';
import Textbox from '../components/TextBox';
import Wave from '../components/Wave.jsx';

export default function Home() {
    return (
        <>
            <SEO
                title="Our Team"
                description="Murtado Bustillos founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years"
            />
            <Wave position={'top'} marginClass={'md:mb-[-7vw]'} />
            <section className="mb-10 ">
                <svg
                    className="max-w-md mb-8 w-full p-x"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 408.77 63.6"
                >
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                            <path
                                className="headline-svg"
                                d="m9.34,9.34c4.22-4.22,9.31-6.34,15.26-6.34s11.04,2.11,15.26,6.34c4.22,4.22,6.34,9.31,6.34,15.26v14.4c0,5.95-2.11,11.04-6.34,15.26-4.22,4.22-9.31,6.34-15.26,6.34s-11.04-2.11-15.26-6.34c-4.22-4.22-6.34-9.31-6.34-15.26v-14.4c0-5.95,2.11-11.04,6.34-15.26Zm31.46,29.66v-14.4c0-4.46-1.58-8.28-4.75-11.45-3.17-3.17-6.98-4.75-11.45-4.75s-8.28,1.58-11.45,4.75c-3.17,3.17-4.75,6.98-4.75,11.45v14.4c0,4.46,1.58,8.28,4.75,11.45s6.98,4.75,11.45,4.75,8.28-1.58,11.45-4.75,4.75-6.98,4.75-11.45Z"
                            />
                            <path
                                className="headline-svg"
                                d="m94.01,55.34c-3.5,3.5-7.75,5.26-12.74,5.26s-9.24-1.75-12.74-5.26c-3.5-3.5-5.26-7.75-5.26-12.74V3h5.4v39.6c0,3.5,1.24,6.48,3.71,8.93,2.47,2.45,5.44,3.67,8.89,3.67s6.42-1.22,8.89-3.67c2.47-2.45,3.71-5.42,3.71-8.93V3h5.4v39.6c0,4.99-1.75,9.24-5.26,12.74Z"
                            />
                            <path
                                className="headline-svg"
                                d="m132.53,3c5.47,0,10.14,1.93,14,5.8,3.86,3.86,5.8,8.53,5.8,14,0,3.36-1.06,6.76-3.17,10.19-2.11,3.43-4.66,5.92-7.63,7.45,1.15.72,2.36,1.76,3.64,3.13,1.27,1.37,2.24,2.65,2.92,3.85.67,1.25,1.25,2.8,1.73,4.64.48,1.85.72,3.49.72,4.93v3.6h-5.4v-3.6c0-3.98-1.4-7.38-4.21-10.19-2.81-2.81-6.2-4.21-10.19-4.21h-9v18h-5.4V3h16.2Zm10.15,29.95c1.2-1.15,2.21-2.72,3.02-4.72.82-1.99,1.22-3.8,1.22-5.44,0-3.98-1.4-7.38-4.21-10.19-2.81-2.81-6.2-4.21-10.19-4.21h-10.8v28.8h10.87c1.63,0,3.43-.41,5.4-1.22,1.97-.82,3.53-1.82,4.68-3.02Z"
                            />
                            <path
                                className="headline-svg"
                                d="m218.71,60.6V8.4h-15.34V3h36v5.4h-15.26v52.2h-5.4Z"
                            />
                            <path
                                className="headline-svg"
                                d="m261.84,60.6h-5.4V3h36v5.4h-30.6v16.2h16.2v5.4h-16.2v25.2h30.6v5.4h-30.6Z"
                            />
                            <path
                                className="headline-svg"
                                d="m319.37,44.4l-2.16,8.14-2.09,8.06h-5.62l7.63-28.8,7.63-28.8h5.47l7.63,28.8,7.63,28.8h-5.4l-2.09-8.06-2.16-8.14h-16.49Zm8.14-30.53l-3.31,12.53-3.38,12.6h13.61l-3.38-12.6-3.31-12.53-.07.22-.07.22v-.22l-.07-.22Z"
                            />
                            <path
                                className="headline-svg"
                                d="m367.97,42.24v18.36h-5.4V3h5.4l8.14,10.8,8.06,10.8,8.14-10.8,8.06-10.8h5.4v57.6h-5.4V12l-5.9,7.92-5.98,7.92-2.16,2.88-2.16,2.88-2.16-2.88-2.16-2.88-5.9-7.92-5.98-7.92v30.24Z"
                            />
                        </g>
                    </g>
                    <style>
                        {`
                            .headline-svg {
                                fill: none;
                                stroke: var(--green-darker);
                                stroke-miterlimit: 10;
                                stroke-width: 6px;
                            }
                        `}
                    </style>
                </svg>

                <h1 className="opacity-0 absolute left-0"> Our Team</h1>
            </section>

            <section className="margin-bottom-1">
                <Dots direction={'up'} color={'var(--yellow)'} size={'25'} />
            </section>

            <section className="margin-bottom-1">
                <Container className="section" background="var(--wheat)">
                    <h2 className="text-center sm:text-4xl text-3xl mb-14">
                        MEET THE TEAM!
                    </h2>
                    <div className="staff-member-container">
                        <div className="staff-member">
                            <StaffIcon path="/staff/Farlan.svg" />
                            <h3 className="text-center letter-spacing--small uppercase text-xl mt-6 mb-4">
                                Farlan Hermosa
                            </h3>
                            <p className="text-center font-thin">
                                Joined the Language Services Solutions team in
                                2016 as a translator and has since advanced to
                                providing expertise for media projects. Farlan
                                holds a Bachelor of Arts in Visual Art and
                                Multimedia Production. He enjoys using his
                                skills to ensure content is adapted to the
                                preferences and needs of the client and their
                                target audience. In his free time, Farlan enjoys
                                photography.
                            </p>
                        </div>
                        <div className="staff-member">
                            <StaffIcon path="/staff/Lucas.svg" />
                            <h3 className="text-center letter-spacing--small uppercase text-xl mt-6 mb-4">
                                Oscar Franco
                            </h3>
                            <p className="text-center font-thin">
                                Joined the Language Services solutions team in
                                2020 and focuses on technical translations,
                                writing and editing. Oscar is a software
                                engineer with experience in project management,
                                digital animation, and technical writing. He
                                worked on a series of interactive media projects
                                that highlighted the diverse cultures in the
                                many regions of Colombia, South America
                                including the widely recognized Mi Finquita
                                Cafetera. He likes to work on projects that
                                combine technical expertise and an understanding
                                of the target audience. Oscar loves game
                                development and animation.
                            </p>
                        </div>
                        <div className="staff-member">
                            <StaffIcon path="/staff/Chairin.svg" />
                            <h3 className="text-center letter-spacing--small uppercase text-xl mt-6 mb-4">
                                Chairin Hermosa
                            </h3>
                            <p className="text-center font-thin">
                                Joined the Language Service Solutions team in
                                2017 as a translator and has expanded her scope
                                of work to include transcriptions, editing and
                                interpretation in Spanish and English. Chairin
                                holds a Bachelor of Arts in Education, majoring
                                in Languages and Childhood Education. She values
                                human interaction and fellowship—two elements
                                that have been essential in her work as a
                                teacher and as an interpreter in diverse
                                contexts and settings, primarily around
                                community engagement. Chairin enjoys music,
                                dancing, and playing the guitar.
                            </p>
                        </div>
                        <div className="staff-member">
                            <StaffIcon path="/staff/Laura.svg" />
                            <h3 className="text-center letter-spacing--small uppercase text-xl mt-6 mb-4">
                                Laura Bautista
                            </h3>
                            <p className="text-center font-thin">
                                Joined the Language Services Solutions team in
                                2020 and uses her skills and experience to
                                support project management and technical
                                writing. Laura holds a Bachelor of Arts in
                                International Business Administration and enjoys
                                working on projects that serve and empower
                                communities and focus on language justice and
                                access. She loves to spend time with her family
                                and travel in her free time.
                            </p>
                        </div>
                        <div className="staff-member">
                            <StaffIcon path="/staff/Murtado.svg" />
                            <h3 className="text-center letter-spacing--small uppercase text-xl mt-6 mb-4">
                                Murtado Bustillos
                            </h3>
                            <p className="text-center font-thin">
                                Founded Language Service Solutions based on the
                                expertise he built around translation and
                                interpretation work over the past 20 years. His
                                experience spans a variety of areas and
                                contexts, including providing language services
                                for the local community, non-profit and health
                                care organizations, universities and research
                                projects, and other community-centered projects.
                                He is passionate about working with
                                organizations to provide language access and
                                create a spirit of inclusion and belonging in
                                communities.
                            </p>
                            <p className="text-center font-thin">
                                Murtado is conscientious about the diversity of
                                the communities where he works, acknowledging
                                that no single approach works for everyone. He
                                continues to educate himself on emerging
                                technologies, community and client needs, as
                                well as best practices, to provide the most
                                comprehensive solutions that work for each of
                                his clients’ individual needs. In his free time,
                                he enjoys playing volleyball and traveling.
                            </p>
                        </div>
                        <div className="staff-member">
                            <StaffIcon path="/staff/Latimah.svg" />
                            <h3 className="text-center letter-spacing--small uppercase text-xl mt-6 mb-4">
                                Latimah B. Arrechea
                            </h3>
                            <p className="text-center font-thin">
                                Joined the Language Service Solutions team in
                                2010. She provides support in document
                                translation and transcriptions, both in English
                                and Spanish. Latimah holds a Bachelor of Science
                                in Chemistry. She is fluent in Spanish, English,
                                Indonesian and Portuguese. Her travels across
                                the globe contributed to her passion for
                                languages and research, and provided a solid
                                foundation in her understanding of and respect
                                for cultural diversity. She loves community work
                                and sees language justice work as an opportunity
                                to break down racial inequalities and improve
                                access to opportunities. Latimah enjoys cooking,
                                dancing and spending time with her family.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="margin-bottom-1">
                <h2 className="text-center sm:text-4xl text-3xl  margin-bottom-2">
                    Our team is ready to help you
                </h2>
                <div className="max-w-2xl">
                    <p className="m-0">
                        Our team is passionate about language access and
                        justice, understanding and addressing the diverse
                        communication and language needs of communities, and
                        engaging with clients and the communities we serve.
                    </p>
                </div>
            </section>

            <section className="margin-bottom-1">
                <h2 className="sm:text-4xl text-3xl margin-bottom-2">
                    Why us?
                </h2>
                <div className="max-w-2xl">
                    <p className="m-0">
                        Language Service Solutions LLC, is proud to offer one of
                        the most complete and affordable English Spanish
                        services to bridge today's language gaps. Whatever your
                        need is we can help. We offer simultaneous interpreting,
                        video subtitling, written translation, interpretation,
                        transcriptions and more. We have years of solid
                        experience in the field ensuring our clients a high
                        level of accuracy and efficiency.
                    </p>
                    <br />
                    <h3 className="text-center text-2xl  mb-3 upperCase">
                        Quality guaranteed. Every time.
                    </h3>
                    <p className="m-0">
                        Our friendly and expert staff is equipped to meet the
                        full range of communication needs. We abide by strict
                        ethical standards while providing one of the most
                        affordable services in the area. With more than 15 years
                        of experience in this field, we work ardently to bring a
                        professional standard of language services to our
                        costumers.
                    </p>
                    <br />
                    <h3 className="text-center text-2xl mb-3 upperCase">
                        Services tailored to fit.
                    </h3>
                    <p className="m-0">
                        We work closely with you to create a custom plan that
                        gives you superb service at an affordable price. Contact
                        us at any time for rapid follow-up, beginning with a
                        free, personalized quote.
                    </p>
                    <br />
                    <h3 className="text-center text-2xl  mb-3 upperCase">
                        Privacy
                    </h3>
                    <p className="m-0">
                        We believe that trust is essential in all of our
                        business relationships. Therefore, we will never share
                        information with anyone. Your files will be restricted
                        and password-protected. We maintain a high standard of
                        confidentiality.
                    </p>
                </div>
            </section>
            <Wave position={'bottom'} marginClass={''} />

            <style jsx>{`
                .staff-member-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    row-gap: 80px;
                    column-gap: 30px;
                }

                @media (max-width: 868px) {
                    .staff-member-container {
                        display: grid;
                        grid-template-columns: 1fr;
                        row-gap: 80px;
                        column-gap: 30px;
                    }
                }
            `}</style>
        </>
    );
}
