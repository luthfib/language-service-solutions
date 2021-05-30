import React, { useRef, useState } from 'react';

import AboutUs from '../components/AboutUsSection';
import Banner from '../components/Banner.jsx';
import ComingSoon from '../components/ComingSoon';
import Dots from '../components/Icons/dots';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Services from '../components/ServicesElement';
import { useOnWindowScroll } from '../hooks/useOnWindowScroll';

const Home = (props) => {
	const [open, setOpen] = useState(false);
	const header = useRef();
	useOnWindowScroll(header, 'scrolled', 20);
	console.log(process.env.NEXT_PUBLIC_MAINTENANCE);
	const underMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE == 'true';

	return (
		<>
			<Head>
				<title>Language Service Solutions</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{!underMaintenance ? (
				<div className='container'>
					<header ref={header}>
						<Navbar open={open} setOpen={setOpen}></Navbar>
					</header>
					<main>
						<section className='margin-bottom-1'>
							<Gallery />
						</section>

						<section className='margin-bottom-1'>
							<Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
						</section>
						<section className='margin-bottom-1'>
							<AboutUs />
						</section>
						<section className='margin-bottom-1'>
							<Services />
						</section>
						<section className='margin-bottom-1'>
							<Banner
								bgColor={'var(--dark-blue)'}
								height={'90px'}
								width={'90%'}
								headingLevel={'h2'}
								color={'var(--white)'}
								margin={''}
								text={'Book a service'}
								dots={true}
							/>
						</section>
					</main>
					<Footer />
				</div>
			) : (
				<ComingSoon />
			)}
		</>
	);
};

export default Home;
