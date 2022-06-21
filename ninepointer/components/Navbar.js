import navStyles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaStream } from 'react-icons/fa';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showExtended, setShowExtended] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY > 60) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBackground);
  }, []);

  return (
    <div className={navStyles.extendedNav}>
      <div
        className={
          active ? `${navStyles.active} ${navStyles.nav}` : navStyles.nav
        }
      >
        <div className={navStyles.logo}>
          <Link href='/'>
            <img
              src='assets/images/channels4_profile-removebg-preview.png'
              alt='Logo'
            />
          </Link>
        </div>
        <div className={navStyles.actionIcons}>
          <button
            onClick={() => {
              setShowExtended(!showExtended);
            }}
          >
            <FaStream size={18} />
          </button>
        </div>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/partner-program'>Become a partner</Link>
          </li>
          <li>
            <Link href='/content'>Browse content</Link>
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <div className={navStyles.highlight}>
              <Link href='/contactus'>Contact</Link>
            </div>
          </li>
        </ul>
        {/* <NavbarItem />
      <NavbarItem /> */}
      </div>
      {showExtended && (
        <div className={navStyles.navItems}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
