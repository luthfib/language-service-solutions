import { useRef, useState } from 'react';

import AboutUsGallery from '../components/AboutUsGallery';
import Banner from '../components/Banner.jsx';
import ContactDetails from '../components/ContactDetails';
import Dots from '../components/Icons/dots';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
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
						bgColor={''}
						height={'90px'}
						width={'90%'}
						headingLevel={'h1'}
						color={'var(--dark-blue)'}
						margin={''}
						text={'Contact us'}
						dots={false}
					/>
				</section>

				<section className='margin-bottom-1'>
					<Dots direction={'up'} color={'#bcbcbc'} size={'10'} />
				</section>

				<section className='margin-bottom-1 img-wrapper'>
					<img src={`/imgs/Contact.jpg`} alt="Contact us" height="350" width="1260"/>
				</section>

				<section className='margin-bottom-1'>
					<ContactDetails />
				</section>
				<section className='margin-bottom-1'>
					<Banner
						bgColor={'var(--dark-blue)'}
						height={'90px'}
						width={'90%'}
						headingLevel={'h2'}
						color={'var(--white)'}
						margin={''}
						text={'Contact us'}
						dots={true}
					/>
				</section>
			</main>
			<Footer />

			<style jsx>{`
				.img-wrapper {
					height: 350px;
					text-align: center;
				}
				.img-wrapper img {
					height: 100%;
					width: 90%;
					object-fit: cover;
					border-radius: var(--border-radius);
				}

				@media (max-width: 768px) {
					.img-wrapper {
						height: 200px;
					}
				}
			`}</style>
		</div>
	);
}
