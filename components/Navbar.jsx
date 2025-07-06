'use client';

import Link from 'next/link';
import Logo from './Icons/logo';
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from '../styles/modules/Navbar.module.css';

const Navbar = ({ open, setOpen }) => {
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <div className={styles.navigation} ref={node}>
            <Link href="/" className={styles.logoWrapper}>
                <Logo width={70} height={70} />
            </Link>
            <button
                className={styles.hamburger}
                open={open}
                onClick={() => setOpen(!open)}
                aria-pressed={open}
                aria-label="Menu"
            ></button>
            <nav
                className={`${styles.nav} ${
                    open ? styles.open : styles.closed
                }`}
            >
                <ul>
                    <li
                        className={pathname == '/' ? 'active' : ''}
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/">home</Link>
                    </li>

                    <li
                        className={
                            pathname == '/services' ||
                            pathname.split('/')[1] == 'services'
                                ? 'active'
                                : ''
                        }
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/services">services</Link>
                    </li>
                    <li
                        className={pathname == '/ourteam' ? 'active' : ''}
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/ourteam">our team</Link>
                    </li>
                    <li
                        className={pathname == '/testimonials' ? 'active' : ''}
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/testimonials">Testimonials</Link>
                    </li>
                    <li
                        className={pathname == '/contact' ? 'active' : ''}
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
            <button
                className={`${styles.hamburger} relative`}
                open={open}
                onClick={() => setOpen(!open)}
                aria-pressed={open}
                aria-label="Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={`${!isHomePage ? 'white' : 'var(--green-darker)'}`}
                    style={
                        open
                            ? {
                                  opacity: '0',
                                  visibility: 'hidden',
                              }
                            : {}
                    }
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                <svg
                    className="w-10 h-10 absolute left-0 top-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={`white`}
                    style={
                        open
                            ? {}
                            : {
                                  opacity: '0',
                                  position: 'absolute',
                                  visibility: 'hidden',
                              }
                    }
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default Navbar;
