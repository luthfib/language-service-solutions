import Link from 'next/link';
const ServiceCard = ({ logo, title, text }) => (
	<>
		<Link href={`services/${logo}`}>
			<a id={`${logo}`} className='card-wrapper'>
				<div className='card'>
					<div className='icon '>
						<img width='80px' height='80px' src={`/icons/${logo}.svg`} alt={logo} />
					</div>
					<h4>{title}</h4>
					<p>{text}</p>
				</div>
			</a>
		</Link>
		<style jsx>{`
			.card-wrapper {
				transition: transform 0.3s ease ;
			}
			.card-wrapper:focus, .card-wrapper:hover  {
				transform: scale(1.02);
			}

			.card-wrapper:hover .card, .card-wrapper:focus .card {
				background: #049692;
			}
	
			.card {
				background: var(--primary-medium);
				border-radius: var(--border-radius);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				box-shadow: var(--shadow-primary-medium);
				width: 100%;
				max-width: 300px;
				min-height: 390px;
				padding: 30px;
				text-align: center;
				margin: 0px 22.5px 45px 22.5px;
				transition: box-shadow 0.3s ease,  background-color 0.3s ease;
			}

			.icon {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 2px solid var(--white);
				border-radius: 50%;
				width: 150px;
				height: 150px;
			}

			h4 {
				margin: 10px 0 0px;
				font-size: 20px;
				text-transform: uppercase;
				font-weight: 300;
				letter-spacing: 2px;
			}

			p {
				margin: 0;
				font-size: 14px;
				font-weight: 700;
			}

			 {
				/* FOR LAST CARD */
			}
			#medicalInterpretation div {
				margin-bottom: 0;
			}

			@media (max-width: 768px) {
				.card {
					width: 100vw;
					max-width: var(--element-width);
					margin: 3% auto;
				}
			}
		`}</style>
	</>
);

export default ServiceCard;
