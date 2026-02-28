'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'home' },
        { href: '/services', label: 'services' },
        { href: '/ourteam', label: 'our team' },
        { href: '/testimonials', label: 'Testimonials' },
        { href: '/contact', label: 'contact' },
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        if (href === '/services') {
            return pathname === '/services' || pathname.split('/')[1] === 'services';
        }
        return pathname === href;
    };

    return (
        <>
            <style>{`
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 9998;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                }

                .mobile-menu-overlay.open {
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    max-width: 320px;
                    height: 100vh;
                    background-color: var(--green-darker);
                    z-index: 9999;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    padding: 100px 40px 40px;
                    overflow-y: auto;
                }

                .mobile-menu.open {
                    transform: translateX(0);
                }

                .mobile-nav-item {
                    margin-bottom: 30px;
                    position: relative;
                    padding-right: 40px;
                }

                .mobile-nav-link {
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 3.5px;
                    font-size: 18px;
                    line-height: 1;
                    display: inline-block;
                    transition: color 0.2s ease;
                    position: relative;
                }

                .mobile-nav-link::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: -25px;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: var(--yellow-light);
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }

                .mobile-nav-item.active .mobile-nav-link {
                    color: white;
                }

                .mobile-nav-item.active .mobile-nav-link::after {
                    opacity: 1;
                }

                .mobile-nav-link:hover {
                    color: var(--yellow-light);
                }

                .mobile-nav-link:hover::after {
                    opacity: 1;
                }
            `}</style>
            <div
                className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
                onClick={onClose}
                aria-hidden={!isOpen}
            />
            <nav
                className={`mobile-menu ${isOpen ? 'open' : ''}`}
                aria-hidden={!isOpen}
                aria-label="Mobile navigation menu"
            >
                <ul className="list-none m-0 p-0">
                    {navItems.map((item) => (
                        <li
                            key={item.href}
                            className={`mobile-nav-item ${isActive(item.href) ? 'active' : ''}`}
                            onClick={onClose}
                        >
                            <Link
                                href={item.href}
                                className="mobile-nav-link"
                                tabIndex={isOpen ? undefined : -1}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;
