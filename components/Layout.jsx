'use client';

import { useRef, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useOnWindowScroll } from '../lib/hooks/useOnWindowScroll';
import { usePathname } from 'next/navigation';

function Layout(props) {
    const [open, setOpen] = useState(false);
    const header = useRef();
    useOnWindowScroll(header, 'scrolled', 20);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    return (
        <>
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
