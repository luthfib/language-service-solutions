import Dots from './Icons/dots';

const hasDots = ({
	dots,
	headingLevel,
	bgColor = '',
	color,
	width = '100%',
	margin,
	text,
	height,
	link = 'mailto:murtado@languageservicesolutions',
}) => {
	if (dots) {
		const HeadingLevel = `${headingLevel}`;
		return (
			<>
				<style jsx>
					{`
						.banner-wrapper {
							--element-padding: 40px 0px;
							width: var(--element-width, ${width});
							padding: var(--element-padding);
							display: flex;
							justify-content: center;
							transition: transform 0.3s ease;
							pointer-events: ${bgColor ? 'all;' : 'none;'};
						}

						@media (hover: hover) {
							.banner-wrapper:hover {
								cursor: ${bgColor ? 'pointer;' : 'auto;'};
								transform: ${bgColor ? 'scale(1.02);' : 'none;'};
							}
						}
						.banner {
							background: ${bgColor};
							border-radius: var(--border-radius);
							height: ${bgColor ? height : 'unset'};
							width: 100%;
							display: flex;
							justify-content: space-around;
							align-items: center;
							box-shadow: var(--elevation-3-green-darker);
							padding: 0 10px;
						}

						${headingLevel} {
							color: ${color};
							text-transform: uppercase;
							text-align: center;
							padding: 0 5px;
							margin: 0;
							font-weight: 400;
						}
					`}
				</style>
				<a href={link} className='banner-wrapper'>
					<div className={`banner ${margin}`}>
						<Dots direction={'right'} color={color} size={'10'} />
						<HeadingLevel>{text}</HeadingLevel>
						<Dots direction={'left'} color={color} size={'10'} />
					</div>
				</a>
			</>
		);
	} else {
		const HeadingLevel = `${headingLevel}`;
		return (
			<>
				<style jsx>
					{`
						.banner-wrapper {
							--element-padding: 40px 0px;
							width: var(--element-width, ${width});
							display: flex;
							justify-content: center;
							transition: transform 0.3s ease;
							pointer-events: ${bgColor ? 'all;' : 'none;'};
						}
						@media (hover: hover) {
							.banner-wrapper:hover {
								cursor: ${bgColor ? 'pointer;' : 'auto;'};
								transform: ${bgColor ? 'scale(1.02);' : 'none;'};
							}
						}

						.banner {
							background: ${bgColor};
							border-radius: var(--border-radius);
							height: ${bgColor ? height : 'unset'};
							width: 100%;
							display: flex;
							justify-content: space-around;
							align-items: center;
						}

						${headingLevel} {
							color: ${color};
							text-transform: uppercase;
							text-align: center;
							margin: 0;
							font-weight: 400;
						}

					`}
				</style>
				<a href={link} className='banner-wrapper'>
					<div className={`banner ${margin}`}>
						<HeadingLevel>{text}</HeadingLevel>
					</div>
				</a>
			</>
		);
	}
};

const Banner = ({ dots, headingLevel, bgColor, color, width, margin, text, height, link }) => (
	<>{hasDots({ dots, headingLevel, bgColor, color, width, margin, text, height, link })}</>
);

export default Banner;
