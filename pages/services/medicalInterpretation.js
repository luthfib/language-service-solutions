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
						text={'Medical Interpretation'}
						dots={false}
					/>
				</section>
				<section className='margin-bottom-1'>
					<Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
				</section>

				<section className='margin-bottom-1'>
					<ServiceSingle
						logo={'medicalInterpretation'}
						img={'TeamOutside.JPG'}
						innerText={
							<>
								<p className='no-margin-top'>
									We have more than 15 years of experience facilitating communication between
									patients with limited English proficiency, and physicians, nurses, lab
									technicians, and other healthcare providers.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Quality guaranteed. Every time.
								</h4>
								<p className='no-margin-top'>
									Our friendly staff knows the Triangle’s healthcare facilities and is equipped to
									meet the full range of their communication needs. We abide by strict ethical
									standards while providing one of the most affordable services in the area. With
									more than 15 years of experience in this field, we work ardently to bring a
									professional standard of language services to the medical community.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Experience to make a difference
								</h4>
								<p className='no-margin-top'>
									Our team of certified medical interpreters can ensure levels of accuracy,
									awareness of confidentiality requirements, and professionalism that many other
									companies cannot. Dedicated to quality, we let you relax, knowing that where
									attention to detail could determine a health outcome, you made the right choice.
									Our interpreters will always arrive on time, prepared to deliver the best service
									for the assignment. Our strict control process assures that we match your case
									with an interpreter with the right skills to handle it.
								</p>
								<br />
							</>
						}
					/>
				</section>
			</main>
			<Footer />
		</div>
	);
}
