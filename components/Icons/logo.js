const Logo = ({ width, height }) => {
  return (
    <>
      <img src='/icons/logo2.svg' />
      <style jsx>
        {`
          img {
            width: ${width};
            height: ${height};
            transition: height 0.3s ease, width 0.3s ease
          }
        `}
      </style>
    </>
  );
};

export default Logo;
