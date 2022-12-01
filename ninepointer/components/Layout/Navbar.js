import navStyles from './Navbar.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaStream } from 'react-icons/fa';
import Dropdown from './Dropdown';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showExtended, setShowExtended] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  const changeNavbarBackground = () => {
    if (window.scrollY > 60) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
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
            <img src='/assets/svg-assets/ninepointer_logo.svg' alt='Logo' />
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
            <Link href='/create'>Become a Content Creator</Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <a
              href='/video'
              rel='noopener noreferer'
              target='_blank'
            >
              Browse our Content
            </a>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <div className={navStyles.highlight}>
              <Link href='/contact'>Contact</Link>
            </div>
          </li>
        </ul>
        {/* <NavbarItem />
      <NavbarItem /> */}
        {/* <Dropdown /> */}
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
              <Link href='/create'>Create with us</Link>
            </li>
            <li>
              <Link href='/video'>
                Browse Content
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* {dropdown && <Dropdown />} */}
    </div>
  );
};

export default Navbar;
