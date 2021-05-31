import Head from "next/head";
import { useOnWindowScroll } from "../hooks/useOnWindowScroll";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useRef, useState} from 'react';

function Layout(props) {
	const [open, setOpen] = useState(false);
	const header = useRef();
	useOnWindowScroll(header, 'scrolled', 20);
	return (
		<>
		<Head>
			<title>Language Service Solutions</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<header ref={header}>
			<Navbar open={open} setOpen={setOpen}></Navbar>
		</header>
		<main className='container'>
			{props.children}
			<style jsx global>{``}</style>
		</main>
		<Footer/>
		</>
	);
}

export default Layout;
