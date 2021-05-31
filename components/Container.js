const Container = ({ children, background }) => (
	<>
		<div className='container'>
			<div className='inner-container'>{children}</div>
		</div>
		<style jsx>{`
			.container {
				display: flex;
				flex-direction: column;
				width: 100%;
				justify-content: center;
				align-items: center;
			}

			.inner-container {
				background: ${background || 'var(--primary-medium)'};
				border-radius: var(--border-radius);
				width: var(--element-width);
				padding: var(--element-padding);
				box-shadow: var(--elevation-3-wheat);
				display: flex;
				flex-flow: column;
				font-weight: bold;
			}
		`}</style>
	</>
);

export default Container;
