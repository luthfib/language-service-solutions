const Container = ({ children, background }) => (
    <>
        <div className="flex flex-col  justify-center items-center ">
            <div className="inner-container rounded-3xl w-full p-16 md:px-14">
                {children}
            </div>
        </div>
        <style jsx>{`
            .inner-container {
                background: ${background || 'var(--primary-medium)'};
                display: flex;
                flex-flow: column;
                font-weight: bold;
            }
        `}</style>
    </>
);

export default Container;
