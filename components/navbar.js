import Link from 'next/link';
import Logo from './Icons/logo'

const Navbar = ({ open, setOpen }) => {
  return (
    <div className='navigation-wrapper'>
      <Logo className='logo-wrapper'>Logo</Logo>
      <button
        className='hamburger'
        open={open}
        onClick={() => {
          setOpen(!open);
          console.log(open);
        }}
      ></button>
      <nav className='navigation'>
        <ul>
          <li>
            <a href='/'>home</a>
          </li>
          <li>
            <a href='/about'>about</a>
          </li>
          <li>
            <a href='/services'>services</a>
          </li>
          <li>
            <a href='/contact'>contact</a>
          </li>
        </ul>
      </nav>
      {/* Missing fonts, logo, get icon hamburger */}
      {/* delete the first chunck of VARIABLES HERE. only while figuring out how to get globals from style base*/}
      <style jsx>
        {`
          .navigation-wrapper {
            --gradient: linear-gradient(
              to right,
              var(--primary-dark),
              var(--primary-medium),
              var(--primary-light)
            );

            --space: 10px;
            --nav-height: 100px;
            --hamburger-size: 30px;
            --logo-size: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: var(--nav-height);
            width: 100%;
            max-width: var(--content-width);
            background-image: var(--gradient);
          }

          .logo-wrapper {
            height: var(--logo-size);
            width: var(--logo-size);
            margin-left: calc(var(--space) * 2.5);
            border: 1px solid #fff;
            display: inline-block;
            order: 1;
          }

          .hamburger {
            background-image: url('https://cdn4.iconfinder.com/data/icons/lightly-2-essential/24/menu-512.png');
            background-color: var(--transparent);
            display: none;
            border: 0;
            height: var(--hamburger-size);
            width: var(--hamburger-size);
            background-size: contain;
            background-repeat: no-repeat;
            margin-left: calc(var(--space) * 2.5);
            cursor: pointer;
          }
          .hamburger:focus {
            outline: 0;
          }

          .navigation {
            width: 100%;
            order: 2;
          }

          .navigation ul {
            display: flex;
            style-type: none;
            justify-content: flex-end;
            list-style: none;
            margin: 0;
          }

          .navigation li {
            padding: 0px calc(var(--space) * 2.5);
            border-right: 1px solid var(--white);
            border-right: 1px solid var(--white);
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
            text-decoration: none;
            color: var(--black);
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
          @media (hover: hover) {
            .navigation li a:hover {
              color: var(--white);
            }
          }

          .navigation li a:hover::after {
            opacity: 1;
          }

          @media (max-width: 768px) {
            .logo-wrapper {
              order: 2;
              margin-right: calc(var(--space) * 2.5);
            }

            .hamburger {
              display: block;
              z-index: 2;
            }

            .navigation {
              top: 0;
              left: -50%;
              height: 100%;
              width: 50%;
              order: 1;
              position: absolute;
              background-color: var(--primary-light);
              opacity: 0.95;
              transition: transform 0.7s ease-in-out;
              transform: ${open ? 'translateX(100%)' : 'translateX(-50%)'};
            }

            .navigation ul {
              flex-direction: column;
              justify-content: flex-start;
              position: absolute;
              top: calc(var(--nav-height));
              padding-left: calc(var(--space) * 2.5);
            }

            .navigation li {
              padding: 0px 0px calc(var(--space) * 3) calc(var(--space) * 3);
              border: 0;
            }

            .navigation li a {
              color: var(--white);
            }

            .navigation li a::after {
              top: calc(50%);
              left: calc(var(--space) * -1.5);
              transform: translateY(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
