'use client';

import Link from 'next/link';
import Logo from './Icons/logo';
import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';

const Navbar = ({ open, setOpen }) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <>
            <div className="flex justify-between items-center h-(--nav-height) w-full mx-auto transition-[height] duration-300 ease-in-out px-5 max-w-[var(--content-width)] min-h-[var(--nav-height)] md:[--logo-size:70px] md:[--logo-circle:80px] [--logo-size:50px] [--logo-circle:70px]">
            <Link href="/" className="h-(--logo-circle) w-[var(--logo-circle)] flex justify-center items-center transition-[height,width] duration-300 ease-in-out">
                <Logo width={70} height={70} />
                        </Link>
            <button
                className="bg-transparent block md:hidden border-0 cursor-pointer transition-all duration-300 ease-in-out focus:outline-0 hover:scale-105 z-[10000] relative"
                onClick={() => setOpen(!open)}
                aria-pressed={open}
                aria-label="Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={!isHomePage ? 'white' : 'var(--green-darker)'}
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
                    stroke="white"
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
                    />
                </svg>
            </button>
            <nav className="hidden md:block">
                <ul className="flex md:flex-row flex-col md:justify-end justify-start list-none m-0 md:gap-0 gap-[30px] md:p-0 p-0">
                    <li className="nav-item relative md:px-[25px] px-0 md:pr-[25px] pr-[40px] md:pl-[25px] pl-0 md:text-left text-right md:border-r md:border-black last:md:border-r-0">
                        <Link
                            href="/"
                            className={`nav-link uppercase cursor-pointer inline-block transition-colors duration-100 ease-in-out relative no-underline tracking-[3.5px] text-lg leading-none after:content-[''] after:absolute after:top-[calc(100%+10px)] after:left-1/2 after:-translate-x-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:opacity-0 after:transition-opacity after:duration-100 text-(--green-darker) ${
                                pathname === '/'
                                    ? `${
                                          isHomePage
                                              ? 'after:bg-(--green)'
                                              : 'after:bg-white'
                                      } after:opacity-100`
                                    : ''
                            } ${
                                isHomePage
                                    ? 'hover:!text-(--green) hover:after:bg-(--green) hover:after:opacity-100'
                                    : 'hover:!text-white hover:after:bg-white hover:after:opacity-100'
                            }`}
                        >
                            home
                        </Link>
                    </li>

                    <li className="nav-item relative md:px-[25px] px-0 md:pr-[25px] pr-[40px] md:pl-[25px] pl-0 md:text-left text-right md:border-r md:border-black last:md:border-r-0">
                        <Link
                            href="/services"
                            className={`nav-link uppercase cursor-pointer inline-block transition-colors duration-100 ease-in-out relative no-underline tracking-[3.5px] text-lg leading-none after:content-[''] after:absolute after:top-[calc(100%+10px)] after:left-1/2 after:-translate-x-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:opacity-0 after:transition-opacity after:duration-100 text-(--green-darker) ${
                                pathname === '/services' ||
                                pathname.split('/')[1] === 'services'
                                    ? `${
                                          isHomePage
                                              ? 'after:bg-(--green)'
                                              : 'after:bg-white'
                                      } after:opacity-100`
                                    : ''
                            } ${
                                isHomePage
                                    ? 'hover:!text-(--green) hover:after:bg-(--green) hover:after:opacity-100'
                                    : 'hover:!text-white hover:after:bg-white hover:after:opacity-100'
                            }`}
                        >
                            services
                        </Link>
                    </li>
                    <li className="nav-item relative md:px-[25px] px-0 md:pr-[25px] pr-[40px] md:pl-[25px] pl-0 md:text-left text-right md:border-r md:border-black last:md:border-r-0">
                        <Link
                            href="/ourteam"
                            className={`nav-link uppercase cursor-pointer inline-block transition-colors duration-100 ease-in-out relative no-underline tracking-[3.5px] text-lg leading-none after:content-[''] after:absolute after:top-[calc(100%+10px)] after:left-1/2 after:-translate-x-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:opacity-0 after:transition-opacity after:duration-100 text-(--green-darker) ${
                                pathname === '/ourteam'
                                    ? `${
                                          isHomePage
                                              ? 'after:bg-(--green)'
                                              : 'after:bg-white'
                                      } after:opacity-100`
                                    : ''
                            } ${
                                isHomePage
                                    ? 'hover:!text-(--green) hover:after:bg-(--green) hover:after:opacity-100'
                                    : 'hover:!text-white hover:after:bg-white hover:after:opacity-100'
                            }`}
                        >
                            our team
                        </Link>
                    </li>
                    <li className="nav-item relative md:px-[25px] px-0 md:pr-[25px] pr-[40px] md:pl-[25px] pl-0 md:text-left text-right md:border-r md:border-black last:md:border-r-0">
                        <Link
                            href="/testimonials"
                            className={`nav-link uppercase cursor-pointer inline-block transition-colors duration-100 ease-in-out relative no-underline tracking-[3.5px] text-lg leading-none after:content-[''] after:absolute after:top-[calc(100%+10px)] after:left-1/2 after:-translate-x-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:opacity-0 after:transition-opacity after:duration-100 text-(--green-darker) ${
                                pathname === '/testimonials'
                                    ? `${
                                          isHomePage
                                              ? 'after:bg-(--green)'
                                              : 'after:bg-white'
                                      } after:opacity-100`
                                    : ''
                            } ${
                                isHomePage
                                    ? 'hover:!text-(--green) hover:after:bg-(--green) hover:after:opacity-100'
                                    : 'hover:!text-white hover:after:bg-white hover:after:opacity-100'
                            }`}
                        >
                            Testimonials
                        </Link>
                    </li>
                    <li className="nav-item relative md:px-[25px] px-0 md:pr-[25px] pr-[40px] md:pl-[25px] pl-0 md:text-left text-right md:border-r md:border-black last:md:border-r-0">
                        <Link
                            href="/contact"
                            className={`nav-link uppercase cursor-pointer inline-block transition-colors duration-100 ease-in-out relative no-underline tracking-[3.5px] text-lg leading-none after:content-[''] after:absolute after:top-[calc(100%+10px)] after:left-1/2 after:-translate-x-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:opacity-0 after:transition-opacity after:duration-100 text-(--green-darker) ${
                                pathname === '/contact'
                                    ? `${
                                          isHomePage
                                                ? 'after:bg-(--green)'
                                              : 'after:bg-white'
                                      } after:opacity-100`
                                    : ''
                            } ${
                                isHomePage
                                    ? 'hover:!text-[var(--green)] hover:after:bg-[var(--green)] hover:after:opacity-100'
                                    : 'hover:!text-white hover:after:bg-white hover:after:opacity-100'
                            }`}
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
        </div>
        </>
    );
};

export default Navbar;
