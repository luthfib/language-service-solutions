import Link from 'next/link';
import Logo from './Icons/logo';
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Navbar = ({ open, setOpen }) => {
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <div className="navigation" ref={node}>
            <Link href="/" legacyBehavior>
                <div className="logo-wrapper">
                    <Logo
                        width={'var(--logo-size)'}
                        height={'var(--logo-size)'}
                    />
                </div>
            </Link>
            <button
                className="hamburger"
                open={open}
                onClick={() => setOpen(!open)}
                aria-pressed={open}
                aria-label="Menu"
            ></button>
            <nav className="nav">
                <ul>
                    <li
                        className={router.pathname == '/' ? 'active' : ''}
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/" legacyBehavior>
                            <a>home</a>
                        </Link>
                    </li>

                    <li
                        className={
                            router.pathname == '/services' ||
                            router.pathname.split('/')[1] == 'services'
                                ? 'active'
                                : ''
                        }
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/services" legacyBehavior>
                            <a>services</a>
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname == '/ourteam' ? 'active' : ''
                        }
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/ourteam" legacyBehavior>
                            <a href="/team">our team</a>
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname == '/testimonials' ? 'active' : ''
                        }
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/testimonials" legacyBehavior>
                            <a>Testimonials</a>
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname == '/contact' ? 'active' : ''
                        }
                        onClick={() => setOpen(false)}
                    >
                        <Link href="/contact" legacyBehavior>
                            <a href="/contact">contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <button
                className="hamburger"
                open={open}
                onClick={() => setOpen(!open)}
                aria-pressed={open}
                aria-label="Menu"
            >
                {!open ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={`${
                            !isHomePage ? 'white' : 'var(--green-darker)'
                        }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                ) : (
                    <svg
                        className="w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={`white`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                )}
            </button>
            <style jsx global>
                {`
                    .navigation {
                        --space: 10px;
                        --hamburger-size: 30px;
                        --logo-size: 70px;
                        --logo-circle: 80px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: var(--nav-height);
                        width: 100%;
                        margin: 0 auto;
                        transition: height 0.3s ease;
                        padding: 0 20px;
                    }

                    .logo-wrapper {
                        height: var(--logo-circle);
                        width: var(--logo-circle);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: height 0.3s ease, width 0.3s ease;
                    }

                    .hamburger {
                        background-color: var(--transparent);
                        display: none;
                        border: 0;
                        background-repeat: no-repeat;
                        cursor: pointer;
                        transition: transform 0.3s ease, height 0.3s ease,
                            width 0.3s ease;
                    }
                    .hamburger:focus {
                        outline: 0;
                    }

                    .hamburger:hover {
                        transform: scale(1.05);
                    }

                    .nav ul {
                        display: flex;
                        style-type: none;
                        justify-content: flex-end;
                        list-style: none;
                        margin: 0;
                    }

                    .nav li {
                        padding: 0px calc(var(--space) * 2.5);
                        position: relative;
                    }

                    .nav li:after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);
                        height: 15px;
                        width: 1px;
                        background-color: var(--green-darker);
                    }

                    .nav li:last-of-type:after {
                        content: none;
                    }

                    .nav li a {
                        text-transform: uppercase;
                        cursor: pointer;
                        display: inline-block;
                        transition: color 0.1s ease;
                        position: relative;
                        text-decoration: none;
                        color: var(--green-darker);
                        letter-spacing: 3.5px;
                        font-size: 18px;
                        line-height: 1;
                    }

                    .nav li a::after {
                        content: '';
                        position: absolute;
                        top: calc(100% + 10px);
                        left: 50%;
                        background-color: var(--wheat);
                        width: 7px;
                        height: 7px;
                        border-radius: 50%;
                        transform: translateX(-50%);
                        opacity: 0;
                    }

                    .nav li.active a::after {
                        opacity: 1;
                    }

                    .nav li.active a {
                        color: var(--white);
                    }

                    @media (hover: hover) {
                        .nav li a:hover {
                            color: var(--white);
                        }
                        .homepage .nav li a:hover {
                            color: var(--green);
                        }
                    }

                    .nav li a:hover::after {
                        opacity: 1;
                    }

                    @media (min-width: 768px) {
                        .homepage .nav li.active a {
                            color: var(--green);
                        }
                        @media (hover: hover) {
                            .homepage .nav li a:hover {
                                color: var(--green);
                            }
                        }
                        .homepage .nav li a::after {
                            background-color: var(--green);
                        }
                    }

                    @media (max-width: 768px) {
                        .navigation {
                            --logo-size: 50px;
                            --logo-circle: 70px;
                        }

                        .hamburger {
                            display: block;
                            z-index: 2;
                        }

                        .nav {
                            top: 0;
                            left: -50%;
                            height: 100vh;
                            width: 50%;
                            order: 1;
                            position: absolute;
                            background-color: var(--primary-medium);
                            opacity: 0.95;
                            transition: transform 0.7s ease-out;
                            transform: ${open
                                ? 'translateX(100%)'
                                : 'translateX(-50%)'};
                        }

                        .nav ul {
                            flex-direction: column;
                            justify-content: flex-start;
                            position: absolute;
                            top: calc(var(--nav-height));
                            padding-left: calc(var(--space) * 2.5);
                            padding-left: 0;
                        }

                        .nav li {
                            padding: 0px 0px calc(var(--space) * 3)
                                calc(var(--space) * 3);
                            border: 0;
                        }

                        .nav li a {
                            color: var(--color-text);
                        }

                        .nav li a::after {
                            top: calc(50%);
                            left: calc(var(--space) * -1.5);
                            transform: translateY(-50%);
                            background: #323131;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Navbar;
