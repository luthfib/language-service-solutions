import Link from 'next/link';
import base from './styles/base.js'
const Navbar = () => {
  return (
    <div className='navigation-wrapper'>
      <a className='logo-wrapper'>Logo</a>
      <nav className='navigation'>
        <ul>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>services</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>
      </nav>
      {/* Missing fonts, logo */}
      {/* delete VARIABLES HERE only while figuring out how to get globals from style base*/}
      <style jsx>{`
        .navigation-wrapper {
          --primary-dark: #346278;
          --primary-medium: #539b92;
          --primary-light: #7fbba1;
          --white: #fff;
          --black: #000;
          --gradient: linear-gradient(
            to right,
            var(--primary-dark),
            var(--primary-medium),
            var(--primary-light)
          );

          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;
          width: 100%;
          max-width: var(--content-width);
          background-image: var(--gradient);
        }

        .logo-wrapper {
          height: 50px;
          width: 50px;
          margin-left: 25px;
          border: 1px solid #fff;
          display: inline-block;
        }

        .navigation {
          width: 100%;
        }

        .navigation ul {
          display: flex;
          style-type: none;
          justify-content: flex-end;
          list-style: none;
        }

        .navigation li {
          padding: 0px 25px;
          border-right: 1px solid var(--white);
          border-right: 1px solid #fff;
        }

        .navigation li:last-of-type {
          border-right: none;
        }

        .navigation li a {
          text-transform: uppercase;
          cursor: pointer;
          display: inline-block;
          transition: color 0.1s ease;
          position: relative;
        }

        .navigation li a::after {
          content: '';
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          background-color: #d0d0d0ad;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          transform: translateX(-50%);
          opacity: 0;
        }

        .navigation li a:hover {
          color: var(--white);
          color: #fff;
        }

        .navigation li a:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
