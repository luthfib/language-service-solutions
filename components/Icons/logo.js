const Logo = ({ width, height }) => {
  return (
    <>
      <img src="/icons/logo2.svg" alt="logo" />
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
