'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface LogoProps {
    width?: number;
    height?: number;
}

const Logo = ({ width, height }: LogoProps) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    return (
        <Image
            src={isHomePage ? '/icons/logo_green.svg' : '/icons/logo.svg'}
            alt="Language Service Solutions Logo"
            width={width || 70}
            height={height || 70}
            className="cursor-pointer transition-all duration-300 ease-in-out"
            style={{
                width: 'var(--logo-size)',
                height: 'var(--logo-size)',
                maxWidth: '100%',
                objectFit: 'contain',
            }}
            priority
        />
    );
};

export default Logo;
