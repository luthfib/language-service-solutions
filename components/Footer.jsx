import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-green">
                <div className="flex w-full justify-center items-center space-around flex-wrap py-8  gap-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/icons/footer_logo.svg"
                            alt="logo"
                            width="200"
                            height="200"
                            className="max-w-sm h-auto"
                        />
                    </div>
                    <span className="text-white h-6 bg-white w-[.2px] relative hidden xs:block"></span>
                    <div className="grid items-center justify-center">
                        <p className="mb-2">CONTACT US</p>
                        <small>Phone: (919) 949-9272</small>
                        <small>
                            Email: murtado@languageservicesolutions.com
                        </small>
                        <Link
                            href="/contact"
                            className="mt-4 px-6 py-2 bg-white text-[var(--green-darker)] rounded-[var(--border-radius)] font-semibold hover:bg-opacity-90 transition-all duration-300 text-center uppercase tracking-wide"
                        >
                            Contact Form
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
