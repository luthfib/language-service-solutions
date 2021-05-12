import Banner from './Banner.jsx';
const ServicesElement = (props) => (
	<>
		<div className='services'>
			<h2>Services We Offer</h2>
			<div className='services-container'>
				<div className='service telephone'>
					<a href='/services/telephonicInterpretation' className='icon '>
						<img
							width='50px'
							height='50px'
							src='/icons/telephonicInterpretation.svg'
							alt='Telephone'
						/>
					</a>
					<p>Telephonic Interpretations</p>
				</div>

				<div className='service medical'>
					<a href='/services/medicalInterpretation' className='icon '>
						<img
							width='50px'
							height='50px'
							src='/icons/medicalInterpretation.svg'
							alt='medical interpretation'
						/>
					</a>
					<p>Medical Interpretation</p>
				</div>

				<div className='service translation'>
					<a href='/services/translation' className='icon '>
						<img width='50px' height='50px' src='/icons/translation.svg' alt='translation' />
					</a>
					<p>translation</p>
				</div>

				<div className='service video'>
					<a href='/services/videoInterpretation' className='icon '>
						<img
							width='50px'
							height='50px'
							src='/icons/videoInterpretation.svg'
							alt='video interpretation'
						/>
					</a>
					<p>video Interpretation</p>
				</div>

				<div className='service simultaneus'>
					<a href='/services/simultaneousInterpretation' className='icon '>
						<img
							width='50px'
							height='50px'
							src='/icons/simultaneousInterpretation.svg'
							alt='simultaneous interpretation'
						/>
					</a>
					<p>simultaneus Interpretation</p>
				</div>

				<div className='service transcriptions'>
					<a href='/services/transcriptions' className='icon '>
						<img width='50px' height='50px' src='/icons/transcriptions.svg' alt='transcription' />
					</a>
					<p>transcriptions</p>
				</div>

				<div className='service subs'>
					<a href='/services/subtitling' className='icon '>
						<img width='50px' height='50px' src='/icons/subtitling.svg' alt='subtitling' />
					</a>
					<p>subtitling</p>
				</div>
			</div>
			<Banner
				link={'/services/'}
				bgColor={'#fff8f83b'}
				height={'35px'}
				headingLevel={'h4'}
				color={'var(--white)'}
				text={'MORE INFORMATION'}
				dots={false}
			/>
		</div>
		<style jsx>{`
			.services {
				background: var(--primary-medium);
				border-radius: var(--border-radius);
				width: var(--element-width);
				padding: var(--element-padding);
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				height: 740px;
				box-shadow: var(--shadow-primary-medium);
			}

			.services-container {
				position: relative;
				padding: 0 10%;
				height: 100%;
				width: 100%;
				max-width: 500px;
				text-align: center;
				margin-top: 20px;
			}

			.service {
				--distance: 90px;
				--left: 5%;
				--right: 5%;

				position: absolute;
				display: inline-flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
				width: min-content;
				text-transform: uppercase;
			}

			.service.telephone {
				top: 0%;
				left: calc(var(--left) * 10);
				transform: translateX(-50%);
			}
			.service.medical {
				top: var(--distance);
				left: var(--left);
			}
			.service.translation {
				top: var(--distance);
				right: var(--right);
			}

			.service.video {
				top: calc(var(--distance) * 2);
				left: calc(var(--left) * 10);
				transform: translateX(-50%);
			}

			.service.simultaneus {
				top: calc(var(--distance) * 3);
				left: var(--left);
			}

			.service.transcriptions {
				top: calc(var(--distance) * 3);
				right: var(--right);
			}

			.service.subs {
				top: calc(var(--distance) * 4);
				left: calc(var(--left) * 10);
				transform: translateX(-50%);
			}

			.icon {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 2px solid #000;
				border-radius: 50%;
				width: 100px;
				height: 100px;
				filter: invert(100%);
				transition: transform 0.3s ease;
			}

			.icon:hover {
				transform: scale(1.08);
			}

			h2 {
				text-align: center;
				color: var(--white);
				text-transform: uppercase;
			}

			p {
				width: 90%;
				margin-top: 8px;
			}

			@media (max-width: 768px) {
				.services {
					height: 930px;
				}

				.service {
					--distance: 100px;
					--left: 0%;
					--right: 0%;
				}

				.service.telephone {
					top: 0%;
					transform: translateX(0%);
				}
				.service.medical {
					top: 0%;
					right: var(--right);
					left: auto;
					transform: translateX(0%);
				}

				.service.translation {
					top: calc(var(--distance) * 1.8);
				}

				.service.video {
					top: calc(var(--distance) * 3.6);
					left: var(--left);
					right: auto;
					transform: translateX(0%);
				}

				.service.simultaneus {
					top: calc(var(--distance) * 1.8);
				}

				.service.transcriptions {
					top: calc(var(--distance) * 3.6);
					left: auto;
					right: var(--right);
				}

				.service.subs {
					--left: 5%;
					top: calc(var(--distance) * 5.5);
				}
			}
		`}</style>

		<style jsx global>
			{`
				.services .banner-wrapper {
					--element-width: 350px;
				
				}

				.services .banner {
					transition: background-color 0.3s ease;
					border-radius: var(--border-radius);
					padding: 1.25em;
				}

				.banner:hover {
					background-color: var(--white);
				}

				.banner:hover h4 {
					color: var(--primary-medium);
					transition: color 0.3s ease;
				}

				@media (max-width: 768px) {
					.services .banner-wrapper {
					--element-width: 280px;
				}
				
			`}
		</style>
	</>
);

export default ServicesElement;
