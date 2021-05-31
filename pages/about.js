import React, { useRef, useState } from 'react';

import AboutUsGallery from '../components/AboutUsGallery';
import Banner from '../components/Banner.jsx';
import Container from '../components/Container';
import Dots from '../components/Icons/dots';
import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import StaffIcon from '../components/Icons/Staff';
import Textbox from '../components/TextBox';
import { useOnWindowScroll } from '../hooks/useOnWindowScroll';

export default function Home() {
	const [open, setOpen] = useState(false);
	const header = useRef();
	useOnWindowScroll(header, 'scrolled', 20);

	return (
		<div className='container'>
			<Head>
				<title>Language Service Solutions</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header ref={header}>
				<Navbar open={open} setOpen={setOpen}></Navbar>
			</header>

			<main>
				<section className='margin-top-1 margin-bottom-2'>
					<Banner
						height={'90px'}
						width={'100%'}
						headingLevel={'h1'}
						color={'var(--green-darker)'}
						margin={''}
						text={'About us'}
						dots={false}
					/>
				</section>
				<section className='margin-bottom-1'>
					<Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
				</section>

				<section className='margin-bottom-1'>
					<Container className='section' background='#edeae5'>
						<h2 className='headline'>MEET THE TEAM!</h2>
						<div className='staff-member-container'>
							<div className='staff-member'>
								<StaffIcon path='/staff/Farlan.svg' />
								<h3 className='staff-member-name letter-spacing--small all-caps'>Farlan Hermosa</h3>
								<p className='staff-member-description'>Un experto en esconderse en matas</p>
							</div>
							<div className='staff-member'>
								<StaffIcon path='/staff/Lucas.svg' />
								<h3 className='staff-member-name letter-spacing--small all-caps'>Lucas Franco</h3>
								<p className='staff-member-description'>Un duro con todo tecnologia</p>
							</div>
							<div className='staff-member'>
								<StaffIcon path='/staff/Chairin.svg' />
								<h3 className='staff-member-name letter-spacing--small all-caps'>Chairin Hermosa</h3>
								<p className='staff-member-description'>La profesora</p>
							</div>
							<div className='staff-member'>
								<StaffIcon path='/staff/Laura.svg' />
								<h3 className='staff-member-name letter-spacing--small all-caps'>Laura Bautista</h3>
								<p className='staff-member-description'>Experta en todo</p>
							</div>
							<div className='staff-member'>
								<StaffIcon path='/staff/Murtado.svg' />
								<h3 className='staff-member-name letter-spacing--small all-caps'>Murtado Bustillo</h3>
								<p className='staff-member-description'>
									Alias Funtado, traerá el mismo esfuerzo que ha traido del Fortnite a la
									traducción.{' '}
								</p>
							</div>
							<div className='staff-member'>
								<StaffIcon path='/staff/Latimah.svg' />
								<h3 className='staff-member-name letter-spacing--small all-caps'>Latimah B. Arrechea</h3>
								<p className='staff-member-description'>La quimica es una sabia</p>
							</div>
						</div>
					</Container>
				</section>

				<section className=' margin-bottom-1'>
					<Banner
						bgColor={''}
						height={'90px'}
						width={'90%'}
						headingLevel={'h2'}
						color={'var(--green-darker)'}
						margin={''}
						text={'Our team is ready to help you'}
						dots={false}
					/>
				</section>
				<section className='margin-bottom-1'>
					<Textbox
						textAlign={'center'}
						innerText={
							<>
								<p className='no-margin-top'>
									Language Service Solutions, LLC has over 20 years of experience providing
									translations, interpretation, and consulting around language services for
									organizations and communities. Our focus on facilitating meaningful community
									connections, eliminating language barriers and generating equity make us one of
									the most trusted full-service language providers in the Triangle. We work to
									ensure everyone’s voices are truly heard and included. Our company promotes best
									practices for creating inclusive multilingual spaces where all languages are
									valued equally and speakers of different languages benefit from listening to and
									sharing with one other..
								</p>
								<br />
								<p className='no-margin-top'>
									Our professional, friendly and experienced team works hard to provide our clients
									with the best service. We are bi-cultural/bilingual group of professionals who
									understand the subtle cultural difference that play a role in communication.
								</p>
								<br />
							</>
						}
					/>
				</section>
				<section className='margin-bottom-2'>
					<Banner
						bgColor={''}
						height={'90px'}
						headingLevel={'h2'}
						color={'var(--green-darker)'}
						margin={''}
						fontSize={'like-2'}
						text={'why us?'}
						dots={false}
					/>
				</section>

				<section className='margin-bottom-1'>
					<Dots direction={'up'} color={'var(--wheat)'} size={'10'} />
				</section>

				<section className='margin-bottom-1'>
					<Textbox
						textAlign={'center'}
						innerText={
							<>
								<p className='no-margin-top'>
									Language Service Solutions LLC, is proud to offer one of the most complete and
									affordable English Spanish services to bridge today's language gaps. Whatever your
									need is we can help. We offer simultaneous interpreting, video subtitling, written
									translation, interpretation, transcriptions and more. We have years of solid
									experience in the field ensuring our clients a high level of accuracy and
									efficiency.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Quality guaranteed. Every time.
								</h4>
								<p className='no-margin-top'>
									Our friendly and expert staff is equipped to meet the full range of communication
									needs. We abide by strict ethical standards while providing one of the most
									affordable services in the area. With more than 15 years of experience in this
									field, we work ardently to bring a professional standard of language services to
									our costumers.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Services tailored to fit.
								</h4>
								<p className='no-margin-top'>
									We work closely with you to create a custom plan that gives you superb service at
									an affordable price. Contact us at any time for rapid follow-up, beginning with a
									free, personalized quote.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Privacy
								</h4>
								<p className='no-margin-top'>
									We believe that trust is essential in all of our business relationships.
									Therefore, we will never share information with anyone. Your files will be
									restricted and password-protected. We maintain a high standard of confidentiality.
								</p>
							</>
						}
					/>
				</section>
			</main>
			<Footer />
			<style jsx>{`
				.staff-member-container {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					row-gap: 80px;
					padding-bottom: 40px;
					padding-top: 40px;
				}

				@media (max-width: 868px) {
					.staff-member-container {
						display: grid;
						grid-template-columns: 1fr;
						row-gap: 80px;
						padding-bottom: 40px;
						padding-top: 40px;
					}
				}

				.staff-member-name {
					text-align: center;
				}

				.staff-member-description {
					text-align: center;
					font-weight: 100;
				}

				.headline {
					text-align: center;
				}
			`}</style>
		</div>
	);
}
