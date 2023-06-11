const ContactDetails = () => {
    return (
        <>
            <div className="bg-primary-medium w-full p-default flex justify-center rounded-3xl ">
                <div className=" flex items-center flex-wrap">
                    <div className="contact-container flex flex-col text-center justify-center">
                        <h2 className="sm:text-4xl text-3xl mb-4 text-white sm:text-center text-left">
                            CONTACT DETAILS
                        </h2>
                        <div className="flex items-center relative mb-5 hyphens-auto gap-5">
                            <div className=" sm:flex hidden items-center justify-center p-3 border-solid border-white border-2 rounded-full">
                                <img
                                    className="h-5 w-5 relative invert"
                                    src="/icons/phone.svg"
                                    alt="phone icon"
                                    height={20}
                                    width={20}
                                    loading="lazy"
                                />
                            </div>

                            <p className="text-left">Phone: (919) 949-9272</p>
                        </div>
                        <div className="flex items-center relative mb-5 hyphens-auto gap-5">
                            <div className="sm:flex hidden items-center justify-center p-3 border-solid border-white border-2 rounded-full">
                                <img
                                    src="/icons/email.svg"
                                    alt="email icon"
                                    className="h-5 w-5 relative invert"
                                    height={20}
                                    width={20}
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-left">
                                Email: murtado@languageservicesolutions.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactDetails;
