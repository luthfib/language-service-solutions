'use client';

import { usePathname } from 'next/navigation';

const Logo = ({ width, height }) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    return (
        <>
            {isHomePage ? (
                <img
                    src="/icons/logo_green.svg"
                    alt="logo"
                    width={width}
                    height={height}
                />
            ) : (
                <img
                    src="/icons/logo.svg"
                    alt="logo"
                    width={width}
                    height={height}
                />
            )}

            <style jsx>
                {`
                    img {
                        width: var(--logo-size);
                        cursor: pointer;
                        height: var(--logo-size);
                        transition: height 0.3s ease, width 0.3s ease;
                    }
                `}
            </style>
        </>
    );
};

export default Logo;
