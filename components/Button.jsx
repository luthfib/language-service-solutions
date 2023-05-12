import Link from 'next/link';
import React from 'react';

const Button = ({ link, text }) => {
    return (
        <Link
            href={link ? link : 'mailto:murtado@languageservicesolutions.com'}
            legacyBehavior
        >
            <a
                href={
                    link ? link : 'mailto:murtado@languageservicesolutions.com'
                }
                className="text-center px-20 py-5 bg-green-darker text-white rounded-full uppercase text-xl font-light tracking-widest hover:bg-primary-medium hover:text-white transition-all duration-300 ease-in-out"
            >
                {text}
            </a>
        </Link>
    );
};

export default Button;
