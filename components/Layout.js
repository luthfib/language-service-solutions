import { useRef, useState } from 'react';

import Footer from './Footer';
import Head from 'next/head';
import Navbar from './Navbar';
import { useOnWindowScroll } from '../lib/hooks/useOnWindowScroll';
import { useRouter } from 'next/router';

function Layout(props) {
    const [open, setOpen] = useState(false);
    const header = useRef();
    useOnWindowScroll(header, 'scrolled', 20);
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    return (
        <>
            <Head>
                <title>Language Service Solutions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header ref={header} className={`${isHomePage ? 'homepage' : ''}`}>
                <Navbar open={open} setOpen={setOpen}></Navbar>
            </header>
            <main className="container">
                {props.children}
                <style jsx global>{``}</style>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
