import React, { useRef, useState } from 'react';

import Banner from '../../components/Banner.jsx';
import Dots from '../../components/Icons/dots';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import ServiceSingle from '../../components/TextBox';
import { useOnWindowScroll } from '../../hooks/useOnWindowScroll';

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
						bgColor={''}
						height={'90px'}
						width={'90%'}
						headingLevel={'h1'}
						color={'var(--green-darker)'}
						margin={''}
						text={'Telephonic Interpretation'}
						dots={false}
					/>
				</section>
				<section className='margin-bottom-1'>
					<Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
				</section>

				<section className='margin-bottom-1'>
					<ServiceSingle
						logo={'telephonicInterpretation'}
						img={'TeamOutside.JPG'}
						innerText={
							<>
								<p className='no-margin-top'>
									Language Service Solutions is proud to provide your organization with the capacity
									to reach your Spanish-speaking clients seamlessly and without delay by offering
									our telephonic interpretation service
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									What is telephonic interpretation?
								</h4>
								<p className='no-margin-top'>
									This type of interpretation refers to, as it sounds, interpretation done over the
									phone. You simply call us and the interpreter will walk you through the simple
									process. The main difference to all other types of interpretation is that since it
									is done over the phone it reduces the need for an interpreter to be physically
									present at the time of the appointment. Saving you time and money.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Examples of common uses
								</h4>
								<p className='no-margin-top'>
									Family therapies, one-on-one meetings or sessions, follow-ups, interviews, house
									visits, conference calls with clients, parent-teacher conferences
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Dependable. Confidential. Affordable.
								</h4>
								<p className='no-margin-top'>
									Our team of professional interpreters will guarantee you have a confidential and
									culturally appropriate experience throughout the process. Based in the Triangle,
									we are familiar with the locations, organizations and the community, giving us the
									local awareness and knowledge to guarantee high quality service that is relevant
									to your needs. Additionally, we can offer to dispatch an interpreter to meet you
									wherever you are should your needs change, something many other companies cannot
									offer.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Questions or concerns?
								</h4>
								<p className='no-margin-top'>
									Still not sure if this service is right for you? Call us today for your free
									consultation and we’ll address any questions/concerns you have and help you find
									the best solution for your needs.
								</p>
							</>
						}
					/>
				</section>
			</main>
			<Footer />
		</div>
	);
}
