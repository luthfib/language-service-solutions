import Image from 'next/image';

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
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
