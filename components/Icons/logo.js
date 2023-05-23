import { useRouter } from 'next/router';

const Logo = ({ width, height }) => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    return (
        <>
            {isHomePage ? (
                <img src="/icons/logo_green.svg" alt="logo" />
            ) : (
                <img src="/icons/logo.svg" alt="logo" />
            )}

            <style jsx>
                {`
                    img {
                        width: ${width};
                        cursor: pointer;
                        height: ${height};
                        transition: height 0.3s ease, width 0.3s ease;
                    }
                `}
            </style>
        </>
    );
};

export default Logo;
