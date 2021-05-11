function Layout(props) {
	return (
		<div>
			{props.children}
			<style jsx global>{``}</style>
		</div>
	);
}

export default Layout;
