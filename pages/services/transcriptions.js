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
						text={'Transcriptions'}
						dots={false}
					/>
				</section>
				<section className='margin-bottom-1'>
					<Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
				</section>

				<section className='margin-bottom-1'>
					<ServiceSingle
						logo={'transcriptions'}
						img={'Transcription.jpg'}
						innerText={
							<>
								<p className='no-margin-top'>
									Our team works at a professional level to provide affordable audio or video
									transcriptions with the the highest degree of word-for-word accuracy.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									What is transcription?
								</h4>
								<p className='no-margin-top'>
									Transcription refers to taking any audio or video file and converting it into a
									text file.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Examples of common uses
								</h4>
								<p className='no-margin-top'>
									Focus groups, medical records, community surveys, and research
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									We can help
								</h4>
								<p className='no-margin-top'>
									Converting audio and video files to text documents is a time-consuming process
									that can place a significant burden on your business. Here at Language Service
									Solutions, LLC, our team is professionally trained to make this process seamless,
									saving you time and money.
								</p>
								<br />
								<h4 className='headline text-white no-margin-top small-margin-bottom upperCase'>
									Questions or concerns?
								</h4>
								<p className='no-margin-top'>
									We can work with a variety of file formats. Contact us today. Our friendly team
									will respond promptly with the answers you need for your specific situation.  
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
