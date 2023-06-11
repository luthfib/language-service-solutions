const Container = ({ children, background }) => (
    <>
        <div className="flex flex-col justify-center items-center">
            <div
                className="inner-container flex flex-col font-bold rounded-3xl w-full p-16 md:px-14"
                style={{
                    background: `${background || 'var(--primary-medium)'}`,
                }}
            >
                {children}
            </div>
        </div>
    </>
);

export default Container;
