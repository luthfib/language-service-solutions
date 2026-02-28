import Link from 'next/link';
import React from 'react';

const Button = ({ link, text, title }) => {
    return (
        <Link
            href={link ? link : 'mailto:murtado@languageservicesolutions.com'}
            className="text-center px-20 py-5 bg-green-darker text-white rounded-full uppercase text-xl font-light tracking-widest hover:bg-primary-medium hover:text-white transition-all duration-300 ease-in-out"
            title={title || text}
        >
            {text}
        </Link>
    );
};

export default Button;
