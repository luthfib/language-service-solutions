import { useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import Logo from './Icons/logo';

const Navbar = ({ open, setOpen }) => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className='navigation' ref={node}>
      <div className='logo-wrapper'>
        <Logo width={'var(--logo-size)'} height={'var(--logo-size)'} />
      </div>
      <button className='hamburger' open={open} onClick={() => setOpen(!open)}></button>
      <nav className='nav'>
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
      <style jsx>
        {`
          .navigation {
            --gradient: linear-gradient(
              to right,
              var(--primary-dark),
              var(--primary-medium),
              var(--primary-light)
            );

            --space: 10px;
            --hamburger-size: 30px;
            --logo-size: 70px;
            --logo-circle: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: var(--nav-height);
            width: 100%;
            margin: 0 auto;

            transition: height 0.3s ease;
          }

          .logo-wrapper {
            height: var(--logo-circle);
            width: var(--logo-circle);
            margin-left: calc(var(--space) * 3.5);
            border: 2px solid var(--white);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            order: 1;
            transition: height 0.3s ease, width 0.3s ease;
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
            transition: transform 0.3s ease, height 0.3s ease, width 0.3s ease;
          }
          .hamburger:focus {
            outline: 0;
          }

          .hamburger:hover {
            transform: scale(1.05);
          }

          .nav {
            order: 2;
          }

          .nav ul {
            display: flex;
            style-type: none;
            justify-content: flex-end;
            list-style: none;
            margin: 0;
            margin-right: 10px;
          }

          .nav li {
            padding: 0px calc(var(--space) * 2.5);
            border-right: 1px solid var(--white);
            border-right: 1px solid var(--white);
          }

          .nav li:last-of-type {
            border-right: none;
          }

          .nav li a {
            text-transform: uppercase;
            cursor: pointer;
            display: inline-block;
            transition: color 0.1s ease;
            position: relative;
            text-decoration: none;
            color: var(--black);
            letter-spacing: 3.5px;
            font-size: 18px;
          }

          .nav li a::after {
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
            .nav li a:hover {
              color: var(--white);
            }
          }

          .nav li a:hover::after {
            opacity: 1;
          }

          @media (max-width: 768px) {
            .navigation {
              --logo-size: 50px;
              --logo-circle: 70px;
            }
            .logo-wrapper {
              order: 2;
              margin-right: calc(var(--space) * 2.5);
            }

            .hamburger {
              display: block;
              z-index: 2;
            }

            .nav {
              top: 0;
              left: -50%;
              height: 100vh;
              width: 50%;
              order: 1;
              position: absolute;
              background-color: var(--primary-light);
              opacity: 0.95;
              transition: transform 0.7s ease-in-out;
              transform: ${open ? 'translateX(100%)' : 'translateX(-50%)'};
            }

            .nav ul {
              flex-direction: column;
              justify-content: flex-start;
              position: absolute;
              top: calc(var(--nav-height));
              padding-left: calc(var(--space) * 2.5);
            }

            .nav li {
              padding: 0px 0px calc(var(--space) * 3) calc(var(--space) * 3);
              border: 0;
            }

            .nav li a {
              color: var(--white);
            }

            .nav li a::after {
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
